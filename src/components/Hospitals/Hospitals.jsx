import React from "react";
import BasicTable from "./table";

const Hospitals = () => {
  return (
    <>
    <div className="m-10 bg-[white]">
    <p className="text-2xl font-semibold text-center pt-10">Empanelled <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Hospitals</span></p>
          <br />
          <br />
          
          <div className="p-10">
          <BasicTable />
          
          </div>
          <br />
          <br />
          </div>
    </>
  );
};

export default Hospitals;