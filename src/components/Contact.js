import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>

      {/* Info Section */}
      <div className="contact-info">
        <p>
         SpaceSite is dedicated to serving professionals in the informal science education community, such as museum exhibit developers and planetarium directors.
          If you are a professional in this community and have a comment, question, or request, then please let us know how we can help.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="contact-sections">
        <div className="contact-box">
          <h2>Get in touch</h2>
          <p>Please complete the form below. Once received, we will get back to you shortly.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-box">
          <h2>Customer Support</h2>
          <p>Many common issues are addressed in our <a href="#">Help Center</a>.</p>
          <p>You can also reach us on <a href="#">Twitter</a> or <a href="#">Discord</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
