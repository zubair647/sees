import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">My Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#addproducts">Add products</Nav.Link>
          <Nav.Link href="#editproducts">Edit products</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#product1">Product 1</NavDropdown.Item>
            <NavDropdown.Item href="#product2">Product 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#product3">Product 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="./logpage">Login</Nav.Link>
          <Nav.Link href="./signup">Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>










      <div className="add-product">
      <h1>Add Product</h1>
      <form>
        <label htmlFor="product-name">Product Name:</label>
        <input type="text" id="product-name" name="product-name" required />

        <label htmlFor="product-price">Price:</label>
        <input type="number" id="product-price" name="product-price" required />

        <label htmlFor="product-description">Product Name:</label>
        <input type="text" id="product-description" name="product-description" required />

        <label htmlFor="product-category">Category:</label>
        <select id="product-category" name="product-category" required>
          <option value="" disabled selected>Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Kitchen</option>
          {/* Add more category options as needed */}
        </select>

        <label htmlFor="product-image">Product Image:</label>
        <input type="file" id="product-image" name="product-image" accept="image/*" required />

        <button type="submit" >Add Product</button>
      </form>
    </div>




<div className='pop-card'>
  <div className='popup' id='popup'>
    <img src='https://th.bing.com/th?id=OIP.8WbIrvh6UlckcGsf7-m2JQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt='' />
    <h2>Thank you</h2>
    <p>Your product has been successfully added.</p>
    <button type='button' >OK</button>
  </div>
</div>

{/* <script>
  let popup = document.getElementById("popup");

  function openpopup() {
    popup.classList.add("open-popup")
  }

function closepopup() {
    popup.classList.remove("open-popup")
  }
</script> */}






<div className='products-section'>
<div className="product-container">
      <div className="product-details">
        <h2>Product Title</h2>
        <p>Category: Electronics</p>
        <p>Product description goes here...</p>
        <p>Price: $19.99</p>
      </div>
      <div className="product-image">
        <img src="https://th.bing.com/th?q=T-Mobile+Samsung+Android+Phones&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className='product-image-card' alt="Product" />
      </div>
    </div>


    <div className="product-container">
      <div className="product-details">
        <h2>Product Title</h2>
        <p>Category: Electronics</p>
        <p>Product description goes here...</p>
        <p>Price: $19.99</p>
      </div>
      <div className="product-image">
        <img src="https://th.bing.com/th?q=T-Mobile+Samsung+Android+Phones&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className='product-image-card' alt="Product" />
      </div>
    </div>


    <div className="product-container">
      <div className="product-details">
        <h2>Product Title</h2>
        <p>Category: Electronics</p>
        <p>Product description goes here...</p>
        <p>Price: $19.99</p>
      </div>
      <div className="product-image">
        <img src="https://th.bing.com/th?q=T-Mobile+Samsung+Android+Phones&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className='product-image-card' alt="Product" />
      </div>
    </div>

    <div className="product-container">
      <div className="product-details">
        <h2>Product Title</h2>
        <p>Category: Electronics</p>
        <p>Product description goes here...</p>
        <p>Price: $19.99</p>
      </div>
      <div className="product-image">
        <img src="https://th.bing.com/th?q=T-Mobile+Samsung+Android+Phones&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className='product-image-card' alt="Product" />
      </div>
    </div>


</div>







    </>
  );
};

export default HomePage;
