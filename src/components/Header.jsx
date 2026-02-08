import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 sticky-top navbar-sticky-z">
      <Link to="/" className="navbar-brand">NewsHub</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/category/business" className="nav-link">Business</Link>
          <Link to="/category/entertainment" className="nav-link">Entertainment</Link>
          <Link to="/category/health" className="nav-link">Health</Link>
          <Link to="/category/sports" className="nav-link">Sports</Link>
          <Link to="/category/technology" className="nav-link">Technology</Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl
            type="text"
            placeholder="Search news..."
            aria-label="Search news"
            className="me-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <Button variant="outline-light" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;