import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className='login-signup-sec'>
      <section className='container forms'>
        <div className='form signup'>
          <div className='form-content'>
            <header>Signup</header>

            <form action='#'>
              <div className='field input-field'>
                <input type='email' placeholder='Email' className='input1' required />
              </div>

              <div className='field input-field'>
                <input type='password' placeholder='Password' className='password' required />
                <i class='bx bx-hide eye-icon'></i>
              </div>

              <div className='field input-field'>
                <input type='password' placeholder='Confirm Password' className='password' required />
                <i class='bx bx-hide eye-icon'></i>
              </div>

              <div className='field button-field'>
                <Link to='/register'>
                  <button>Signup</button>
                </Link>
              </div>
            </form>

            <div className='form-link'>
              <span>
                Already have an account? <Link to='/login' className='login-link'>Login</Link>
              </span>
            </div>
          </div>

          <div className='line'></div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
