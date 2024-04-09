import React, { useState } from 'react';
import './Edu.css'; // Make sure to create a corresponding CSS file for styling

function Edu() {
  const [formData, setFormData] = useState({
    name: '',
    aadhaarNum: '',
    annualIncome: '',
    annualExpenses: '',
    tenureInYears: '',
    tuitionFee: '',
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
    console.log(formData); // Here, you might handle the form submission, such as sending the data to a server
  };

  return (
    <div className="container">
      <h2 className="title">Education Loan Application</h2>
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
          Tuition Fee:
          <input type="number" name="tuitionFee" value={formData.tuitionFee} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className="applyButton">Apply</button>
      </form>
    </div>
  );
}

export default Edu;
