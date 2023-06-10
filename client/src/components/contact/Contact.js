import React from 'react';
import '../../styles/ContactStyles/ContactPage.css'

function Contact() {
  return (
    <div class="contact-us-container">
      <h1>Contact Us</h1>

      <div class="contact-item">
        <h2>Email</h2>
        <p>customerservice@steppers.com</p>
      </div>

      <div class="contact-item">
        <h2>Phone</h2>
        <p>+1 234 567 8900</p>
      </div>

      <div class="contact-item">
        <h2>Address</h2>
        <p>123 Steppers Street<br />Los Angeles, NY 12121</p>
      </div>
    </div>
  );
}

export default Contact;
