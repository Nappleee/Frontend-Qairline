import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Pagination, InputGroup, Alert } from 'react-bootstrap';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const AircraftPage = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [formData, setFormData] = useState({ model: '', capacity: '' });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ message: '', variant: '' });
  const [isLoading, setIsLoading] = useState(false);

  const pageSize = 5;

  // Load aircrafts
  const loadAircrafts = async (page = 0, keyword = '') => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_BASE_URL}/aircraftsSearch`, {
        params: { page, size: pageSize, keyword },
      });
      console.log(response.data)
      setAircrafts(response.data.content);
      setCurrentPage(response.data.number);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching aircrafts:', error);
      setAlert({ message: 'Error fetching aircraft data', variant: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  // Add new aircraft
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.model) validationErrors.model = 'Model is required';
    if (!formData.capacity) validationErrors.capacity = 'Capacity is required';
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(`http://localhost:8080/api/aircrafts?model=${formData.model}&capacity=${formData.capacity}`, formData);
        console.log(formData)
        if (response.data === 'success') {
          setAlert({ message: 'Aircraft added successfully!', variant: 'success' });
          setFormData({ model: '', capacity: '' });
          loadAircrafts(currentPage, keyword); // Refresh list
        } else {
          setAlert({ message: response.data, variant: 'danger' });
        }
      } catch (error) {
        console.error('Error adding aircraft:', error);
        setAlert({ message: 'Error adding aircraft', variant: 'danger' });
      }
    }
  };

  // Delete aircraft
  const deleteAircraft = async (model) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/deleteaircraft`, null, {
        params: { model },
      });
      if (response.data === 'success') {
        setAlert({ message: 'Aircraft deleted successfully!', variant: 'success' });
        loadAircrafts(currentPage, keyword); // Refresh list
      }
    } catch (error) {
      console.error('Error deleting aircraft:', error);
      setAlert({ message: 'Error deleting aircraft', variant: 'danger' });
    }
  };

  useEffect(() => {
    loadAircrafts();
  }, []);

  return (
    <div className="container-fluid aircraft-container">
      <h1>Aircraft Management</h1>

      {/* Alert */}
      {alert.message && <Alert variant={alert.variant}>{alert.message}</Alert>}

      {/* Search Box */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup className="search-box">
          <Form.Control
            type="text"
            placeholder="Search by keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button onClick={() => loadAircrafts(0, keyword)} variant="primary" disabled={isLoading}>
            Search
          </Button>
        </InputGroup>
      </div>

      <div>
        <span>{aircrafts.length} records found</span>
      </div>

      {/* Aircraft Table */}
      <div className="row">
        <div className="col-md-8">
          <Table bordered>
            <thead>
              <tr>
                <th>Aircraft ID</th>
                <th>Model</th>
                <th>Capacity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {aircrafts.map((aircraft) => (
                <tr key={aircraft.aircraftId}>
                  <td>{aircraft.aircraftId}</td>
                  <td>{aircraft.model}</td>
                  <td>{aircraft.capacity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteAircraft(aircraft.model)}
                      disabled={isLoading}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <Pagination className="d-flex justify-content-center">
            <Pagination.Prev
              disabled={currentPage === 0 || isLoading}
              onClick={() => loadAircrafts(currentPage - 1, keyword)}
            />
            <Pagination.Item>{`Page: ${currentPage + 1} / ${totalPages}`}</Pagination.Item>
            <Pagination.Next
              disabled={currentPage + 1 >= totalPages || isLoading}
              onClick={() => loadAircrafts(currentPage + 1, keyword)}
            />
          </Pagination>
        </div>

        {/* Add Aircraft Form */}
        <div className="col-md-4">
          <div className="form-container">
            <h4>Add Aircraft</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.model}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, model: e.target.value }))
                  }
                  isInvalid={!!errors.model}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.model}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="number"
                  value={formData.capacity}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, capacity: e.target.value }))
                  }
                  isInvalid={!!errors.capacity}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.capacity}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" variant="primary" disabled={isLoading}>
                Confirm
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AircraftPage;
