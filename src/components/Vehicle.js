import React, { useState } from 'react';
import './Vehicle.css'; // Ensure the path to the CSS file is correct

function Vehicle() {
  const [formData, setFormData] = useState({
    name: '',
    aadhaarNum: '', // Note the spelling correction to match your requirement
    annualIncome: '',
    annualExpenses: '',
    tenureInYears: '', // Changed from tenureInMonths to tenureInYears
    vehicleValue: '', // New field
    downPayment: '', // New field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h2 className="title">Vehicle Loan</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Aadhaar Number:
          <input type="text" name="aadhaarNum" value={formData.aadhaarNum} onChange={handleChange} />
        </label>
        <br />
        <label>
          Annual Income:
          <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Annual Expenses:
          <input type="number" name="annualExpenses" value={formData.annualExpenses} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tenure In Years:
          <input type="number" name="tenureInYears" value={formData.tenureInYears} onChange={handleChange} />
        </label>
        <br />
        <label>
          Vehicle Value:
          <input type="number" name="vehicleValue" value={formData.vehicleValue} onChange={handleChange} />
        </label>
        <br />
        <label>
          Down Payment:
          <input type="number" name="downPayment" value={formData.downPayment} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className="applyButton">Apply</button>
      </form>
    </div>
  );
}

export default Vehicle;
