import React from 'react';

const Modal = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2">
        <button
          onClick={onClose}
          className="flex justify-end static top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          X
        </button>
        {book.volumeInfo.imageLinks?.thumbnail && (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            className="rounded mb-4 "
          />
        )}
        <h3 className="text-lg font-bold mb-2">{book.volumeInfo.title}</h3>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Authors:</strong> {book.volumeInfo.authors?.join(', ')}
        </p>
        <p className="text-sm text-gray-700 mb-4">
          <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
        </p>
        <p className="text-sm text-gray-700">{book.volumeInfo.description}</p>
      </div>
    </div>
  );
};

export default Modal;
