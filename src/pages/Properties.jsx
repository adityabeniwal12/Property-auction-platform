import React, { useState } from 'react';
import "../index.css";

const properties = [
  { id: 1, image: '/dlf-kings-court.jpg', description: 'Cozy 2BHK Apartment in Delhi', price: '$500,000' },
  { id: 2, image: '/luxuri villa.webp', description: 'Luxury Villa in Mumbai', price: '$2,000,000' },
  { id: 3, image: '/studio.jpg', description: 'Studio Apartment in Bangalore', price: '$300,000' },
  { id: 4, image: '/3bhk.webp', description: '3BHK in Gurgaon', price: '$800,000' },
  { id: 5, image: '/beach.jpg', description: 'Beach House in Goa', price: '$1,500,000' },
  { id: 6, image: '/modern.webp', description: 'Modern Flat in Pune', price: '$600,000' },
  { id: 7, image: '/farm.jpg', description: 'Farmhouse in Punjab', price: '$900,000' },
  { id: 8, image: '/pent house.jpeg', description: 'Penthouse in Chennai', price: '$1,800,000' },
];

const Properties = () => {
  const [bidding, setBidding] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleBidChange = (id, value) => {
    setBidding((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (id) => {
    setSubmitted((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      alert(`Thank you for your bid of $${bidding[id]} on Property ID ${id}`);
    }, 200);
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Available Properties</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {properties.map((prop) => (
          <div
            key={prop.id}
            style={{
              background: '#111',
              padding: '15px',
              borderRadius: '10px',
              minHeight: '400px', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={prop.image}
              alt={prop.description}
              style={{
                width: '100%',
                borderRadius: '10px',
                marginBottom: '10px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <h3>{prop.description}</h3>
            <p style={{ color: '#0af', fontWeight: 'bold' }}>Auction Price: {prop.price}</p>

            {!submitted[prop.id] ? (
              <div>
                <input
                  type="number"
                  placeholder="Enter your bid"
                  value={bidding[prop.id] || ""}
                  onChange={(e) => handleBidChange(prop.id, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '5px',
                    border: '1px solid #0af',
                    marginBottom: '5px',
                  }}
                />
                <button
                  onClick={() => handleSubmit(prop.id)}
                  style={{
                    width: '100%',
                    background: '#0af',
                    color: '#111',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Submit Bid
                </button>
              </div>
            ) : (
              <p style={{ color: 'lightgreen', fontWeight: 'bold' }}>✅ Thank you for your bid!</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;