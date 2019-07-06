import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/submit/'>Submit a Video</Link>
    </nav>
  )
}

export default Navigation;
