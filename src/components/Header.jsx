import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-dark text-white p-4">
      <div className="container">
        <h1 className="display-4">Welcome to My Portfolio!</h1>
        <p className="lead">Explore my projects, learn about me, and get in touch.</p>
      </div>
    </header>
  );
}

export default Header;
