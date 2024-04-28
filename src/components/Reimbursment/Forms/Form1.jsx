import React from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function Form1() {
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

            <Typography variant="h6" sx={{ mt: 4 }}>Details of Treatment</Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No.</TableCell>
                            <TableCell>Particulars</TableCell>
                            <TableCell>Total Claim Submitted (Rs)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Table rows go here */}
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No.</TableCell>
                            <TableCell>Name of the Medicine or Invoice no</TableCell>
                            <TableCell>Total Claim Submitted (Rs)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Table rows go here */}
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
