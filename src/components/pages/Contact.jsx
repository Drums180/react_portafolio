import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  useEffect(() => {
    if (!localStorage.getItem('name')) {
      setFormState({ ...formState, name: '' });
    } else {
      setFormState({
        ...formState,
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        message: localStorage.getItem('message'),
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setErrorMessage('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Check if any field is empty
    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      return;
    }
  
    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email');
      return;
    }
  
    // If everything is fine, continue with form submission
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    
    setErrorMessage(`Thanks for your message, ${name}!`);
  
    setFormState({
      name: '',
      email: '',
      message: '',
    });
  };
  
  return (
    <div className="container mt-5">
      <p>
        Hello, {name}
      </p>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={message}
            name="message"
            onChange={handleInputChange}
            placeholder="Your message..."
          />
        </div>
        {errorMessage && (
          <p className="error-text" style={{ color: 'red' }}>{errorMessage}</p>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
