import React from 'react';
import { Col, Card } from 'react-bootstrap';

const ArticleList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <Col>No results found.</Col>;
  }
  return articles.map((article, index) => (
    <Col md="6" lg="4" key={index} className="mb-4">
      <Card className="h-100 shadow-sm border-1 rounded ">
        <Card.Img
          className="img-fluid"
          variant="top"
          src={article.urlToImage || 'https://www.shutterstock.com/image-vector/breaking-news-poster-banner-graphic-600nw-2453959087.jpg'}
          alt={article.title || 'No image'}
          loading="lazy"
          onError={e => {
            e.target.src = 'https://www.shutterstock.com/image-vector/breaking-news-poster-banner-graphic-600nw-2453959087.jpg';
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between h-100 ">
          <Card.Title as="h5" style={{ fontSize: '1rem' }}>
            {article.title && article.title.length > 50
              ? `${article.title.substring(0, 50)}...`
              : article.title || 'Untitled'}
          </Card.Title>
          <Card.Text style={{ fontSize: '0.9rem' }}>
            {article.description
              ? `${article.description.substring(0, 80)}...`
              : 'No description available.'}
          </Card.Text>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-primary"
          >
            Read Full Article
          </a>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default ArticleList;
