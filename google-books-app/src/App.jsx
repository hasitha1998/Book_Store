import React, { useContext } from 'react';
import Header from './components/Header';
import BookCard from './components/BookCard';
import { BooksContext } from './context/BooksContext';

const App = () => {
  const { books, loading } = useContext(BooksContext);

  return (
    <div className="App">
      <Header />
      <div className="p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
