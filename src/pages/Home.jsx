import React from 'react';
import { Container, Row, Spinner,Col, Alert } from 'react-bootstrap';
import { getTopHeadlines } from '../api/newsApi';
import AsideMenu from '../components/AsideMenu';
import ArticleList from '../components/ArticleList';
import ArticleSkeleton from '../components/ArticleSkeleton';
import { useState, useEffect } from 'react';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await getTopHeadlines();
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {/* Main Content */}
        <Col lg={8} xs={12}>
          <h1 className="text-center mb-4">
            Top <span className="badge bg-danger">Breaking News</span>
          </h1>


          {loading ? (
            <Row>
              {Array.from({ length: 6 }).map((_, idx) => (
                <ArticleSkeleton key={idx} />
              ))}
            </Row>
          ) : (
            <Row>
              <ArticleList articles={articles} />
            </Row>
          )}

          {error && <Alert variant="danger">{error}</Alert>}
        </Col>

        {/* Aside Menu (Sidebar) */}
        <Col lg={4} xs={12}>
          <AsideMenu />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;