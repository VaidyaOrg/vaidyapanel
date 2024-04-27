import React, { useState, useEffect } from "react";
import { loadResources } from "../../redux/actions/resources.js";
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
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../../styles/styles.js";
import { useDispatch, useSelector } from "react-redux";

function Appointment() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [page, setPage] = useState(0);
  const [sidebarOption, setSidebarOption] = useState("myAppointments");
  const rowsPerPage = 7;
  const startDate = addDays(subYears(new Date(), 10), page * rowsPerPage);
  const endDate = addDays(startDate, rowsPerPage);
  const timeSlots = generateTimeSlots();
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
    //   dispatch(loadResources());
    //   if (error) {
  //     toast.error(error);
  //     dispatch({ type: "clearErrors" });
  //   }
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     dispatch({ type: "clearMessages" });
  //   }
  // }, [error, successMessage,dispatch]);
  useEffect(() => {
    dispatch(loadResources());
  }, [dispatch]);
  const {resources} = useSelector(
    (state) => state.resource
  );
  console.log(resources);
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

  const handleSlotClick = (time) => {
    setSelectedSlot(time);
    setShowPopup(true);
  };

  const handleConfirmBooking = () => {
    // Here you can implement the logic to book the appointment
    // For now, let's just close the popup
    setShowPopup(false);
    // Add your booking logic here
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

  const renderContent = () => {
    switch (sidebarOption) {
      case "myAppointments":
        return (
          <TableContainer
            component={Paper}
            style={{ padding: "15px", marginBottom: "20px", width: "85vw" }}
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
                        onClick={() => handleSlotClick(time)}
                        className="slot"
                        style={{
                          border: "1px solid black",
                          cursor: "pointer",
                        }}
                      >
                        {selectedSlot === time && "Selected"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
            color: selectedOption === "myAppointments" ? "#49B9C8" : "black",
          }}
        >
          My Appointments
        </Button>
        <Button
          onClick={() => handleSidebarOptionChange("otherAppointments")}
          style={{
            width: "100%",
            padding: "10px 0",
            marginBottom: "10px",
            color: selectedOption === "otherAppointments" ? "#49B9C8" : "black",
          }}
        >
          Other Appointments
        </Button>
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
            You are about to book the appointment for {selectedSlot}. Are you
            sure?
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
  );
}

export default Appointment;
