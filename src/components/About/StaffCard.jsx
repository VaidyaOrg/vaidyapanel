import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Appointment from "../Appointement/Appointment";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#49B9C8',
    '&:hover': {
      backgroundColor: '#43A5B2'
    },
  }));
    

function DoctorCard({ name, role, contact, image }) {
    const navigate = useNavigate(); // Initialize navigate function
    const handleBookAppointment = () => {
        navigate('/appointment'); // Navigate to /appointment route
      };
  return (
    <Card className="w-[15vw] h-[20vw] rounded-md overflow-hidden shadow-lg">
      <CardMedia
        component="img"
        image={image}
        alt={name}
        className="h-[12vw]"
      />
      <CardContent>
        <pre>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Role: {role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact: {contact}
        </Typography>
        <ColorButton variant= "contained" onClick={handleBookAppointment} className="bg-[#43a5b2]">Book Appointment</ColorButton>
        </pre>
      </CardContent>
              
    </Card>
  );
}

export default function DoctorCards() {
  const doctors = [
    {
      name: 'Dr. Atul Prakash Srivastave',
      role: 'General Physician',
      contact: '+91 xxxxx xxxxx',
      image: 'doctor.jpg',
    },
    {
      name: 'Dr. Keshav Dewangan',
      role: 'General Medicine',
      contact: '+91 xxxxx xxxxx',
      image: 'doctor.jpg',
      book: 'link_to_booking'
    },
    {
        name: 'Dr. Sarita Khandelwal',
        role: 'Obs & Gynae',
        contact: '+91 xxxxx xxxxx',
        image: 'doctor.jpg',
        book: 'link_to_booking'
      },
      {
        name: 'Mr. Raghvendra Sharma',
        role: 'General Medicine',
        contact: '+91 xxxxx xxxxx',
        image: 'doctor.jpg',
        book: 'link_to_booking'
      },
      {
        name: 'Mrs. Deeplata Thakre',
        role: 'Staff Nurse',
        contact: '+91 xxxxx xxxxx',
        image: 'doctor.jpg',
        book: 'link_to_booking'
      },
      {
        name: 'Ms. Priyanka Malhotra',
        role: 'Staff Nurse',
        contact: '+91 xxxxx xxxxx',
        image: 'doctor.jpg',
        book: 'link_to_booking'
      },
    // Add more doctors/staff as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 text-center">
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          role={doctor.role}
          contact={doctor.contact}
          image={doctor.image}
        />
      ))}
    </div>
  );
}
