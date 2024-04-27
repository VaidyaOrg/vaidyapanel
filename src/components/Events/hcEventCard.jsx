import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Sheet from '@mui/joy/Sheet';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#49B9C8',
  '&:hover': {
    backgroundColor: '#43A5B2'
  },
}));

export default function UserCard() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
      }}
    >
      <Box
        sx={{
          width: '80%', // Adjust the width of the container as needed
          position: 'relative',
          overflow: { xs: 'auto', sm: 'initial' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            display: 'block',
            width: '1px',
            bgcolor: 'warning.300',
            left: '500px',
            top: '-24px',
            bottom: '-24px',
            '&::before': {
              top: '4px',
              content: '"vertical"',
              display: 'block',
              position: 'absolute',
              right: '0.5rem',
              color: 'text.tertiary',
              fontSize: 'sm',
              fontWeight: 'lg',
            },
            '&::after': {
              top: '4px',
              content: '"horizontal"',
              display: 'block',
              position: 'absolute',
              left: '0.5rem',
              color: 'text.tertiary',
              fontSize: 'sm',
              fontWeight: 'lg',
            },
          }}
        />
        <Card
          orientation="horizontal"
          sx={{
            width: '100%',
            flexWrap: 'wrap',
            [`& > *`]: {
              minWidth: '182px', // Fixed minWidth for maintaining aspect ratio
            },
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img
              src="bhilai_logo.png"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              Blood Donation Camp
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
              ------------------
            </Typography>
            <Sheet
              sx={{
                bgcolor: 'background.level1',
                borderRadius: 'sm',
                p: 1.5,
                my: 1.5,
                display: 'flex',
                gap: 2,
                '& > div': { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Date
                </Typography>
                <Typography fontWeight="lg">01-05-2024</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Time
                </Typography>
                <Typography fontWeight="lg">9:30 A.M. - 4:30 P.M.</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Venue
                </Typography>
                <Typography fontWeight="lg">Sushrut Block</Typography>
              </div>
            </Sheet>
            <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
              <ColorButton>
                Register
              </ColorButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
