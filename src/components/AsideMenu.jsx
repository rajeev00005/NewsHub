import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AsideMenu = () => {
  // Mock trending topics (you can later fetch real ones)
  const trending = [
    { title: "Elections 2024", category: "Politics", views: "1.2M" },
    { title: "India Wins Cricket Match", category: "Sports", views: "890K" },
    { title: "New Budget Announced", category: "Business", views: "720K" },
    { title: "Bollywood Star Marries", category: "Entertainment", views: "2.1M" },
  ];

  return (
    <div className="aside-menu sticky-aside p-3 mt-3 bg-light border rounded shadow-sm mb-4">
      {/* Quick Categories */}
      <Card className="mb-4 shadow-sm">
        <Card.Header className="bg-primary text-white">
          <h5>Categories</h5>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Link to="/category/india" className="text-decoration-none">🇮🇳 India News</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/category/business" className="text-decoration-none">💼 Business</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/category/sports" className="text-decoration-none">🏏 Sports</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/category/technology" className="text-decoration-none">📱 Technology</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/category/entertainment" className="text-decoration-none">🎬 Entertainment</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/category/health" className="text-decoration-none">🏥 Health</Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* Trending News */}
      <Card className="mb-4 shadow-sm">
        <Card.Header className="bg-danger text-white">
          <h5>Trending Now 🔥</h5>
        </Card.Header>
        <ListGroup variant="flush">
          {trending.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="mb-0">{item.title}</h6>
                <small>
                  <Badge bg="secondary">{item.category}</Badge>
                </small>
              </div>
              <small className="text-muted ms-2">{item.views}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      {/* Newsletter / Call to Action */}
      <Card className="text-white bg-dark">
        <Card.Body>
          <Card.Title>📬 Stay Updated</Card.Title>
          <Card.Text>
            Get daily Indian news delivered to your inbox.
          </Card.Text>
          <button className="btn btn-outline-light btn-sm">Subscribe Now</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AsideMenu;