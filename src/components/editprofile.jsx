import React, { useState } from 'react';
import axios from 'axios'; // Assuming axios is used for HTTP requests
import '../components/styles/editprofile.css'
const EditProfileComponent = ({ history }) => {
  const [aadhaarNum, setAadhaarNum] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');

  const editProfile = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    axios.post('http://localhost:7071/CustomerService/api/editProfile', null, {
      params: {
        aadhaarNum,
        address,
        username,
      },
    })
    .then(response => {
      console.error("Error editing profile:", response);
      // Replace the following with your success logic
      alert('Your profile details are updated');
      // Redirect or perform additional actions
      history.push('/applyloan'); // Using 'history' to navigate
    })
    .catch(error => {
      console.log("Profile edited successfully", error);
      // Handle the error case
    });
  };

  return (
    <div className="login-box">
      <h2>Edit Profile</h2>
      <form onSubmit={editProfile}>
        <div className="user-box">
          <input
            type="text"
            name="aadhaarNum"
            className="form-control"
            value={aadhaarNum}
            onChange={e => setAadhaarNum(e.target.value)}
            required
          />
          <label>Aadhaar Number</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="address"
            className="form-control"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
          <label>Address</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <label>UserName</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Edit</button>
      </form>
    </div>
  );
};

export default EditProfileComponent;
