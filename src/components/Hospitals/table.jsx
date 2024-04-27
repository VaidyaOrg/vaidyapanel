import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(hospital, address) {
  return { hospital, address };
}

const rows = [
  createData('MMI Narayana Multispecialty Hospital', 'New Dhamtari Road, Near Lalpur, Pachpedi Naka, Raipur'),
  createData('Ramkrishna Care Hospital', 'Arbindo Enclave, NH 43, Near Pachpedi Naka, Raipur'),
  createData('Suyash Hospital', 'Kota Gudhiyari Road, Behind Hotel Piccadilly Gudhiyari, Raipur'),
  createData('V.Y Hospital', 'Kamal Vihar, Near Sector 12, New Dhamtari Rd, Dunda, Chhattisgarh 492001'),
  createData('Petals Newborn and Children Hospital', 'Bheemsen Bhawan Marg, Agrasen Chowk, Raipur, Chhattisgarh 492001'),
  createData('HiTek Super Speciality Hospital', 'Junwani Road, Near Surya TI MALL,Bhilai'),
  createData('Shri Ganesh Vinayak Eye Hospital', 'In Front of Colors Mall, Dhamtari Road, Raipur, Chhattisgarh 492001'),
  createData('Bardia Dental Care', 'Lalganga Business Park, Near Pachpedi Naka, Raipur, Chhattisgarh 492001'),
  createData('Sanjeevani CBCC USA Cancer Hospital', 'Dawda Colony,Pachpedi Naka, Raipur'),
  createData('Jaulkar ENT Hospital', 'Near Pragati College, Central Ave, Choubey Colony, Raipur, Chhattisgarh'),
  createData('DNM Diagnostics', 'Shailendra Nagar Raipur'),
  createData('Prasad Hospital', 'Adj. BSNL Telephone Exchange, Nacharam – Mallapur Road, Secunderabd – 500076'),
  createData('Sparsh Hospital', 'Contractor Colony, Sirsa Road, Ram Nagar Supela, Bhilai, Chhattisgarh 490023'),
  createData('B.M. Shah Hospital', 'Shastri Nagar, Bhilai, Chhattisgarh 490023'),
  createData('Memon Dental clinic', 'Netaji Chowk,Near Maruti Dairy, Katora Talab, Santa Colony, Raipur'),
  createData('Memon Pathology', 'Near Subham K Mart, Raipur'),
  createData('Shree Narayana Hospital', 'Mandi Road, Near Ganj Mandi,Pandri,Behind Sector 5,Jagriti Nagar,Devendra Nagar,Raipur,Chhattisgarh 492001'),
  createData('Aarogyam Superspeciality Hospital & Research Cente', 'Kadambari Nagar Durg Bypass Road NH - 53,Opposite Toyata Showroom Durg 491001'),
  createData('Life Care Scan & Research Centre', 'Om Parisar, Arya Nagar, Durg (C.G.) 491001'),
  createData('Shri Shankaracharya Institute Of Medical Science Hospital', 'Shanti Nagar, Anustha Residency, Junwani, Durg, Chhattisgarh 490020'),
  createData('Pulse Hospital Bhilai', '2/4 Nehru Nagar West, Near Gurudwara, Bhilai (C.G)')
];

export default function BasicTable() {
  return (
      <TableContainer component={Paper}>
      <Table className="p-10" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hospital</TableCell>
            <TableCell align="left">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.hospital}
              </TableCell>
              <TableCell align="left">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
