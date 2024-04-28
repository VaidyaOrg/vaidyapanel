import React,{useState} from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Form2() {

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
        claimT_1_12: "",
        claimT_1_13: "",
        claimT_1_14: "",
        claimT_1_15: "",
        claimT_1_16: "",
        claimT_1_17: "",
        claimT_1_18: "",
        claimT_1_19: "",
        claimT_1_20: "",
        claimT_2_1: "",
        claimT_2_2: "",
        claimT_2_3: "",
        claimT_2_4: "",
        claimT_2_5: "",
        claimT_2_6: "",
        claimT_2_7: "",
        claimT_2_8: "",
        claimT_2_9: "",
        claimT_2_10: "",    
        
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

        SubmissionDate: "",
        signatureFile: ""

        // Add other form fields here
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/apis/users/formfill", formData);
          console.log(response.data);
          // Handle success, e.g., show a success message to the user
        } catch (error) {
          console.error("Error submitting form:", error);
          console.log(error);
          // Handle error, e.g., show an error message to the user
        }
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
          Indoor Treatment
        </span>
      </Typography>

      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        Application for claiming reimbursement of medical expenses incurred in
        connection with medical attendance/treatment for members of employees of
        the IIT Bhilai and their families.
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bold" }}>
        I. Information of the Claimant
      </Typography>

      <form>
        <div className=" container row ms-3">
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

                            <label className="mb-1" htmlFor="department">*Department:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="department" name="department" />

                           
                        </div> */}
          <TableContainer>
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
                      id="claimantFirstName"
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
                    <label htmlFor="tel" className="mb-1">
                      *Tel. No. :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="tel" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <label htmlFor="department" className="mb-1">
                      *Department :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="department" variant="outlined" fullWidth />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="email" className="mb-1">
                      *Email ID:
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="email" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <label htmlFor="ward" className="mb-1">
                      *Entitlement of ward :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="ward" variant="outlined" fullWidth />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="pay" className="mb-1">
                      *Pay in Pay Band & Grade Pay (Rs.):
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="pay" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </form>

      <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bold" }}>
        II. Information regarding the patient
      </Typography>

      <form>
        <div className=" container row ms-3">
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

                            <label className="mb-1" htmlFor="department">*Department:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="department" name="department" />

                           
                        </div> */}
          <TableContainer>
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
                      id="patientFirstName"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="relationship" className="mb-1">
                      *Relationship :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="relationship" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                  <label htmlFor="illness" className="mb-1">
                      *Nature of illness & its period :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="illness"
                      variant="outlined"
                      placeholder=""
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="refer" className="mb-1">
                      *Name of Referring AMA/Date :
                    </label>
                  </TableCell>
                  <TableCell>
                    <TextField id="refer" variant="outlined" fullWidth />
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <label htmlFor="hospital" className="mb-1">
                      *Referred Hospital Name :
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

      <Typography variant="h6" sx={{ mt: 4 }}>III. Hospital Expenses Information</Typography>

<TableContainer>
    <Table border="1" border-collapse="collapse">
        <TableHead>
            <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>Particulars</TableCell>
                <TableCell>Claim Submitted (Rs)</TableCell>
                <TableCell>Claim Submitted (Rs)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
                    <tr>
                        <td>1</td>
                        <td>Accommodation/ Bed Charges </td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_1}
                        onChange={handleChange}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Registration Fee</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_2}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Consultation/ Doctor</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_3}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Surgeon Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_4}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nursing Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_5}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Operation Theater Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_6}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>7</td>
                        <td>X-ray</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_7}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Hospital Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_8}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Physiotherapy Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_9}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Blood Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_10}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Test & Procedure </td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_11}
                        onChange={handleChange}
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Angioplasty Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_12}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Medicine Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_13}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Medicine Purchased from market</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_14}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Imaging Service Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_5}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Diagnostic Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_16}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>17</td>
                        <td>ECG</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_17}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Consumable Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_18}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>19</td>
                        <td>Any other Charges paid to Hospital</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_19}
                        onChange={handleChange}
                        /></td>

                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Miscellaneous Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_20}
                        onChange={handleChange}
                        /></td>
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

      <form>{/* File upload fields go here */}</form>

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

      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Button variant="contained" color="primary" size="large">
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Form2;


