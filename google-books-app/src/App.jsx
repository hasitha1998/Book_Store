import React, { useContext, useState } from 'react';
import Header from './components/Header';
import BookCard from './components/BookCard';
import { BooksContext } from './context/BooksContext';
import Modal from './components/Modal';
import QuoteCarousel from './components/QuoteCarousel';

const App = () => {
  const { books, loading } = useContext(BooksContext);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <Header />
      <QuoteCarousel/>
      <div className="p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} onClick={() => handleBookClick(book)} />
            ))}
          </div>
        )}
        {selectedBook && <Modal book={selectedBook} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default App;
