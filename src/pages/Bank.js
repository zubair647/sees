import React from 'react';
import { Link } from 'react-router-dom';

const Bank = () => {
  return (
   
      <div className='page-card'>
      <div class="registration-form">
    <h2>Bank Details</h2>
    <form>
      <div class="form-group">
        <label for="accountName">Account Name:</label>
        <input type="text" id="accountName" name="accountName" required />
      </div>
      <div class="form-group">
        <label for="accountNumber">Account Number:</label>
        <input type="text" id="accountNumber" name="accountNumber" required />
      </div>
      <div class="form-group">
        <label for="bankName">Bank Name:</label>
        <input type="text" id="bankName" name="bankName" required />
      </div>
      <div class="form-group">
        <label for="branch">Branch:</label>
        <input type="text" id="branch" name="branch" required />
      </div>
      <div class="form-group">
        <label for="ifsc">IFSC Code:</label>
        <input type="text" id="ifsc" name="ifsc" required />
      </div>
      <div class="form-group">
      <Link to='/HomePage'>
        <input type="submit" value="Submit" />
      </Link>
      </div>
    </form>
  </div>

    </div>
    
  );
};

export default Bank;
