import React, { useState } from 'react';

const Cities = () => {
  const cities = [
    {
      name: 'DUBAI',
      emoji: '🏙️',
      residential: [
        'Luxury Apartments (Studio to 4 BHK)',
        'Waterfront Residences',
        'Penthouses & Sky Villas',
        'Townhouses & Duplexes',
        'Freehold Villas in Gated Communities',
        'Branded Residences',
      ],
      commercial: [
        'Retail Shops in Mixed-use Developments',
        'Offices in Business Districts',
      ],
    },
    {
      name: 'GOA',
      emoji: '🏖️',
      residential: [
        'Holiday Homes & Boutique Villas',
        'Sea-facing Apartments',
        'Portuguese-style Heritage Homes',
        'Gated Villas for Airbnb/Rental Income',
      ],
      commercial: [],
    },
    {
      name: 'MUMBAI',
      emoji: '🌇',
      residential: [
        'High-rise Apartments (1 BHK to 4 BHK)',
        'Premium Sea-view Flats',
        'Redevelopment Apartments in South Mumbai',
        'Compact Homes in Suburban Corridors',
        'Penthouses & Duplexes',
      ],
      commercial: [],
    },
    {
      name: 'GURGAON',
      emoji: '🏢',
      residential: [
        'High-rise Apartments (New Launches & Ready-to-Move)',
        'Builder Floors (Independent Floors)',
        'Gated Villas and Townhomes',
        'Affordable Housing under PMAY',
      ],
      commercial: [
        'SCO (Shop-cum-Office) Plots',
        'Pre-leased Commercial Units',
        'Retail High-Street Shops in New Projects',
        'Co-working Office Spaces',
        'Food Courts & Anchor Spaces in Malls',
      ],
    },
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '150px auto',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
    },
    heading: {
      textAlign: 'center',
      color: 'white',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      padding: '10px',
      margin: '5px 0',
      backgroundColor: '#fff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#333',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    details: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '10px',
      color: '#000',
    },
    categoryTitle: {
      marginTop: '15px',
      fontWeight: 'bold',
      color: '#222',
    },
    closeButton: {
      marginTop: '20px',
      padding: '8px 16px',
      backgroundColor: '#333',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>CITIES WE DEAL IN</h2>
      <ul style={styles.list}>
        {cities.map((city, index) => (
          <li
            key={index}
            style={styles.listItem}
            onClick={() => setSelectedCity(city)}
          >
            {city.emoji} {city.name}
          </li>
        ))}
      </ul>

      {selectedCity && (
        <div style={styles.details}>
          <h3>{selectedCity.emoji} {selectedCity.name}</h3>

          <div>
            <p style={styles.categoryTitle}>Residential</p>
            <ul>
              {selectedCity.residential.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>

          {selectedCity.commercial.length > 0 && (
            <div>
              <p style={styles.categoryTitle}>Commercial</p>
              <ul>
                {selectedCity.commercial.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          )}

          <button style={styles.closeButton} onClick={() => setSelectedCity(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Cities;