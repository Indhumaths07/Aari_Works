import React from "react";
import contactImg from "../assets/bridal.jpg";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Get In Touch</h1>
          <p>Let’s design something timeless together</p>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="contact-main">

        {/* LEFT IMAGE */}
        <div className="contact-left">
          <img src={contactImg} alt="Aari Work Design" />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>

      {/* CONTACT INFO CARDS */}
      <section className="contact-info">
        <div className="info-card">
          <h3>📍 Vadamadurai</h3>
          <p>Your Dindigul, Tamil Nadu</p>
        </div>

        <div className="info-card">
          <h3>📞 Call Us</h3>
          <p>+91 86107-46340</p>
        </div>

        <div className="info-card">
          <h3>📧 Email</h3>
          <p>aariworks@email.com</p>
        </div>
      </section>

    </div>
  );
};

export default Contact;