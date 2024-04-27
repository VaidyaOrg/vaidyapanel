import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(() => ({
  color: 'black',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#43A5B2',
    color: 'white'
  },
}));

const Reimbursement = () => {
  return (
    <div className='bg-white ml-5 mr-5 pb-6 pt-10 rounded-md pl-12 pr-12'>
      <p className="text-2xl font-semibold text-center">Medical <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Reimbursement</span></p>
      <br />
      <br />
      <Typography variant="body1" className='text-center'>As per the Institute rules (CS(MA)), kindly follow the below link for more details.<a href="https://mohfw.gov.in/documents/csma" className='underline'>here</a></Typography>
      <br />
      <br />
      <p className="text-2xl font-semibold text-center">Reimbursement <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Rules</span></p>
      <br />
      <List component="ol" marker="decimal" sx={{ listStyleType: 'disc' }}>
        <ListItem  sx={{ display: 'list-item' }}>
          <ListItemText marker="decimal">IIT Bhilai providing Medical reimbursement facilities for students as per the institute norms according to C.G.H.S (Central Government Health Scheme) rates.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>In case appointed doctor deems fit that the concerned patient need to consult a specialist, the institute shall reimburse 80% of doctor’s fee only, if the concerned doctor is on institutes panel of selected doctors.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>If medicine prescribed by the specialist are not available at the institute’s dispensary their cost will be reimbursed at 80% of the total amount.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>Institute shall reimburse 100% costs for common pathological tests of blood, urine and stool. While for other tests only 50% of the cost shall be reimbursed as per the CGHS rates.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>After completion of treatment from Institutes AMA/CMO, OPD, specialist doctor medical reimbursement should be submitted to the institute for reimbursement within 30 days and for indoor patient it should be submitted within 90 days otherwise it will be barred.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>No reimbursement or medical claim will be entertained from student away from campus (leave/vacation).</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>For such treatment like Dental/Eye/Skin only the cost of medicine will be allowed as per the institute norms.</ListItemText>
        </ListItem>
      </List>
      <br />
      <p className="text-2xl font-semibold text-center">Reimbursement <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Forms</span></p>
      <br />
      <br />
      <div className='flex gap-6 justify-center pb-3'>
        <ColorButton href='vaidyapanel\src\components\Reimbursment\Forms\Form1.jsx'>Student</ColorButton>
        <ColorButton href='vaidyapanel\src\components\Reimbursment\Forms\Form2.jsx'>Employee OPD</ColorButton>
        <ColorButton href='vaidyapanel\src\components\Reimbursment\Forms\Form3.jsx'>Employee IPD</ColorButton>
      </div>
    </div>
  );
}

export default Reimbursement;
