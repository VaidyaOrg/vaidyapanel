import React from 'react'


function Form1() {
    return (
        <>    <div className='formwid' style={{ backgroundColor: "#d9d5ed", border: "10px solid #5bbad5" }}>
            <div className='container '>

                <h4 className="info py-4" >MEDICAL CLAIM FORM (OUTDOOR TREATMENT) </h4>

                <h5 className='text-center'>
                    Application for claiming reimbursement of medical expenses incurred in connection with medical
                    attendance/treatment for members of employees of the IIT Bhilai and their families.
                </h5>
                <p className="fw-bold">
                    I. Status Information of the Claimant
                </p>

                <form>
                    <div className=" container row ms-3">
                        <div className="col col-xs-12 m-3">
                            <label className="mb-1" htmlFor="claimantName">*Claimant's Name:</label>
                            <div className='row inpbox'>
                                <div className='col'>
                                    <input className='form-control me-1 mb-2' type="text" id="claimantName" name="claimantName" placeholder='First Name' />
                                </div>
                                <div className='col'>
                                    <input className='form-control mb-2' type="text" id="claimantName" name="claimantName" placeholder='Last Name' />
                                </div>
                            </div>
                            <label className="mb-1" htmlFor="designation">*Designation:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="designation" name="designation" />

                            <label className="mb-1" htmlFor="department">*Department:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="department" name="department" />

                           
                        </div>

                        <div className="col col-xs-12 m-3">

                            <label className="mb-1" htmlFor="employeeCode">*Employee Code:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="employeeCode" name="employeeCode" />

                            <label className="mb-1" htmlFor="telNo">*Tel. No.:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="telNo" name="telNo" placeholder='00000 00000' />

                            <label className="mb-1" htmlFor="emailId">*Email ID:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="emailId" name="emailId" placeholder='name@example.com' />

                           
                           
                        </div>
                    </div>
                </form>
                <p className="fw-bold">
                    II. Information regarding the patient
                </p>
                <form>
                    <div className="row mb-3 ms-3">

                        <div className="col m-3">
                            <label className="mb-1" htmlFor="patientName">*Patient's Name:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="patientName" name="patientName" />

                            <label className="mb-1" htmlFor="natureOfIllness">*Nature of illness:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="natureOfIllness" name="natureOfIllness" />

                            <label className="mb-1" htmlFor="referredHospital">*Treated Hospital Name:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="referredHospital" name="referredHospital" />
                        </div>
                        
                        <div className="col m-3">
                            <label className="mb-1" htmlFor="relationship">*Relationship with patient:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="relationship" name="relationship" />

                            <label className="mb-1" htmlFor="referringAMADate">*Name of Referring AMA:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="referringAMADate" name="referringAMADate" />
                        </div>
                    </div>
                </form>
                <h4>Details of Treatment</h4>
                <div className='table-responsive-sm row'>
                    <div className=' col'>
                        <table className="table table-custom ">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Total Claim Submitted (Rs)</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.1</td>
                                    <td>Imaging/MRI/CT Scan/x-ray/sonography </td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    
                                </tr>
                                <tr>
                                    <td>1.2</td>
                                    <td> CBC/Widal/LFT/RFT</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    
                                </tr>
                                <tr>
                                    <td>1.3</td>
                                    <td>Urine-RM/Malaria</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                   
                                </tr>
                                <tr>
                                    <td>1.4</td>
                                    <td>TSH, T3, T4 Sr. Electrolytes</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    
                                </tr>
                                <tr>
                                    <td>1.5</td>
                                    <td>Any other laboratory Test/s Done</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    

                                </tr>
                                <tr>
                                    <td>1.6</td>
                                    <td>No of Consultation Charges( )</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    
                                </tr>
                                <tr>
                                    <td>1.7</td>
                                    <td> Miscellaneous Charges</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    

                                </tr>
                                <tr>
                                    <td>1.8</td>
                                    <td>Any Other.</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                   
                                </tr>
                                <tr>
                                    
                                    <td>Total(A)</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                   
                                </tr>
                                
                            </tbody>
                        </table></div>
                        <div className='col'>
                        <table className="table table-custom ">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Name of the Medicine or Invoice no</th>
                                    <th scope="col">Total Claim Submitted (Rs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2.1</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>2.2</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>2.3</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>2.4</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>2.5</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>2.6</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>2.7</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    <td>2.8</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                <tr>
                                    
                                <td>Total(B)</td>
                                    <td><input className='claimInput form-control' type="text" value="" /></td>

                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    
                                   
                                   
                </div>

                <div className=" row d-flex-end">
                    <span className="col col-xs-12">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text bg-dark bg-gradient text-white" id="inputGroup-sizing-sm" >Total Claim submitted (A+B):</span>
                            <input type="text" className="form-control" />
                        </div>
                    </span>
                    <span className="col col-xs-12">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text bg-dark bg-gradient text-white" id="inputGroup-sizing-sm">Total no of Enclosures:</span> 
                            <input type="text" className="form-control" />
                        </div>
                    </span>
                </div>
                <h4 className="space mt-5">
                    Attachments(Self Attested)
                </h4>
                <form action="/upload" method="post" enctype="multipart/form-data">
                    <div className="row ms-3 mb-4">
                        <div className="col m-3">
                            <label className="mb-2" htmlFor="file">*IIT Bhiai Health Center Referral</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />

                            <label className="mb-2" htmlFor="file">*Original Bill Receipts</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />
                        </div>

                        <div className="col m-3">
                            <label className="mb-2" htmlFor="file">If dependent copy of dependent booklet</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />

                            <label className="mb-2" htmlFor="file">*Copy of Prescription</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required />
                        </div>
                    </div>
                </form>
                <br />
               
                <h4 className="mt-5 my-3">Declaration :</h4>

                <div className=' bg-gradient p-3 mt-4' style={{ borderRadius: "20px", backgroundColor: "#aee9fa", border: "1px solid black" }}>
                    <span>Countersigned and certified that the claim :</span>
                    <ol>
                        <li>
                            Is genuine.
                        </li>
                        <li>
                            Is covered by the rules and order of the subject.
                        </li>
                        <li>
                            Is supported by bills,receipt and other certificates etc.
                        </li>
                        <li>
                            was not drawn before and
                        </li>
                        <li>
                            has been sanctioned/countersigned by me.
                        </li>
                    </ol>
                </div>
                
                <div class="ms-2">
                    <input class="form-check-input mt-3 mb-1" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        <p> 
                            I hereby declare that the statement made in this application are true to the best of my knowledge and belief/and that
                            the person for whom medical expenses were incurred is wholly dependent upon me and is not an earning member of
                            the family. </p>
                    </label>
                    </div>

                        <div className="row">
                            <div className="col m-3">
                                <label htmlFor="dateInput">Date</label>
                                <input className='form-control inpbox' type="date" id="dateInput" />
                            </div>
                            <div className="col m-3">
                                <label htmlFor="signatureFile">Signature of the Claimant</label>
                                <input className='form-control inpbox' type="file" id="signatureFile" name="signatureFile" accept="image/*" required />

                            </div>
                            <div className='text-center'>
                            <a href="/Thankyou" type="button" class="btn btn-primary btn-lg m-3">Submit</a>
                            </div>
                        </div>
                    </div >
                </div >
            </>
            );
}

            export default Form1