import React from 'react';

const BookCard = ({ book, onClick }) => {
  const { volumeInfo } = book;

  return (
    <div
      className="border p-4 rounded shadow bg-white cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <h3 className="font-bold text-lg">{volumeInfo.title}</h3>
      <p className="text-sm text-gray-700">{volumeInfo.authors?.join(', ')}</p>
      {volumeInfo.imageLinks?.thumbnail && (
        <img
          src={volumeInfo.imageLinks.thumbnail}
          alt={volumeInfo.title}
          className="my-2"
        />
      )}
      
    </div>
  );
};

export default BookCard;
