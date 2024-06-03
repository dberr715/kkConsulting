import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <section className="hero">
          <h1>KK Consulting</h1>
          <p>Your trusted partner for HR solutions</p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of consulting services to help your business
            grow and succeed. Our expertise includes:
          </p>
          <ul>
            <li>Payroll and Benefits</li>
            <li>UKG</li>
            <li>Employee Relations</li>
            <li>Leaves and Disability</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            Get in touch with us to learn more about how we can assist your
            business.
          </p>
          <form
            action="mailto:contact@kkconsulting.com"
            method="POST"
            enctype="text/plain"
          >
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
