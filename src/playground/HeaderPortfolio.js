import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink><b> </b>
    <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink><b> </b>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink><b> </b>
  </header>
)

export default Header;
