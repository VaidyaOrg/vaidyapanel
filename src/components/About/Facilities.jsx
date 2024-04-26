import React from "react";
import { Typography } from '@mui/material';
// import ImageCarousel from './ImageCarousel';

const Facilities = () => {
  return (
    <>
      <div className="flex justify-center w-[55vw] ml-14 rounded-lg bg-white">
        <div className="relative pl-10 pr-5 pb-6 pt-8">
          <p className="text-2xl font-semibold text-center">All <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Facilities</span></p>
          <br />
          <br />
          <p className="font-semibold text-xl">Ambulance</p>
          <br />
          <Typography> To bring patients from campus quarter/hostel to IIT Bhilai Health Centre in an emergency like heart attack, bleeding, paralysis, breathlessness, fracture, pregnancy, shock and such other cases, at the discretion of the AMA. Emergency contact of ambulance: <span className="font-semibold">+91 xxxxx xxxxx</span>
          </Typography>
          <br />

          <p className="font-semibold text-xl">Reimbursement</p>
          <br />
          <Typography>This program allows individuals to submit claims for eligible medical expenses, providing financial assistance for consultations, diagnostic tests, medications, and other necessary healthcare services. Our aim is to alleviate the financial burden associated with healthcare, ensuring that our students, faculty, and staff can prioritize their well-being without worrying about the costs. To know more about reimbursement <a href="#" className="underline">click here</a>.
          </Typography>
          <br />

          <p className="font-semibold text-xl">Health Insurance</p>
          <br />
          <Typography> The Health Center at IIT Bhilai is proud to offer a comprehensive health insurance program, providing essential coverage for students, faculty, and staff. This initiative ensures access to a wide range of medical services, from consultations to hospitalization, easing financial burdens and promoting overall well-being within our campus community. To know more about health Insurance <a href="#" className="underline">click here</a>.
          </Typography>
        
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Facilities;
