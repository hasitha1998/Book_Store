import React, { useState, useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const Header = () => {
  const { fetchBooks } = useContext(BooksContext);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) fetchBooks(query.trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-gray-100 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Book Store</h1>
        <div className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search books..."
            className="border p-2 rounded mr-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
