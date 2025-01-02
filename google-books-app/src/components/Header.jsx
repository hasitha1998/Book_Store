import React, { useState, useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const Header = () => {
  const { fetchBooks } = useContext(BooksContext);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) fetchBooks(query.trim());
  };

  return (
    <div className="p-4 bg-gray-100">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
        className="border p-2 rounded mr-2 w-2/3"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default Header;
