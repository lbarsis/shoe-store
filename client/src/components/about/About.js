import React from 'react';
import '../../styles/AboutStyles/AboutStyle.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <p>Welcome to Steppers, the home of stylish and comfortable footwear.</p>
        <p>Founded in 2023, we are dedicated to providing quality shoes for all walks of life. Our mission is to create a seamless shopping experience that combines the convenience of online shopping with the personalized touch of an in-store visit.</p>
        <p>We offer a wide variety of shoes, from stylish stilettos and trendy sneakers to comfortable slippers and durable work boots. Our team hand-picks each product, ensuring they are both stylish and durable.</p>
        <p>At Steppers, we believe in creating long-lasting relationships with our customers. Your comfort and satisfaction is our highest priority. Join us and take a step towards style and comfort!</p>
      </div>
      <div className="about-footer">
        <p>Thank you for choosing Steppers - where style meets comfort.</p>
      </div>
    </div>
  );
}

export default About;
