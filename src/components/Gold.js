import React, { useState } from 'react';
import './Gold.css'; // Ensure the path to the CSS file is correct

function Gold() {
  const [formData, setFormData] = useState({
    name: '',
    aadhaarNum: '', // Updated to aadhaarNum
    annualIncome: '',
    annualExpenses: '',
    goldValue: '', // Updated field
    LoanToGoldValueRatio: '', // Updated field
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
      <h2 className="title">Gold Loan</h2>
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
          Gold Value:
          <input type="number" name="goldValue" value={formData.goldValue} onChange={handleChange} />
        </label>
        <br />
        <label>
          Loan To Gold Value Ratio (%):
          <input type="number" name="LoanToGoldValueRatio" value={formData.LoanToGoldValueRatio} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className="applyButton">Apply</button>
      </form>
    </div>
  );
}

export default Gold;
