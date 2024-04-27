
import React, { useState } from "react";
import axios from "axios";

function Form2() {
    
    const [formData, setFormData] = useState({
        claimantFirstName: "",
        claimantLastName: "",
        designation: "",
        dept: "",
        entitlement: "",
        employeecode: "",
        telephoneNo: "",
        emailid: "",
        payinpayband: "",
       
        
        //info about patient starts
        patientName: "",
        natureofIllness: "",
        referredHospital: "",
        relationship: "",
        referringAMADate: "", 
        
        //Details of treatment starts
        claimT_1_1: "",
        claimT_1_2: "",
        claimT_1_3: "",
        claimT_1_4: "",
        claimT_1_5: "",
        claimT_1_6: "",
        claimT_1_7: "",
        claimT_1_8: "",
        claimT_1_9: "",
        claimT_1_10: "",
        claimT_2_1: "",
        claimT_2_2: "",
        claimT_2_3: "",
        claimT_2_4: "",
        claimT_2_5: "",
        claimT_2_6: "",
        claimT_2_7: "",
        claimT_2_8: "",
        claimT_2_9: "",
        claimT_2_10: "",    
        
        //Attachments start
        HCReferral: "",
        BillReceipt: "",
        dependentbooklet: "",
        prescriptionFile: "", 
        
        //Bank details
        // AccountNo: "",
        // BankName: "",
        // expdate: "",
        // IFSC: "",
        // BankBranch: "",
        // Place: "",

        SubmissionDate: "",
        signatureFile: ""

        // Add other form fields here
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/apis/staffipd/formfillipd", formData);
          console.log(response.data);
          // Handle success, e.g., show a success message to the user
        } catch (error) {
          console.error("Error submitting form:", error);
          console.log(error);
          // Handle error, e.g., show an error message to the user
        }
      };
    
    
    
    
    
    
    
    return (
        <>    <div className='formwid' style={{ backgroundColor: "#d9d5ed", border: "10px solid #5bbad5" }}>
            <div className='container '>

                <h4 className="info py-4" >MEDICAL CLAIM FORM (INDOOR TREATMENT) </h4>

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
                                    <input className='form-control me-1 mb-2' type="text" id="claimantName" name="claimantName" placeholder='First Name' 
                                    value={formData.claimantFirstName}
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className='col'>
                                    <input className='form-control mb-2' type="text" id="claimantName" name="claimantName" placeholder='Last Name' 
                                    value={formData.claimantLastName}
                                    onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <label className="mb-1" htmlFor="designation">*Designation:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="designation" name="designation" 
                            value={formData.designation}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="department">*Department:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="department" name="department" 
                            value={formData.dept}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="entitlement">*Entitlement of ward:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="entitlement" name="entitlement" 
                            value={formData.entitlement}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="col col-xs-12 m-3">

                            <label className="mb-1" htmlFor="employeeCode">*Employee Code:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="employeeCode" name="employeeCode" 
                            value={formData.employeecode}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="telNo">*Tel. No.:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="telNo" name="telNo" placeholder='00000 00000' 
                            value={formData.telephoneNo}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="emailId">*Email ID:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="emailId" name="emailId" placeholder='name@example.com' 
                            value={formData.emailid}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="payBand">*Pay in Pay Band & Grade Pay (Rs.):</label>
                            <input className='form-control mb-2 inpbox' type="text" id="payBand" name="payBand" 
                            value={formData.payinpayband}
                            onChange={handleChange}
                            />
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
                            <input className='form-control mb-2 inpbox' type="text" id="patientName" name="patientName" 
                            value={formData.patientName}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="natureOfIllness">*Nature of illness & its period:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="natureOfIllness" name="natureOfIllness" 
                            value={formData.natureofIllness}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="referredHospital">*Referred Hospital Name:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="referredHospital" name="referredHospital" 
                            value={formData.referredHospital}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="col m-3">
                            <label className="mb-1" htmlFor="relationship">*Relationship:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="relationship" name="relationship" 
                            value={formData.relationship}
                            onChange={handleChange}
                            />

                            <label className="mb-1" htmlFor="referringAMADate">*Name of Referring AMA/Date:</label>
                            <input className='form-control mb-2 inpbox' type="text" id="referringAMADate" name="referringAMADate" 
                            value={formData.referringAMADate}
                            onChange={handleChange}
                            />
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
                                    <th scope="col">Claim Submitted (Rs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Accommodation/ Bed Charges </td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_1}
                                    onChange={handleChange}
                                    />
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Registration Fee</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_2}
                                    onChange={handleChange}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Consultation/ Doctor</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_3}
                                    onChange={handleChange}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Surgeon Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_4}
                                    onChange={handleChange}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Nursing Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_5}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Operation Theater Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_6}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>X-ray</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_7}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Hospital Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_8}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Physiotherapy Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_9}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Blood Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_1_10}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                            </tbody>
                        </table></div>
                    <div className='col'>
                        <table className="table table-custom ">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Claim Submitted (Rs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11</td>
                                    <td>Test & Procedure</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_1}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Angioplasty Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_2}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Medicine Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_3}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Medicine Purchased from market</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_4}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Imaging Service Charges
                                    </td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_5}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>Diagnostic Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_6}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>ECG</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_7}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>Consumable Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_8}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>Any other Charges paid to Hospital</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_9}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>Miscellaneous Charges</td>
                                    <td><input className='claimInput form-control' type="text"  
                                    value={formData.claimT_2_10}
                                    onChange={handleChange}
                                    /></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className=" row d-flex-end">
                    <span className="col col-xs-12">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text bg-dark bg-gradient text-white" id="inputGroup-sizing-sm" >Total Claim submitted (Rs):</span>
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
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required 
                            value={formData.HCReferral}
                            onChange={handleChange}
                            />

                            <label className="mb-2" htmlFor="file">*Original Bill Receipts</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required 
                            value={formData.BillReceipt}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="col m-3">
                            <label className="mb-2" htmlFor="file">If dependent copy of dependent booklet</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required 
                            value={formData.dependentbooklet}
                            onChange={handleChange}
                            />

                            <label className="mb-2" htmlFor="file">*Copy of Prescription</label>
                            <input className='form-control mb-2 inpbox' type="file" id="file" name="file" accept=".jpg, .jpeg, .png" required 
                            value={formData.prescriptionFile}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                </form>
                <br />
                <div className=' bg-gradient p-3 mt-4' style={{ borderRadius: "20px", backgroundColor: "#aee9fa", border: "1px solid black" }}>
                    <span>Note:</span>
                    <ol>
                        <li>
                            If the treatment was received by a member of the employee at his residence, give particulars of such treatment
                            and attach certificate from the Authorized Medical Attendant, as required by rules.
                        </li>
                        <li>
                            If treatment was received at a Hospital other than a Government/Recognized Hospital, necessary details and
                            the certificate of the Authorized Medical Attendant to the effect that the requisite medical treatment was not
                            available in any nearest Government Hospital should be furnished.

                        </li>
                    </ol>
                </div>
                <h4 className="mt-5 my-3">Declaration :</h4>
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
                                <input className='form-control inpbox' type="date" id="dateInput" 
                                value={formData.SubmissionDate}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col m-3">
                                <label htmlFor="signatureFile">Signature of the Claimant</label>
                                <input className='form-control inpbox' type="file" id="signatureFile" name="signatureFile" accept="image/*" required 
                                value={formData.signatureFile}
                                onChange={handleChange}
                                />

                            </div>
                            <div className='text-center'>
                                <a href="/Thankyou" type="button" class="btn btn-primary btn-lg m-3" onClick={handleSubmit}>Submit</a>
                            </div>
                        </div>
                    </div >
                </div >
            </>
            );
}

            export default Form2