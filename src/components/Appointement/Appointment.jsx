import React, { useState, useEffect } from "react";
import { loadResources } from "../../redux/actions/resources.js";
import { loadAppointment } from "../../redux/actions/appointment";
import { server } from "../../server.js";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {
  format,
  addDays,
  addYears,
  subYears,
  differenceInDays,
} from "date-fns";
import Loader from "../../components/Layout/Loader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../../styles/styles.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function Appointment() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [sidebarOption, setSidebarOption] = useState("myAppointments");
  const rowsPerPage = 7;
  const initialPageIndex = Math.floor(
    differenceInDays(new Date(), subYears(new Date(), 10)) / rowsPerPage
  );
  const [page, setPage] = useState(initialPageIndex);
  const startDate = addDays(subYears(new Date(), 10), page * rowsPerPage);
  const endDate = addDays(startDate, rowsPerPage);
  const timeSlots = generateTimeSlots();
  const [selectedOption, setSelectedOption] = useState("");
  const [appointment, setAppointment] = useState();
  const dispatch = useDispatch();
  const [formattedTime,setFormattedTime] = useState();
  const [resourceId,setResourceId] = useState();
  const { user, error, successMessage } = useSelector((state) => state.user);
  const {
    appointments,
    error: errorAppointments,
    isLoading: isLoadingAppointments,
  } = useSelector((state) => state.appointment);
  const {
    resources,
    error: errorResources,
    isLoading: isLoadingResources,
  } = useSelector((state) => state.resource);
  useEffect(() => {
    // fetchAppointments();
    // const startDate = addDays(subYears(selectedDate, 10), page * rowsPerPage);

    dispatch(loadAppointment());
    dispatch(loadResources());
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (errorAppointments) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (errorResources) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, selectedDate]);
  console.log(appointments, resources);
  function generateTimeSlots() {
    const timeSlots = [];
    let currentTime = new Date();
    currentTime.setHours(9, 30, 0, 0);
    const endTime = new Date();
    endTime.setHours(17, 15, 0, 0);
    while (currentTime <= endTime) {
      timeSlots.push(format(currentTime, "HH:mm"));
      currentTime = new Date(currentTime.getTime() + 15 * 60 * 1000);
    }
    return timeSlots;
  }

  const handleSlotClick = (time,index,selectedOption) => {
    setSelectedSlot(time);
    const x = formatTime(time,index);
    setFormattedTime(x);
    const selectedResource = resources.find(resource => resource.resourceName === selectedOption);
    console.log(selectedResource);
    // Check if the resource is found
    if (selectedResource) {
      // Extract the resourceId from the found resource object
      const resourceId = selectedResource._id;
      console.log(resourceId);
      setResourceId(resourceId);
      setShowPopup(true);
    } else {
      // Handle the case where the resource is not found
      console.error(`Resource not found for name: ${selectedOption}`);
    }
    setShowPopup(true);
  };



  const handleConfirmBooking = async () => {
    try {
      // Prepare the data to be sent in the request body
      console.log(resourceId);
      const data = {
        resource: resourceId, // Assuming selectedOption is the resourceId
        user: user._id, // Assuming user._id is the userId
        dateTime: formattedTime, // Assuming selectedSlot is the time
      };
  
      // Make the POST request to the server to book the appointment
      const response = await axios.post(`${server}/appointment`, data, {
        withCredentials: true, // Include credentials if necessary
      });
  
      // Handle the response accordingly
      alert('Appointment booked');
      // Add any additional logic here, such as updating the UI
      // For now, let's just close the popup
      setShowPopup(false);
      dispatch(loadAppointment());
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error booking appointment:', error);
      // You can display an error message or handle the error in another way
    }
  };
  

  const handlePageChange = (newPage) => {
    if (
      newPage < 0 &&
      differenceInDays(startDate, subYears(new Date(), 10)) <= 0
    ) {
      return; // Prevent going back further than 10 years
    }
    setPage(newPage);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
    const daysDifference = differenceInDays(date, subYears(new Date(), 10));
    setPage(Math.floor(daysDifference / rowsPerPage));
  };

  const handleSidebarOptionChange = (option) => {
    setSidebarOption(option);
    setSelectedOption(option);
  };
  const handleResourceChange = (resourceName) => {
    setSelectedOption(resourceName);
  };
  const formatTime = (time,index) => {
    const currentDate = addDays(startDate, index);
    const formattedDateTime =
      format(currentDate, "yyyy-MM-dd") + "T" + time + ":00.000Z";
    return formattedDateTime;
  }
  const isSlotBooked = (time, index) => {
    // Filter appointments for the selected resource
    const resourceAppointments = appointments.filter(
      (appointment) => appointment.resourceName === selectedOption
    );

    // Get the date corresponding to the current column
    const currentDate = addDays(startDate, index);
    // console.log(currentDate);
    // Format the current date and time
    const formattedDateTime =
      format(currentDate, "yyyy-MM-dd") + "T" + time + ":00.000Z";
    // // Check if there is an appointment at the specified time for the selected resource
    return resourceAppointments.some(
      // (appointment) => format(appointment.dateTime, "dd/MM/yyyy HH:mm") === formattedDateTime
      (appointment) => appointment.time === formattedDateTime
    );
    // return true;
  };

  // const slotColored = async (time, index) => {

  //     // Filter appointments for the selected resource
  //     const resourceAppointments = appointments.filter(
  //       (appointment) => appointment.resourceName === selectedOption
  //     );
  
  //     // Get the date corresponding to the current column
  //     const currentDate = addDays(startDate, index);
  
  //     // Format the current date and time
  //     const formattedDateTime =
  //       format(currentDate, "yyyy-MM-dd") + "T" + time + ":00.000Z";
  
  //     // Check if there is an appointment at the specified time for the selected resource
  //     try {
  //     const isAppointment = await resourceAppointments.find(
  //       (appointment) => appointment.time === formattedDateTime
  //     );
  //     console.log(isAppointment)
  
  //     if (isAppointment) {
  //       // Check if the appointment is in the past
  //       const isPast = new Date(formattedDateTime) < new Date();
  
  //       // Check if the appointment belongs to the current user
  //       const isCurrentUserAppointment = appointment.userId === user.id;
  
  //       if (isPast) {
  //         if (isCurrentUserAppointment) {
  //           // Past appointment of the current user
  //           return { color: "orange", text: "My Past Reservations" };
  //         } else {
  //           // Past appointment of another user
  //           return { color: "red", text: "Other Past Reservations" };
  //         }
  //       } else {
  //         if (isCurrentUserAppointment) {
  //           // Future appointment of the current user
  //           return { color: "green", text: "My Appointments" };
  //         } else {
  //           // Future appointment of another user
  //           return { color: "lightgreen", text: "Other Appointments" };
  //         }
  //       }
  //     } else {
  //       // Slot is not booked
  //       return { color: "white", text: "null" };
  //     }
  //   } catch (error) {
  //     console.error("Error in slotColored function:", error);
  //     // Handle the error appropriately
  //     return { color: "white", text: "null" }; // or throw the error
  //   }
  // };
  

  const renderContent = () => {
    switch (sidebarOption) {
      case "myAppointments":
        return (
          <div>
            <FormControl
              fullWidth
              style={{
                width: "20vw",
                backgroundColor: "#ffffff",
                margin: "10px",
              }}
            >
              <InputLabel id="resource-select-label">
                Select Resource
              </InputLabel>
              <Select
                labelId="resource-select-label"
                id="resource-select"
                value={selectedOption}
                onChange={(e) => handleResourceChange(e.target.value)}
                label="Select Resource"
                style={{ backgroundColor: "#ffffff" }}
              >
                <MenuItem value="">
                  <em>__ Please Select your Resource</em>
                </MenuItem>
                {resources &&
                  resources.map((res, index) => (
                    <MenuItem key={index} value={res.resourceName}>
                      {res.resourceName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* Table for selected resource */}
            {selectedOption && (
              <TableContainer
                component={Paper}
                style={{
                  padding: "15px",
                  marginBottom: "20px",
                  width: "85vw",
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Time</TableCell>
                      {[...Array(rowsPerPage)].map((_, index) => (
                        <TableCell key={index}>
                          {format(addDays(startDate, index), "dd/MM/yyyy (E)")}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {timeSlots.map((time, index) => (
                      <TableRow key={index}>
                        <TableCell>{time}</TableCell>
                        {[...Array(rowsPerPage)].map((_, index) => (
                          <TableCell
                            key={index}
                            className="slot"
                            onClick={() => handleSlotClick(time,index,selectedOption)}
                            style={{
                              border: "1px solid black",
                              cursor: "pointer",
                              backgroundColor: isSlotBooked(time, index)
                                ? "green"
                                : "white",
                            }}
                          >
                            {isSlotBooked(time, index) && "Booked"}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                  {/* <TableBody>
                    {isLoadingAppointments || isLoadingResources ? (
                      <TableRow>
                        <TableCell colSpan={rowsPerPage + 1} align="center">
                          Loading...
                        </TableCell>
                      </TableRow>
                    ) : (
                      timeSlots.map((time, index) => (
                        <TableRow key={index}>
                          <TableCell>{time}</TableCell>
                          {[...Array(rowsPerPage)].map((_, colIndex) => {
                            const appointmentIndex =
                              index * rowsPerPage + colIndex;
                            const { color, text } = slotColored(
                              time,
                              appointmentIndex
                            );
                            return (
                              <TableCell
                                key={colIndex}
                                className="slot"
                                style={{
                                  border: "1px solid black",
                                  cursor: "pointer",
                                  backgroundColor: color,
                                }}
                              >
                                {text}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))
                    )}
                  </TableBody> */}
                </Table>
              </TableContainer>
            )}
          </div>
        );
      case "resources":
        return (
          <TableContainer
            component={Paper}
            style={{ padding: "15px", marginBottom: "20px", width: "80vw" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Resource Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>System Owners</TableCell>
                  <TableCell>Operators</TableCell>
                  <TableCell>Faculty In Charge</TableCell>
                  <TableCell>Lab Phone Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resources &&
                  resources.map((res, index) => (
                    <TableRow key={index}>
                      <TableCell>{res.resourceName}</TableCell>
                      <TableCell>{res.category}</TableCell>
                      <TableCell>{res.systemOwners.join(", ")}</TableCell>
                      <TableCell>{res.operators.join(", ")}</TableCell>
                      <TableCell>{res.facultyInCharge}</TableCell>
                      <TableCell>{res.phoneNumber}</TableCell>
                    </TableRow>
                  ))}
                {!resources && (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No resources available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {isLoadingAppointments || isLoadingResources ? (
        <Loader />
      ) : (
        <div className="App" style={{ display: "flex" }}>
          {/* Sidebar */}
          <div
            style={{
              width: "200px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              marginTop: "20px",
              marginLeft: "20px",
              marginBottom: "20px",
              height: "fit-content",
            }}
            className="h-20"
          >
            <Button
              onClick={() => handleSidebarOptionChange("myAppointments")}
              style={{
                width: "100%",
                padding: "10px 0",
                marginBottom: "10px",
                color:
                  selectedOption === "myAppointments" ? "#49B9C8" : "black",
              }}
            >
              My Appointments
            </Button>
            {/* <Button
              onClick={() => handleSidebarOptionChange("otherAppointments")}
              style={{
                width: "100%",
                padding: "10px 0",
                marginBottom: "10px",
                color:
                  selectedOption === "otherAppointments" ? "#49B9C8" : "black",
              }}
            >
              Other Appointments
            </Button> */}
            <Button
              onClick={() => handleSidebarOptionChange("resources")}
              style={{
                width: "100%",
                padding: "10px 0",
                marginBottom: "10px",
                color: selectedOption === "resources" ? "#49B9C8" : "black",
              }}
            >
              Resources
            </Button>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1, marginLeft: "10px", marginRight: "20px" }}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
              className={`d-flex justify-content-center pt-2 ${styles.heading}`}
            >
              <h1 className="texthead leading-relaxed font-[600]">
                Book{" "}
                <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
                  Appointment
                </span>
              </h1>
            </div>
            {/* Calendar and Table */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <Button
                onClick={() => setShowCalendar(true)}
                variant="contained"
                style={{ backgroundColor: "#49B9C8", color: "#fff" }}
              >
                Go to Date
              </Button>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={
                    page === 0 &&
                    differenceInDays(startDate, subYears(new Date(), 10)) <= 0
                  }
                  variant="contained"
                  style={{ backgroundColor: "#49B9C8", color: "#fff" }}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={endDate >= addYears(new Date(), 10)}
                  variant="contained"
                  style={{ backgroundColor: "#49B9C8", color: "#fff" }}
                >
                  Next
                </Button>
              </div>
            </div>
            {renderContent()}
          </div>
          {/* Popups */}
          {/* Appointment Popup */}
          <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
            <DialogTitle>Confirm Booking</DialogTitle>
            <DialogContent>
              <DialogContentText>
                You are about to book the appointment for {selectedSlot}. Are
                you sure?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleConfirmBooking}>Confirm</Button>
              <Button onClick={() => setShowPopup(false)}>Cancel</Button>
            </DialogActions>
          </Dialog>
          {/* Calendar Popup */}
          <Dialog open={showCalendar} onClose={() => setShowCalendar(false)}>
            <DialogTitle>Select Date</DialogTitle>
            <DialogContent>
              <Calendar onChange={handleDateChange} value={selectedDate} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowCalendar(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default Appointment;
