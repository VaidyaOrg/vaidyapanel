import React,{useState} from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Form1() {

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
        <Box sx={{ p: 2, m: 4, bgcolor: 'background.paper', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
            <Typography variant="h4" align="center" sx={{ pt: 2 }}>Medical Claim Form <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Outdoor Treatment</span></Typography>

            <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                Application for claiming reimbursement of medical expenses incurred in connection with medical attendance/treatment for members of employees of the IIT Bhilai and their families.
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: 'bold' }}>I. Information of the Claimant</Typography>

            <form>
                {/* Form fields go here */}
            </form>

            <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: 'bold' }}>II. Information regarding the patient</Typography>

            <form>
                {/* Form fields go here */}
            </form>

            <Typography variant="h6" sx={{ mt: 4 }}>III. Please provide the following details of medical expenses.</Typography>

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
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_1}
                        onChange={handleChange}
                        /></td>
                        <td>2.1</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_1}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_1}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>1.2</td>
                        <td>CBC/Widal/LFT/RFT</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_2}
                        onChange={handleChange}
                        /></td>
                        <td>2.2</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_2}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_2}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>1.3</td>
                        <td>Urine-RM/Malaria</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_3}
                        onChange={handleChange}
                        /></td>
                        <td>2.3</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_3}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_3}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>1.4</td>
                        <td>TSH, T3, T4 Sr. Electrolytes</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_4}
                        onChange={handleChange}
                        /></td>
                        <td>2.4</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_4}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_4}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>1.5</td>
                        <td>Any other laboratory Test/s Done</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_5}
                        onChange={handleChange}
                        /></td>
                        <td>2.5</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_5}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_5}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>1.6</td>
                        <td>No of Consultation Charges( )</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_6}
                        onChange={handleChange}
                        /></td>
                        <td>2.6</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_6}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_6}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>1.7</td>
                        <td>Miscellaneous Charges</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_7}
                        onChange={handleChange}
                        /></td>
                        <td>2.7</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_7}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_7}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td>1.8</td>
                        <td>Any Other</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_8}
                        onChange={handleChange}
                        /></td>
                        <td>2.8</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_2_8}
                        onChange={handleChange}
                        /></td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_3_8}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total(A)</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_9}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Claim Submitted (A+B) :</td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_10}
                        onChange={handleChange}
                        /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Number of Enclosures : </td>
                        <td><input className='claimInput form-control' type="text"  
                        value={formData.claimT_1_11}
                        onChange={handleChange}
                        />
                        </td>
                    </tr>
        </TableBody>
    </Table>
</TableContainer>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                <TextField label="Total Claim submitted (A+B):" variant="outlined" size="small" />
                <TextField label="Total no of Enclosures:" variant="outlined" size="small" />
            </Box>

            <Typography variant="h6" sx={{ mt: 4 }}>Attachments(Self Attested)</Typography>

            <form>
                {/* File upload fields go here */}
            </form>

            <Typography variant="h6" sx={{ mt: 4 }}>Declaration :</Typography>

            <Box sx={{ mt: 2 }}>
                <Typography variant="body1">Countersigned and certified that the claim :</Typography>
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

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <TextField label="" type="date" size="small" />
                <TextField label="" type="file" size="small" />
            </Box>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button variant="contained" color="primary" size="large">Submit</Button>
            </Box>
        </Box>
    );
}

export default Form1;
