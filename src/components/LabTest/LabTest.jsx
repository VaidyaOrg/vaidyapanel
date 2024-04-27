import React from "react";
import { Typography } from '@mui/material';
import BasicTable from "./table";

const LabTest = () => {
  return (
    <>
      <div className="flex justify-center w-[55vw] ml-14 rounded-lg bg-white">
        <div className="relative pl-10 pr-5 pb-6 pt-8">
          <p className="text-2xl font-semibold text-center">Lab <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Tests</span></p>
          <br />
          <br />
          <p className="font-semibold text-xl">About LabTests</p>
          <br />
          <Typography>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



          </Typography>
          <br />

          <p className="font-semibold text-xl">Available tests</p>
          <br />
          <Typography>This program allows individuals to submit claims for eligible medical expenses, providing financial assistance for consultations, diagnostic tests, medications, and other necessary healthcare services. Our aim is to alleviate the financial burden associated with healthcare, ensuring that our students, faculty, and staff can prioritize their well-being without worrying about the costs. To know more about reimbursement <a href="#" className="underline">click here</a>.
          </Typography>
          <br />
          <p className="font-semibold text-xl ml-10">Test1</p>
          <br />
          <div className="ml-10">
          <Typography> The Health Center at IIT Bhilai is proud to offer a comprehensive health insurance program, providing essential coverage for students, faculty, and staff. This initiative ensures access to a wide range of medical services, from consultations to hospitalization, easing financial burdens and promoting overall well-being within our campus community. To know more about health Insurance <a href="#" className="underline">click here</a>.
          </Typography>
          </div>
        
          <br />
          <p className="font-semibold text-xl ml-10">Test2</p>
          <br />
          <div className="ml-10">
          <Typography> The Health Center at IIT Bhilai is proud to offer a comprehensive health insurance program, providing essential coverage for students, faculty, and staff. This initiative ensures access to a wide range of medical services, from consultations to hospitalization, easing financial burdens and promoting overall well-being within our campus community. To know more about health Insurance <a href="#" className="underline">click here</a>.
          </Typography>
          </div>
          <br />
          <p className="font-semibold text-xl ml-10">Test3</p>
          <br />
          <div className="ml-10">
          <Typography> The Health Center at IIT Bhilai is proud to offer a comprehensive health insurance program, providing essential coverage for students, faculty, and staff. This initiative ensures access to a wide range of medical services, from consultations to hospitalization, easing financial burdens and promoting overall well-being within our campus community. To know more about health Insurance <a href="#" className="underline">click here</a>.
          </Typography>
          </div>
          <br />
          <p className="font-semibold text-xl ml-10">Test4</p>
          <br />
          <div className="ml-10">
          <Typography> The Health Center at IIT Bhilai is proud to offer a comprehensive health insurance program, providing essential coverage for students, faculty, and staff. This initiative ensures access to a wide range of medical services, from consultations to hospitalization, easing financial burdens and promoting overall well-being within our campus community. To know more about health Insurance <a href="#" className="underline">click here</a>.
          </Typography>
          </div>
          <br />
          <p className="font-semibold text-xl ml-10">Test5</p>
          <br />
          <div className="ml-10">
          <Typography> The Health Center at IIT Bhilai is proud to offer a comprehensive health insurance program, providing essential coverage for students, faculty, and staff. This initiative ensures access to a wide range of medical services, from consultations to hospitalization, easing financial burdens and promoting overall well-being within our campus community. To know more about health Insurance <a href="#" className="underline">click here</a>.
          </Typography>
          </div>
          <br />
          <br />
          <p className="text-2xl font-semibold text-center">Tests <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Timings</span></p>
          <br />
          <br />
          <BasicTable />

          <br />
          <br />

        </div>
      </div>
    </>
  );
};

export default LabTest;
