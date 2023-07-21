import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='page-card'>
      <div className="registration-form">
        <h1>Vinkal.Seller.com</h1>
        <form>
          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input type="text" id="businessName" name="businessName" required />
          </div>
          <div className="form-group">
            <label htmlFor="contactName">Full Name</label>
            <input type="text" id="contactName" name="contactName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="terms" required />
              I agree to the terms and conditions
            </label>
          </div>
          <div className="form-group">
            {/* Use the correct path in the 'to' prop to navigate to the Bank component */}
            <Link to='/bank'>
              <input type="submit" value="Register" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
