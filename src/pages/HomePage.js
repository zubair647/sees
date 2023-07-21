import React from 'react';

const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>

        <div className='box'>
          <input className="form-control search-sec" type="search" placeholder="Search" aria-label="Search" />
          <a href='#'>
            <i className="bi bi-search search-icon"></i>
          </a>
        </div>

        <div className="form-check form-switch toggle-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>
      </nav>

      <div className='order-info'>
        <div className='order-info-card'>
          <button className='order-info-btn'>Ready(0)</button>
        </div>

        <div className='order-info-card'>
          <button className='order-info-btn'>Pickedup(0)</button>
        </div>

        <div className='order-info-card'>
          <button className='order-info-btn'>Delivered(0)</button>
        </div>
      </div>

      <hr />

      <div className='delivered-card'>
        <h2>Delivered orders</h2>
        <div className='bg-color'>
          <div className='Totalorder-card'>
            <h3 className='Todayorders-card-heading'>Today</h3>
            <p className='price-card'>₹ 0</p>
            <p className='orders-card'>0 orders</p>
          </div>

          <hr />

          <div className='Totalorders-card shadow'>
            <div className='today-card'>
              <h3 className='Todayorders-card-heading'>This week</h3>
              <p className='price-card'>₹ 0</p>
              <p className='orders-card'>0 orders</p>
            </div>

            <div className='vl'></div>

            <div className='today-card'>
              <h3 className='Todayorders-card-heading'>This month</h3>
              <p className='price-card'>₹ 0</p>
              <p className='orders-card'>0 orders</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
