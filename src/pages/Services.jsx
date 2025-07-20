import React from "react";
import "../index.css";

const services = [
  {
    title: "Collaboration and redevelopment",
    description: "Find the right partner to transform your real estate projects through strategic redevelopment.",
    icon: "🤝",
  },
  {
    title: "Best in class wealth advisory",
    description: "Gain expert guidance to maximise and manage your wealth with personalised financial strategies.",
    icon: "💰",
  },
  {
    title: "One-stop legal services",
    description: "Get access to comprehensive legal solutions, addressing any questions you may have with ease.",
    icon: "⚖️",
  },
  {
    title: "Financial services",
    description: "Get custom financial solutions to aid you in growing your real estate investments.",
    icon: "📊",
  },
  {
    title: "Interior design services",
    description: "Elevate your spaces with bespoke interior design that reflects your style and taste.",
    icon: "🛋️",
  },
  {
    title: "Vastu and balance consulting",
    description: "Make sure your surroundings are harmonised with expert Vastu consultations for well-being and prosperity.",
    icon: "🧘",
  },
  {
    title: "Marketing Expertise",
    description: "Promote and showcase your real estate properties for maximum visibility and impact.",
    icon: "📣",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-intro">
        <h1>We offer the best white glove services available.</h1>
        <p>
          From wealth advisory, to legal expertise, to Vastu compliancies,
          to interior design services — trust us to bring the absolute
          crème de la crème your way.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;