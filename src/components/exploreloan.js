HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/exploreloan.css';


function ExploreLoan() {
return (
<div>
<h1>Welcome to Our Loan Services</h1>
<nav>
<ul>
<li><Link to="/personal-loan">Personal Loan</Link></li>
<li><Link to="/vehicle-loan">Vehicle Loan</Link></li>
<li><Link to="/gold-loan">Gold Loan</Link></li>
</ul>
<ul>
<li><Link to="/agri-loan">Agri Loan</Link></li>
<li><Link to="/home-loan">Home Loan</Link></li>

<li><Link to="/edu-loan">Education Loan</Link></li>
</ul>

</nav>
</div>
);
}


export default ExploreLoan;

