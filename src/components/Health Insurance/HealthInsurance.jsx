import React, { Component } from 'react'
import InsuranceTable from './InsuranceTable'
import Typography from '@mui/joy/Typography';


const Insurance = () => {
    return (
      <div className='bg-white ml-5 mr-5 pb-6 pt-4 rounded-md pl-12 pr-12'>
        <p className="text-2xl font-semibold text-center">Health <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Insurance</span></p>
        <br />
        <div className='text-center'>
            <Typography>IIT Bhilai-2023-2024 HEALTH INSURANCE FOR STUDENTS</Typography>
            <Typography>Medical Claim Policy No : HG00004003000102</Typography>
            <Typography>Accidental Claim Policy No : HG00004003000102</Typography>
            <Typography>Period of Insurance : 18-08-2023 to 17-08-2024</Typography>
            <br />
            <InsuranceTable />
        </div>
      </div>
    )
}

export default Insurance
