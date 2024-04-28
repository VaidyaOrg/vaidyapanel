import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { InfoOutlined } from "@mui/icons-material";

function Form3() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Logic for form submission
    // For demonstration purposes, let's just open the snackbar
    setOpenSnackbar(true);
    navigate("/");
  };
  const [formData, setFormData] = useState({
    claimantFirstName: "",
    claimantLastName: "",
    designation: "",
    dept: "",
    entitlement: "",
    employeecode: "",
    telephoneNo: "",
    emailid: "",
    payinpayband: "",

    //info about patient starts
    patientName: "",
    natureofIllness: "",
    referredHospital: "",
    relationship: "",
    referringAMADate: "",

    //Details of treatment starts
    claimT_1_1: "",
    claimT_1_2: "",
    claimT_1_3: "",
    claimT_1_4: "",
    claimT_1_5: "",
    claimT_1_6: "",
    claimT_1_7: "",
    claimT_1_8: "",
    claimT_1_9: "",
    claimT_1_10: "",
    claimT_1_11: "",

    claimT_2_1: "",
    claimT_2_2: "",
    claimT_2_3: "",
    claimT_2_4: "",
    claimT_2_5: "",
    claimT_2_6: "",
    claimT_2_7: "",
    claimT_2_8: "",

    claimT_3_1: "",
    claimT_3_2: "",
    claimT_3_3: "",
    claimT_3_4: "",
    claimT_3_5: "",
    claimT_3_6: "",
    claimT_3_7: "",
    claimT_3_8: "",

    //Attachments start
    HCReferral: "",
    BillReceipt: "",
    dependentbooklet: "",
    prescriptionFile: "",

    //Bank details
    // AccountNo: "",
    // BankName: "",
    // expdate: "",
    // IFSC: "",
    // BankBranch: "",
    // Place: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
      <Box
        sx={{
          p: 2,
          m: 4,
          bgcolor: "background.paper",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
      >
        <Typography variant="h4" align="center" sx={{ pt: 2 }}>
          Medical Claim Form{" "}
          <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
            for Students
          </span>
        </Typography>

        <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          Application for claiming reimbursement of medical expenses incurred in
          connection with medical attendance/treatment for members of employees
          of the IIT Bhilai and their families.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ mt: 4, fontWeight: "bold" }}
          className="pb-4"
        >
          I. Student Details
        </Typography>

        <form>
          <div className=" container row ms-3">
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <label htmlFor="claimantName" className="mb-1">
                        *Name of Student/Patient:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <label htmlFor="empid" className="mb-1">
                        *Age:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField id="empid" variant="outlined" fullWidth />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <label htmlFor="designation" className="mb-1">
                        *ID No.:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="designation"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <label htmlFor="department" className="mb-1">
                        *Course/Program :
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField id="department" variant="outlined" fullWidth />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <label htmlFor="claimantName" className="mb-1">
                        *Name of reference AMA:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName" //Select resource option need to be placed here.
                        variant="outlined"
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <label htmlFor="designation" className="mb-1">
                        *Contact No.:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="designation"
                        variant="outlined"
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </form>

        <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bold" }}>
          II. Certified that I have taken treatment for the following:
        </Typography>

        <form>
          <div className=" container row ms-3">
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <label htmlFor="claimantName" className="mb-1">
                        Name of the illness/Diagnosis:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <label htmlFor="designation" className="mb-1">
                        Duration of the Treatment*
                      </label>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "20px" }}>
                      <TextField
                        type="date"
                        id="designation"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                      <TextField
                        type="date"
                        id="designation"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </form>
        <br />
        <Typography
          startDecorator={<InfoOutlined />}
          mb={2}
          sx={{ marginLeft: "10px" }}
        >
          *This has to be claimed within one month of duration of treatment
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bold" }}>
          III. Details of treatment and claim of reimbursement:
        </Typography>
        <div className="flex gap-10">
          <form>
            <div className=" container row ms-3">
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Sr. No
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Particulars
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Total Claim submitted (in Rs)
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Total Amount Recommended(in Rs) (Office Use Only)
                        </label>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.1
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Imaging/MRI/CT Scan/x-ray/sonography
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.2
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          CBC/Widal/LFT/RFT
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.3
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Urine-RM/Malaria
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.4
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          TSH, T3, T4, Sr. Electrolytes
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.5
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Any other laboratory Test/s Done
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.6
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          No of Consultation Charges( )
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.7
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Miscellaneous Charges
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          1.8
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Any Other
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <label
                          htmlFor="claimantName"
                          className="mb-1 font-semibold"
                        >
                          Total (A)
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </form>
          <form className="mr-[5vw]">
            <div className=" container row ms-3">
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Sr. No
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Name of the Medicine OR Invoice No
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Total Claim submitted (in Rs)
                        </label>
                      </TableCell>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Total Amount Recommended(in Rs) (Office Use Only)
                        </label>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.1
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.2
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.3
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.4
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.5
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.6
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.7
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          2.8
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <label
                          htmlFor="claimantName"
                          className="mb-1 font-semibold"
                        >
                          Total (B)
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </form>
        </div>

        <form>
          <div className=" container row ms-3 w-full">
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <label
                        htmlFor="claimantName"
                        className="mb-1 font-semibold"
                      >
                        Total Claim Submitted (A+B)
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <label
                        htmlFor="designation"
                        className="mb-1 font-semibold"
                      >
                        Total No. of Enclosures
                      </label>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "20px" }}>
                      <TextField
                        id="designation"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </form>
        <p className="font-bold text-center mt-2">Office use only</p>
        <form>
          <div className=" container row ms-3">
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <label
                        htmlFor="designation"
                        className="mb-1 font-semibold"
                      >
                        Advance Taken:
                      </label>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "20px" }}>
                      <TextField
                        id="designation"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <label
                        htmlFor="designation"
                        className="mb-1 font-semibold"
                      >
                        Total Amount Recommended:
                      </label>
                    </TableCell>
                    <TableCell style={{ display: "flex", gap: "20px" }}>
                      <TextField
                        id="designation"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </form>
        <br />

        <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bold" }}>
          IV. Details of treatment and claim of reimbursement:
        </Typography>
        <Typography>
          <Box sx={{ mt: 2, display: "flex", gap: "20vw" }}>
            <List
              component="ol"
              marker="decimal"
              sx={{ listStyleType: "disc", marginLeft: "20px" }}
            >
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  marker="decimal"
                  sx={{ display: "flex", gap: "10px" }}
                >
                  <Typography>
                    Referral letter by Medical officer of IIT Bhilai Health
                    Centre.
                  </Typography>
                  <TextField label="" type="file" size="small" />
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  marker="decimal"
                  sx={{ display: "flex", gap: "10px" }}
                >
                  <Typography>Copy of prescriptions.</Typography>
                  <TextField label="" type="file" size="small" />
                </ListItemText>
              </ListItem>
            </List>
            <List
              component="ol"
              marker="decimal"
              sx={{ listStyleType: "disc", marginLeft: "20px" }}
            >
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  marker="decimal"
                  sx={{ display: "flex", gap: "10px" }}
                >
                  <Typography>Original cash memos/receipts.</Typography>
                  <TextField label="" type="file" size="small" />
                </ListItemText>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText
                  marker="decimal"
                  sx={{ display: "flex", gap: "10px" }}
                >
                  <Typography>Copy of ID Card.</Typography>
                  <TextField label="" type="file" size="small" />
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bold" }}>
          V. Bank Details:
        </Typography>
        <br />
        <form>
          <div className=" container row ms-3">
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <label htmlFor="claimantName" className="mb-1">
                        Name and A/c No:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <label htmlFor="claimantName" className="mb-1">
                        IFSC Code:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <label htmlFor="claimantName" className="mb-1">
                        Bank:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <label htmlFor="claimantName" className="mb-1">
                        Branch:
                      </label>
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="claimantFirstName"
                        variant="outlined"
                        placeholder=""
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <div className="flex gap-10 ml-5">
              <Typography sx={{ marginTop: "10px" }}>Date</Typography>
              <TextField
                id="claimantFirstName"
                type="date"
                variant="outlined"
                placeholder=""
                fullWidth
              />
              <Typography sx={{ marginTop: "10px" }}>Place</Typography>
              <TextField
                id="claimantFirstName"
                variant="outlined"
                placeholder=""
                fullWidth
              />
            </div>
            <div className="flex gap-10 mt-10">
              <Typography sx={{ marginTop: "10px", fontWeight: '600' }}>Total Amount to be paid: </Typography>
              <TextField sx={{width: '50vw'}}
                id="claimantFirstName"
                variant="outlined"
                placeholder=""
                fullWidth
              />
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Register No.
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          placeholder=""
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <label htmlFor="claimantName" className="mb-1">
                          Serial No.:
                        </label>
                      </TableCell>
                      <TableCell>
                        <TextField
                          id="claimantFirstName"
                          variant="outlined"
                          placeholder=""
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

            </div>
          </div>
        </form>

        <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bold" }}>
          VI. Declaration
        </Typography>
        <br />
        <FormControlLabel
        control={<Checkbox />}
        label="I Certify the above pathological tests prescribed by me to arrive at the correct diagnosis."
        />
        <FormControlLabel
        control={<Checkbox />}
        label="I also certify that patient has been under treatment as prescribed by me and above medicines are purchased due to nonavailability at our health Centre."
        />

        <div>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={openSnackbar}
            autoHideDuration={10000} // Adjust duration as needed
            onClose={handleCloseSnackbar}
            message="Form submitted successfully!"
          />
        </div>
      </Box>
    </>
  );
}

export default Form3;
