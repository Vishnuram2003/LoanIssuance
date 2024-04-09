import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming axios is used for HTTP requests

const ViewLoanComponent = () => {
  const [aadhaarNum, setAadhaarNum] = useState('');
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const storedAadhaar = localStorage.getItem('aadharStored');
    if (storedAadhaar) {
      console.log(`${storedAadhaar} after clicking`);
      getLoans(storedAadhaar);
    } else {
      console.log('Aadhaar number not found in localStorage');
    }
  }, []);

  const getLoans = (aadhaar) => {
    axios.get(`/api/loans/${aadhaar}`) // Adjust URL as needed
      .then(response => {
        setLoans(response.data);
        response.data.forEach(loan => console.log(loan));
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = (event) => {
    setAadhaarNum(event.target.value);
  };

  const handleGetLoansClick = () => {
    getLoans(aadhaarNum);
  };

  return (
    <div>
      <div className="center-content">
        <input
          type="number"
          name="aadhaarNum"
          value={aadhaarNum}
          onChange={handleInputChange}
          placeholder="Enter Aadhaar Number"
        />
        <button onClick={handleGetLoansClick}>Get Loans</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Loan Amount</th>
            <th>Loan ID</th>
            <th>Aadhaar Number</th>
            <th>Customer ID</th>
            <th>Loan Type</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.loanId}>
              <td>{loan.loanAmount}</td>
              <td>{loan.loanId}</td>
              <td>{loan.aadhaarNum}</td>
              <td>{loan.customerId}</td>
              <td>{loan.loanType}</td>
              <td>{loan.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewLoanComponent;
