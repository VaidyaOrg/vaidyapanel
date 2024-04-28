import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
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
import { Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Form1() {
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
          Outdoor Treatment
        </span>
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 10, fontWeight: "bold" }}>
        I. Information of the Claimant
      </Typography>

      <form>
        <div className="container row ms-3 pt-4">
          {/* <div className="col col-xs-12 m-3">
                            <label className="mb-1" htmlFor="claimantName">*Claimant's Name:</label>
                            <div className='row inpbox'>
                                <div className='col'>
                                    <input className='form-control me-1 mb-2' type="text" id="claimantName" name="claimantName" placeholder='First Name' />
                                </div>
                                <div className='col'>
                                    <input className='form-control mb-2' type="text" id="claimantName" name="claimantName" placeholder='Last Name' />
                                </div>
                            </div>
                            <label className="mb-1" htmlFor="designation">*Designation:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="designation" name="designation" />

        SubmissionDate: "",
        signatureFile: ""

                           
                        </div> */}
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <label htmlFor="claimantName" className="mb-1">
                      *Claimant's Name:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="claimantName"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="empid" className="mb-1">
                      *Employee ID.:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="empid" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <label htmlFor="designation" className="mb-1">
                      *Designation:
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
                    <label htmlFor="telno" className="mb-1">
                      *Tel. No. :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="telno" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <label htmlFor="department" className="mb-1">
                      *Department:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="department"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="emailid" className="mb-1">
                      *Email ID:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="emailid" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* <div className="col col-xs-12 m-3">
            <label className="mb-1" htmlFor="employeeCode">
              *Employee Code:
            </label>
            <input
              className="form-control mb-2 inpbox"
              type="text"
              id="employeeCode"
              name="employeeCode"
            />

            <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                Application for claiming reimbursement of medical expenses incurred in connection with medical attendance/treatment for members of employees of the IIT Bhilai and their families.
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: 'bold' }}>I. Information of the Claimant</Typography>
            <label className="mb-1" htmlFor="emailId">
              *Email ID:
            </label>
            <input
              className="form-control mb-2 inpbox"
              type="text"
              id="emailId"
              name="emailId"
              placeholder="name@example.com"
            />
          </div> */}
        </div>
      </form>

      <form>{/* Form fields go here */}</form>

      <form>
        <div className="container row ms-3 pt-4">
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <label htmlFor="patientName" className="mb-1">
                      *Patient's Name:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="patientName"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="patientId" className="mb-1">
                      *ID No.:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="patientId" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <label htmlFor="relation" className="mb-1">
                      *Relationship:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="relation"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="illness" className="mb-1">
                      *Nature of Illness :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="illness" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <label htmlFor="reference" className="mb-1">
                      *Referring AMA:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="reference"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="hospital" className="mb-1">
                      *Hospital Name:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="hospital" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </form>

      <form>{/* Form fields go here */}</form>

      <Typography variant="h6" sx={{ mt: 4 }}>
        III. Please provide the following details of medical expenses.
      </Typography>

      <TableContainer>
        <Table border="1" border-collapse="collapse">
          <TableHead>
            <TableRow>
              <TableCell>S.No.</TableCell>
              <TableCell>Particulars</TableCell>
              <TableCell>Total Claim submitted (in Rs)</TableCell>
              <TableCell>S.No.</TableCell>
              <TableCell>Name of the Medicine OR Invoice No</TableCell>
              <TableCell>Total Claim submitted (in Rs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <tr>
              <td>1.1</td>
              <td>Imaging/MRI/CT/Scan/x-ray/sonography </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_1}
                  onChange={handleChange}
                />
              </td>
              <td>2.1</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_1}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_1}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>1.2</td>
              <td>CBC/Widal/LFT/RFT</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_2}
                  onChange={handleChange}
                />
              </td>
              <td>2.2</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_2}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_2}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>1.3</td>
              <td>Urine-RM/Malaria</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_3}
                  onChange={handleChange}
                />
              </td>
              <td>2.3</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_3}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_3}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>1.4</td>
              <td>TSH, T3, T4 Sr. Electrolytes</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_4}
                  onChange={handleChange}
                />
              </td>
              <td>2.4</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_4}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_4}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>1.5</td>
              <td>Any other laboratory Test/s Done</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_5}
                  onChange={handleChange}
                />
              </td>
              <td>2.5</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_5}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_5}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>1.6</td>
              <td>No of Consultation Charges( )</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_6}
                  onChange={handleChange}
                />
              </td>
              <td>2.6</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_6}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_6}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>1.7</td>
              <td>Miscellaneous Charges</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_7}
                  onChange={handleChange}
                />
              </td>
              <td>2.7</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_7}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_7}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>1.8</td>
              <td>Any Other</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_8}
                  onChange={handleChange}
                />
              </td>
              <td>2.8</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_2_8}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_3_8}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Total(A)</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_9}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Total Claim Submitted (A+B) :</td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_10}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Total Number of Enclosures : </td>
              <td>
                <input
                  className="claimInput form-control"
                  type="text"
                  value={formData.claimT_1_11}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="Total Claim submitted (A+B):"
          variant="outlined"
          size="small"
        />
        <TextField
          label="Total no of Enclosures:"
          variant="outlined"
          size="small"
        />
      </Box>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Attachments(Self Attested)
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Attachments(Self Attested):
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          <TextField label="" type="file" size="small" />
          <TextField label="" type="file" size="small" />
          <TextField label="" type="file" size="small" />
          <TextField label="" type="file" size="small" />
        </Box>
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Declaration :
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Countersigned and certified that the claim :
        </Typography>
        <ol>
          <li>Is genuine.</li>
          <li>Is covered by the rules and order of the subject.</li>
          <li>Is supported by bills, receipt and other certificates etc.</li>
          <li>Was not drawn before and</li>
          <li>Has been sanctioned/countersigned by me.</li>
        </ol>
      </Box>

      <FormControlLabel
        control={<Checkbox />}
        label="I hereby declare that the statement made in this application are true to the best of my knowledge and belief/and that the person for whom medical expenses were incurred is wholly dependent upon me and is not an earning member of the family."
      />

      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <TextField label="" type="date" size="small" />
        <TextField label="" type="file" size="small" />
      </Box>

      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <TextField label="" type="date" size="small" />
        <TextField label="" type="file" size="small" />
      </Box>

      <div>
        <Box sx={{ mt: 2, textAlign: "center" }}>
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
          // You can also customize the snackbar message further if needed
          // message={<span id="message-id">Form submitted successfully!</span>}
        />
      </div>
    </Box>
  );
}

export default Form1;
