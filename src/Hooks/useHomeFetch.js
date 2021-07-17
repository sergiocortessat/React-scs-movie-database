/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(page, searchTerm);
      setState((prev) => ({
        // ask ari or ryel why this spread has to go here //
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return {
    state, loading, error, setSearchTerm,
  };
};
