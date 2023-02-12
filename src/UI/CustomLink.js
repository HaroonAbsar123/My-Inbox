import React from 'react';
import { Link } from 'react-router-dom';
import './CustomLink.css';

const CustomLink = ({ to, children }) => (
  <Link to={to} className="no-underline">
    {children}
  </Link>
);

export default CustomLink;
