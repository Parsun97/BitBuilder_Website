import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Calcify",
    description: "27+ free online calculators for math, finance, health, and unit conversion.",
    link: "/calcify",
    live: true,
  },
  {
    name: "Neurodesk",
    description: "Coming soon.",
    link: "#",
    live: false,
  },
  {
    name: "Monica AI",
    description: "Coming soon.",
    link: "#",
    live: false,
  },
  {
    name: "Heper",
    description: "Coming soon.",
    link: "#",
    live: false,
  },
];

const OurProductsPage = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "8px" }}>
        Our Other Products
      </h1>
      <p style={{ color: "#666", marginBottom: "40px" }}>
        A look at the other tools we've built.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              padding: "24px",
              opacity: p.live ? 1 : 0.6,
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}>
              {p.name}
            </h3>
            <p style={{ color: "#666", marginBottom: "16px", fontSize: "0.9rem" }}>
              {p.description}
            </p>
            {p.live ? (
              <Link to={p.link} style={{ color: "#4f46e5", fontWeight: 500 }}>
                View →
              </Link>
            ) : (
              <span style={{ color: "#999", fontSize: "0.85rem" }}>Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProductsPage;
