import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Typography from '@mui/joy/Typography';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#49B9C8',
    '&:hover': {
      backgroundColor: '#43A5B2'
    },
  }));

const InteractiveCard = () => {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        '&:hover': { boxShadow: 'md', backgroundColor:'white' },
      }}
      className = 'w-[50vw] h-[12vw] ml-14'
    >
      <AspectRatio ratio="1" sx={{ width: 190,backgroundColor:'white' }}>
        <img
          src="https://d3n2v804uranu1.cloudfront.net/wp-content/uploads/2023/12/Priyanka-Malhotra-Counsellor-Mandi-and-Bhilai-1.jpeg"
          loading="lazy"
          className='rounded-full bg-white'
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Typography level="h3" id="card-description">
            Ms. Priyanka Malhotra
        </Typography>
        <Typography level="body-md" aria-describedby="card-description" mb={0.5}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            Psycological Counsellor
          </Link>
        </Typography>
        <Typography level="body-md" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            IIT Bhilai
          </Link>
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={2}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            priyanka@iitbhilai.ac.in
          </Link>
        </Typography>
        <div className='flex gap-4'>
            <ColorButton className='align-left w-[10vw] mr-10'>Book Appointment</ColorButton>
            <ColorButton className='w-[10vw]'>Schedule chat</ColorButton>
        </div>
      </CardContent>
    </Card>
  );
}
const PsyCounselor = () => {
    return (
        <div className='bg-white mr-10 ml-10 pt-10 pb-10'>
            <p className="text-2xl font-semibold text-center">Psycological <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Counsellor</span></p>
            <br />
            <InteractiveCard />
        </div>
        
    )
}

export default PsyCounselor
