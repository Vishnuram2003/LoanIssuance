import React, { useState } from 'react';
import './Agri.css'; // Ensure the path to the CSS file is correct

function Agri() {
  const [formData, setFormData] = useState({
    name: '',
    aadhaarNum: '',
    annualIncome: '',
    annualExpenses: '',
    landValue: '',
    cropValue: '',
    tenureInYears: '',
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
    console.log(formData); // Here you might handle the form submission, such as sending it to a backend server
  };

  return (
    <div className="container">
      <h2 className="title">Agricultural Loan </h2>
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
          Land Value:
          <input type="number" name="landValue" value={formData.landValue} onChange={handleChange} />
        </label>
        <br />
        <label>
          Crop Value:
          <input type="number" name="cropValue" value={formData.cropValue} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tenure In Years:
          <input type="number" name="tenureInYears" value={formData.tenureInYears} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className="applyButton">Apply</button>
      </form>
    </div>
  );
}

export default Agri;
