import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h5>Email</h5>
            <p>
              Lalithkumar@gmail.com
            </p>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="" className="text-light text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-light me-3 fs-4" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-light me-3 fs-4" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-light fs-4" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <hr className="bg-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} Friendie-shope. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
