import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import ArticleList from '../components/ArticleList';
import ArticleSkeleton from '../components/ArticleSkeleton';
import { getTopHeadlines } from '../api/newsApi';

const categoryMap = {
  business: 'Business',
  entertainment: 'Entertainment',
  health: 'Health',
  sports: 'Sports',
  technology: 'Technology',
  india: 'India',
};

const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        setLoading(true);
        const params = { };
        if (category === 'india') {
          params.country = 'in';
        } else {
          params.category = category;
        }
        const response = await getTopHeadlines(params);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load news.');
        setLoading(false);
      }
    };
    fetchCategoryNews();
  }, [category]);

  return (
    <Container className="my-5">
      <h2>{categoryMap[category] || category} News</h2>
      {loading ? (
        <Row>
          {Array.from({ length: 6 }).map((_, idx) => (
            <ArticleSkeleton key={idx} />
          ))}
        </Row>
      ) : null}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && (
        <Row>
          <ArticleList articles={articles} />
        </Row>
      )}
    </Container>
  );
};

export default Category;
