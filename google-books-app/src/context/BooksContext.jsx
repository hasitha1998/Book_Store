import React, { createContext, useState } from 'react';
import axios from 'axios';

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyAcVsVYnTIr62_NOw_n-EnxVF4LF_a5WiM`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    setLoading(false);
  };

  return (
    <BooksContext.Provider value={{ books, fetchBooks, loading }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
