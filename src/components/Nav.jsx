import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <p className="navbar-brand">Nav Bar</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {['About', 'Portfolio', 'Contact', 'Resume'].map((section) => (
              <li className={`nav-item ${section === currentPage ? 'active' : ''}`}>
                <a 
                  className="nav-link"
                  href={`#${section.toLowerCase().replace(' ', '_')}`}
                  onClick={() => handlePageChange(section)}
                >
                  {section}
                  {section === currentPage && <span className="sr-only">(current)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
