import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import { searchNews } from '../api/newsApi';
import ArticleList from '../components/ArticleList';

const SearchResults = () => {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Debounce search
  const debounceRef = useRef();
  useEffect(() => {
    if (!query) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const fetchResults = async () => {
        try {
          setLoading(true);
          setError('');
          const response = await searchNews(query);
          setArticles(response.data.articles);
          setLoading(false);
        } catch (err) {
          console.error('Search error:', err);
          setError('Failed to load search results.');
          setLoading(false);
        }
      };
      fetchResults();
    }, 500); // 500ms debounce
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  return (
    <Container className="my-5">
      <h2>Search Results for: "{query}"</h2>
      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" />
          <p>Searching...</p>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <ArticleList articles={articles} />
      </Row>
    </Container>
  );
};

export default SearchResults;