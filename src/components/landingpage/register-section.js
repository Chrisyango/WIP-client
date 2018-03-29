import React from 'react';
import {Link} from 'react-router-dom';

export default function RegisterSection(props) {
  return (
    <div className="register-section">
      <div className="register-content">
        <h2>So what are you waiting for? <Link to="/register" onClick={event => this.toggleNav()}>Come and join us!</Link></h2>
        <img src="../images/ragnarok.jpg" alt="Ragnarok Online" />
      </div>
    </div>
  )
}