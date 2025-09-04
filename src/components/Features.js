import React from 'react';
import './Features.css';

function Features() {
  const features = [
    { title: 'Planets', desc: 'Discover planets in our solar system.' },
    { title: 'Stars', desc: 'Learn about stars and constellations.' },
    { title: 'Galaxies', desc: 'Explore distant galaxies.' },
  ];

  return (
    <section id="features" className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-card" data-aos="fade-up">
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;