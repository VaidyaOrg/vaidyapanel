import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(test, days, timing, result, book ) {
  return { test, days, timing, result, book };
}

const rows = [
  createData('Test1', 'Monday, Tuesday', '02:30 PM TO 04:30 PM', 'Within 2 days', 'book'),
  createData('Test2', 'Saturday, Sunday', '02:30 PM TO 04:30 PM', 'Within 2 days', 'book'),
  createData('Test3', 'Friday', '09:30 AM TO 11:30 AM', 'Within 1 week', 'book'),
  createData('Test4', 'Friday', '09:30 AM TO 05:30 PM', 'Within 2hrs', 'book'),
  createData('Test5', 'Monday', '09:30 AM TO 05:30 PM', 'Within 1 day', 'book'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Test Name</TableCell>
            <TableCell align="left">Available Days</TableCell>
            <TableCell align="left">Timings&nbsp;</TableCell>
            <TableCell align="left">Result time&nbsp;</TableCell>
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
                {row.test}
              </TableCell>
              <TableCell align="left">{row.days}</TableCell>
              <TableCell align="left">{row.timing}</TableCell>
              <TableCell align="left">{row.result}</TableCell>
              <TableCell align="left">{row.book}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}