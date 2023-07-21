import React from 'react';
import { Link } from 'react-router-dom';

const LogPage = () => {
  return (
    <div className='login-signup-sec'>
      <section className='container forms'>
        <div className='form login'>
          <div className='form-content'>
            <header>Login</header>

            <form action='#'>
              <div className='field input-field'>
                <input type='email' placeholder='Email' className='input1' required />
              </div>

              <div className='field input-field'>
                <input type='password' placeholder='Password' className='password' required />
                <i class='bx bx-hide eye-icon'></i>
              </div>

              <div className='form-link'>
                <Link to='Forgot' className='forgot-pass'>Forgot Password?</Link>
              </div>

              <div className='field button-field'>
              <Link to='Register'> <button>Login</button></Link>
              </div>
            </form>

            <div className='form-link'>
              <span>Create new account? <Link to='/Signup'className='signup-link'>Signup</Link></span>
            </div>
          </div>

          <div className='line'></div>
        </div>
      </section>
    </div>
  );
};

export default LogPage;
