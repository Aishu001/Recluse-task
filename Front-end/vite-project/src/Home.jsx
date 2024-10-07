import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [userData, setUserData] = useState(null); // To store user data
  const [loading, setLoading] = useState(true); // To show a loading state
  const [error, setError] = useState(null); // To handle errors

  const homeStyle = {
    backgroundImage: 'url(welcome.jpeg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Text color
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: 'bold',
    flexDirection: 'column' // Stacks content vertically
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://192.168.0.219:8000/api/customer/get-profile-info/?user_id=3j');
        setUserData(response.data); // Set the user data
        setLoading(false); // Loading done
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false); // Loading done
      }
    };

    fetchUserData();
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div style={homeStyle}>
      <h1>Welcome to Our Website</h1>
      {loading && <p>Loading user data...</p>} {/* Show loading while fetching */}
      {error && <p>{error}</p>} {/* Show error if any */}
      {userData && ( // Show user data if available
        <div>
          <p>Name: {userData.display_name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.mobile_number}</p>
          <p>Date of Birth: {userData.date_of_birth}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
