import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomLink.css';

const CustomNavLink = ({ to, children }) => (
    <NavLink to={to} className="no-underline" activeClassName='active'>
  {children}
  <style scoped>{`
    .active {
        opacity: 100%;
        transform: scale(1.15);
        transition: transform 0.2s ease-in-out;
      }
  `}</style>
</NavLink>
  );

export default CustomNavLink;
