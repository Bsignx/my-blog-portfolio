import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
  <>
    <h1>About</h1>
    <ul>
      <li>
        <Link to="/about" activeStyle={{ color: '#ff3fff' }}>About</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </>
)

export default AboutPage;