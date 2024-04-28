import React, { useState } from "react";
import axios from "axios";

function Form3() {
  const [formData, setFormData] = useState({
    claimantFirstName: "",
    claimantLastName: "",
    claimaintID: "",
    referenceAMA: "",
    diagnosisName: "",
    claimaintAge: "",
    telephoneNo: "",
    emailID: "",
    treatmentStart: "",
    treatmentEnd: "",
    patientName: "",
    natureofIllness: "",
    referredHospital: "",
    relationship: "",
    referringAMADate: "",
    claimT_1_1: "",
    claimT_1_2: "",
    claimT_1_3: "",
    claimT_1_4: "",
    claimT_1_5: "",
    claimT_1_6: "",
    claimT_1_7: "",
    claimT_1_8: "",
    claimT_2_1_1: "",
    claimT_2_1_2: "",
    claimT_2_2_1: "",
    claimT_2_2_2: "",
    claimT_2_3_1: "",
    claimT_2_3_2: "",
    claimT_2_4_1: "",
    claimT_2_4_2: "",
    claimT_2_5_1: "",
    claimT_2_5_2: "",
    claimT_2_6_1: "",
    claimT_2_6_2: "",
    claimT_2_7_1: "",
    claimT_2_7_2: "",
    claimT_2_8_1: "",
    claimT_2_8_2: "",
    HCReferral: "",
    BillReceipt: "",
    IDFile: "",
    prescriptionFile: "",
    AccountNo: "",
    BankName: "",
    expdate: "",
    IFSC: "",
    BankBranch: "",
    Place: "",
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
      const response = await axios.post("http://localhost:5000/apis/users/formfill", formData);
      console.log(response.data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log(error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <>
      {" "}
      <div
        className="formwid"
        style={{ backgroundColor: "#d9d5ed", border: "10px solid #5bbad5" }}
      >
        <div className="container ">
          <h4 className="info py-4">MEDICAL CLAIM FORM (STUDENT) </h4>

          <h5 className="text-center">
            Application for claiming reimbursement of medical expenses incurred
            in connection with medical attendance/treatment for students of IIT
            Bhilai.
          </h5>
          <p className="fw-bold">I. Status Information of the Claimant</p>

          <form onSubmit={handleSubmit}>
            <div className=" container row ms-3">
              <div className="col col-xs-12 m-3">
                <label className="mb-1" htmlFor="claimantName">
                  *Claimant's Name:
                </label>
                <div className="row inpbox">
                  <div className="col">
                    <input className="form-control me-1 mb-2" type="text" id="claimantFirstName" name="claimantFirstName" // placeholder="First Name"
                      value={formData.claimantFirstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="claimantLastName"
                      name="claimantLastName"
                      // placeholder="Last Name"
                      value={formData.claimantLastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label className="mb-1">ID:</label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="claimaintID"
                  name="claimaintID"
                  value={formData.claimaintID}
                  onChange={handleChange}
                />

                <label className="mb-1">Name of reference AMA:</label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="referenceAMA"
                  name="referenceAMA"
                  value={formData.referenceAMA}
                  onChange={handleChange}
                />

                <label className="mb-1">
                  Name of the illness or diagnosis:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="diagnosisName"
                  name="diagnosisName"
                  value={formData.diagnosisName}
                  onChange={handleChange}
                />
              </div>

              <div className="col col-xs-12 m-3">
                <label className="mb-1">Age:</label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="claimaintAge"
                  name="claimaintAge"
                  value={formData.claimaintAge}
                  onChange={handleChange}
                />

                <label className="mb-1" htmlFor="telephoneNo">
                  Course/Program:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="telephoneNo"
                  name="telephoneNo"
                  value={formData.telephoneNo}
                  onChange={handleChange}
                  placeholder="00000 00000"
                />

                <label className="mb-1" htmlFor="emailId">
                  Contact No.:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="emailId"
                  name="emailId"
                  value={formData.emailID}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />

                <label className="mb-1" htmlFor="claimantName">
                  Treatment start and end
                </label>
                <div className="row inpbox">
                  <div className="col">
                    <input
                      className="form-control me-1 mb-2"
                      type="date"
                      id="treatmentStart"
                      name="treatmentStart"
                      value={formData.treatmentStart}
                      onChange={handleChange}
                      placeholder="From"
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control mb-2"
                      type="date"
                      id="treatmentEnd"
                      name="treatmentEnd"
                      value={formData.treatmentEnd}
                      onChange={handleChange}
                      placeholder="To"
                      style={{ width: "100px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <p className="fw-bold">II. Information regarding the patient</p>
          <form>
            <div className="row mb-3 ms-3">
              <div className="col m-3">
                <label className="mb-1" htmlFor="patientName">
                  *Patient's Name:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                />

                <label className="mb-1" htmlFor="natureOfIllness">
                  *Nature of illness:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="natureOfIllness"
                  name="natureOfIllness"
                  value={formData.natureofIllness}
                  onChange={handleChange}
                />

                <label className="mb-1" htmlFor="referredHospital">
                  *Treated Hospital Name:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="referredHospital"
                  name="referredHospital"
                  value={formData.referredHospital}
                  onChange={handleChange}
                />
              </div>

              <div className="col m-3">
                <label className="mb-1" htmlFor="relationship">
                  *Relationship with patient:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                />

                <label className="mb-1" htmlFor="referringAMADate">
                  *Name of Referring AMA:
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="text"
                  id="referringAMADate"
                  name="referringAMADate"
                  value={formData.referringAMADate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <h4>Details of Treatment</h4>
          <div className="table-responsive-sm row">
            <div className=" col">
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
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_1"
                        name="claimT_1_1"
                        value={formData.claimT_1_1}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1.2</td>
                    <td> CBC/Widal/LFT/RFT</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_2"
                        name="claimT_1_2"
                        value={formData.claimT_1_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1.3</td>
                    <td>Urine-RM/Malaria</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_3"
                        name="claimT_1_3"
                        value={formData.claimT_1_3}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1.4</td>
                    <td>TSH, T3, T4 Sr. Electrolytes</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_4"
                        name="claimT_1_4"
                        value={formData.claimT_1_4}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1.5</td>
                    <td>Any other laboratory Test/s Done</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_5"
                        name="claimT_1_5"
                        value={formData.claimT_1_5}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1.6</td>
                    <td>No of Consultation Charges( )</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_6"
                        name="claimT_1_6"
                        value={formData.claimT_1_6}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1.7</td>
                    <td> Miscellaneous Charges</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_7"
                        name="claimT_1_7"
                        value={formData.claimT_1_7}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1.8</td>
                    <td>Any Other.</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_1_8"
                        name="claimT_1_8"
                        value={formData.claimT_1_8}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Total(A)</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                      // Should Calculate automatically
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col">
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
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_1_1"
                        name="claimT_2_1_1"
                        value={formData.claimT_2_1_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_1_2"
                        name="claimT_2_1_2"
                        value={formData.claimT_2_1_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2.2</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_2_1"
                        name="claimT_2_2_1"
                        value={formData.claimT_2_2_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_2_2"
                        name="claimT_2_2_2"
                        value={formData.claimT_2_2_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2.3</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_3_1"
                        name="claimT_2_3_1"
                        value={formData.claimT_2_3_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_3_2"
                        name="claimT_2_3_2"
                        value={formData.claimT_2_3_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2.4</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_4_1"
                        name="claimT_2_4_1"
                        value={formData.claimT_2_4_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_4_2"
                        name="claimT_2_4_2"
                        value={formData.claimT_2_4_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2.5</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_5_1"
                        name="claimT_2_5_1"
                        value={formData.claimT_2_5_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_5_2"
                        name="claimT_2_5_2"
                        value={formData.claimT_2_5_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2.6</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_6_1"
                        name="claimT_2_6_1"
                        value={formData.claimT_2_6_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_6_2"
                        name="claimT_2_6_2"
                        value={formData.claimT_2_6_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2.7</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_7_1"
                        name="claimT_2_7_1"
                        value={formData.claimT_2_7_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_7_2"
                        name="claimT_2_7_2"
                        value={formData.claimT_2_7_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>2.8</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_8_1"
                        name="claimT_2_8_1"
                        value={formData.claimT_2_8_1}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                        id="claimT_2_8_2"
                        name="claimT_2_8_2"
                        value={formData.claimT_2_8_2}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Total(B)</td>
                    <td>
                      <input
                        className="claimInput form-control"
                        type="text"
                      // Should Calculate automatically
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className=" row d-flex-end">
            <span className="col col-xs-12">
              <div className="input-group input-group-sm mb-3">
                <span
                  className="input-group-text bg-dark bg-gradient text-white"
                  id="inputGroup-sizing-sm"
                >
                  Total Claim submitted (A+B):
                  {/* // Should Calculate automatically */}
                </span>
                <input type="text" className="form-control" />
              </div>
            </span>
            <span className="col col-xs-12">
              <div className="input-group input-group-sm mb-3">
                <span
                  className="input-group-text bg-dark bg-gradient text-white"
                  id="inputGroup-sizing-sm"
                >
                  Total no of Enclosures:
                  {/* // Should Calculate automatically */}
                </span>
                <input type="text" className="form-control" />
              </div>
            </span>
          </div>
          <h4 className="space mt-5">Attachments(Self Attested)</h4>
          <form
            action="/upload"
            method="post"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="row ms-3 mb-4">
              <div className="col m-3">
                <label className="mb-2" htmlFor="file">
                  *IIT Bhiai Health Center Referral
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="file"
                  id="HCReferral"
                  name="HCReferral"
                  value={formData.HCReferral}
                  onChange={handleChange}
                  accept=".jpg, .jpeg, .png"
                  required
                />

                <label className="mb-2" htmlFor="file">
                  *Original Bill Receipts
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="file"
                  id="BillReceipt"
                  name="BillReceipt"
                  value={formData.BillReceipt}
                  onChange={handleChange}
                  accept=".jpg, .jpeg, .png"
                  required
                />
              </div>

              <div className="col m-3">
                <label className="mb-2" htmlFor="file">
                  ID Card
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="file"
                  id="IDFile"
                  name="IDFile"
                  value={formData.IDFile}
                  onChange={handleChange}
                  accept=".jpg, .jpeg, .png"
                  required
                />

                <label className="mb-2" htmlFor="file">
                  *Copy of Prescription
                </label>
                <input
                  className="form-control mb-2 inpbox"
                  type="file"
                  id="prescriptionFile"
                  name="prescriptionFile"
                  value={formData.prescriptionFile}
                  onChange={handleChange}
                  accept=".jpg, .jpeg, .png"
                  required
                />
              </div>
            </div>
          </form>
          <br />

          <h4 className="space mt-5">Bank Details</h4>

          <div class="container mt-4">
            <div class="row mb-4">
              {/* <!-- Left Section --> */}
              <div class="col-md-6 custom-side-margin-left">
                <div class="row mb-4">
                  <div class="col-sm-4"> A/c No.</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input"
                      id="AccountNo"
                      name="AccountNo"
                      value={formData.AccountNo}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-sm-4">Bank</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="BankName"
                      name="BankName"
                      value={formData.BankName}
                      onChange={handleChange}
                      placeholder="Input"
                    />
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-sm-4">Date</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="expdate"
                      name="expdate"
                      value={formData.expdate}
                      onChange={handleChange}
                      placeholder="Input"
                    />
                  </div>
                </div>

                {/* Left section ends */}
              </div>

              {/* <!-- Right Section --> */}
              <div class="col-md-6 custom-side-margin-right">
                <div class="row mb-4">
                  <div class="col-sm-4">IFSC Code</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="IFSC"
                      name="IFSC"
                      value={formData.IFSC}
                      onChange={handleChange}
                      placeholder="Input"
                    />
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-sm-4">Branch</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="BankBranch"
                      name="BankBranch"
                      value={formData.BankBranch}
                      onChange={handleChange}
                      placeholder="Input"
                    />
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-sm-4">Place</div>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="Place"
                      name="Place"
                      value={formData.Place}
                      onChange={handleChange}
                      placeholder="Input"
                    />
                  </div>
                </div>

                {/* Right section ends */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col m-3">
              <label htmlFor="dateInput">Date</label>
              <input
                className="form-control inpbox"
                type="date"
                id="SubmissionDate"
                name="SubmissionDate"
                value={formData.SubmissionDate}
                onChange={handleChange}
              />
            </div>
            <div className="col m-3">
              <label htmlFor="signatureFile">Signature of the Claimant</label>
              <input
                className="form-control inpbox"
                type="file"
                id="signatureFile"
                name="signatureFile"
                value={formData.signatureFile}
                onChange={handleChange}
                accept="image/*"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg m-3"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Form3;