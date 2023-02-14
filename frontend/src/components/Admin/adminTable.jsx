import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const OnlineEventApplicantsTable = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/applicants')
      .then(response => {
        setApplicants(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-center">
      <h1>Online event applicants</h1>
      <Table striped bordered hover className="my-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(applicant => (
            <tr key={applicant.id}>
              <td>{applicant.name}</td>
              <td>{applicant.email}</td>
              <td>{applicant.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OnlineEventApplicantsTable;
