import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
      <div>
        <h1>This is HomePage</h1>
        <Link to="/login">Login</Link>
      </div>
  );
}

export default HomePage;