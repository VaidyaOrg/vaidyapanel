import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Staff_name, role, timing, available_days, book ) {
  return { Staff_name, role, timing, available_days, book };
}

const rows = [
  createData('Dr. Atul Prakash Srivastave', 'General Physician', '09:30 AM TO 05:30 PM', 'Monday to Friday', 'book'),
  createData('Dr. Keshav Dewangan', 'General Medicine', '02:30 PM TO 04:30 PM', 'Monday, Saturday', 'book'),
  createData('Dr. Sarita Khandelwal MS', 'Obs & Gynae', '09:30 AM TO 11:30 AM', 'Monday, Thursday', 'book'),
  createData('Mr. Raghvendra Sharma', 'Staff Nurse', '09:30 AM TO 05:30 PM', 'Monday to Friday', 'book'),
  createData('Mrs. Deeplata Thakre', 'Staff Nurse', '09:30 AM TO 05:30 PM', 'Monday to Friday', 'book'),
  createData('Ms. Priyanka Malhotra', 'Psychological Counsellor', '09:30 AM TO 05:30 PM', 'Monday, Saturday', 'book'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Staff</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Timing&nbsp;</TableCell>
            <TableCell align="left">Available Days&nbsp;</TableCell>
            <TableCell align="left">Book&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Staff_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Staff_name}
              </TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.timing}</TableCell>
              <TableCell align="left">{row.available_days}</TableCell>
              <TableCell align="left">{row.book}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}