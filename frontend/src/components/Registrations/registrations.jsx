import React, { useState } from 'react';
import './registration.css'
import TimeLeft from './timeleft';
import axios from 'axios';

import { Button, Modal } from 'react-bootstrap';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({formData});
      console.log(body);
      await axios.post('http://localhost:5000/register', formData, config).then(response => {
        console.log(response);
      
          setFormData({
          name: '',
          email: '',
          phone: ''
        })
        setShowPopup(true);
        
        
      });
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 409) {
        setShowErrorPopup(true);
      }
      console.error(err);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };

  // return (<div>Hello</div>);
  return (
    <div className="d-flex">
      <div id="sidebar-left" className="col-3"></div>
      <div className="container mt-5 col-6">
        <h2 className="text-center mb-5">Register for the Online Event</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <TimeLeft/>
        <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your application has been submitted.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showErrorPopup} onHide={handleCloseErrorPopup}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>The email you entered has already been used.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorPopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <div id="sidebar-right" className="col-3"></div>
    </div>
  );
};

export default RegistrationForm;