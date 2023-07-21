import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
        <div>
            <div className='wrapper'>
    <div className='forgot-pw-section'>
      <div className='title-section'>
        <h2 className='title'>Reset password</h2>
        <p className='para'>Enter your mail send link to your mail please check and verify it
        your mail before account create you have a link inbox. click link and update your password </p>
      </div>

      <form action='' className='from'>
        <div className='email-group'>
          <label for='' className='label-title'>Enter your Email</label>
          <input type='email' name='email' placeholder='Enter your Email' />
          <span className='icon'>&#9993;</span> 
        </div>

        <div className='email-group'>
          <button className='submit-btn' type='submit'>Send reset Email</button>
        </div>
      </form>
    </div>
  </div>
        </div>
    );
};

export default Forgot;