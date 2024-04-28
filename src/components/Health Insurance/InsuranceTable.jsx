import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Details, Amount ) {
  return { Details, Amount };
}

const rows = [
  createData('Name of Company', 'Royal Sundaram General Insurance'),
  createData('TPA', 'Paramount'),
  createData('Authorised Person', 'Mr. Pranjal Sharma'),
  createData('Contact No', '9977333389'),
  createData('Email', 'pranjal.sharma@paramounttpa.com'),
  createData('Medical Claim Sum Insured', '1,00,000/-'),
  createData('Accidental Claim Sum Insured', '1,00,000/-'),
  createData('Accidental death/Permanent Disability', '2,00,000/-'),
  createData('Loss of Laptop', '45,000/-'),
  createData('Damage/Loss of Baggage', '5000/-'),
  createData('Buffer Amount', '5,00,000/-'),
  createData('Ward Entitle', 'General ward')
];

export default function InsuranceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Insurance Coverage Details</TableCell>
            <TableCell align="left">Coverage Amount (Rs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Details}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Details}
              </TableCell>
              <TableCell align="left">{row.Amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}