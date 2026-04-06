import React from "react";
import aboutImg from "../assets/saree.jpg";
import artisanImg from "../assets/bridal.jpg";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Our Aari Craft</h1>
        <p>Where tradition meets elegance</p>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We specialize in handcrafted Aari embroidery designs that
            celebrate tradition, culture, and modern fashion.
            Every stitch reflects passion, patience, and perfection.
          </p>
          <p>
            From bridal blouses to designer sarees, our mission is to
            create timeless pieces that make your special moments unforgettable.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="Aari Work" />
        </div>
      </section>

      {/* CRAFT SECTION */}
      <section className="about-craft">
        <div className="craft-image">
          <img src={artisanImg} alt="Artisan Work" />
        </div>

        <div className="craft-text">
          <h2>Handcrafted With Love</h2>
          <p>
            Each design is carefully stitched by skilled artisans
            using premium threads, stones, and beads.
          </p>
          <p>
            We ensure quality finishing, detailed embroidery,
            and personalized customization for every client.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>✨ Premium Quality</h3>
            <p>Finest materials & detailed craftsmanship</p>
          </div>
          <div className="why-card">
            <h3>🎨 Custom Designs</h3>
            <p>Personalized embroidery made just for you</p>
          </div>
          <div className="why-card">
            <h3>🤝 Trusted Service</h3>
            <p>Customer satisfaction is our priority</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;