const BookCard = ({ book }) => {
    const { volumeInfo } = book;
  
    return (
      <div className="border p-4 rounded shadow">
        <h3 className="font-bold">{volumeInfo.title}</h3>
        <p>{volumeInfo.authors?.join(', ')}</p>
        {volumeInfo.imageLinks?.thumbnail && (
          <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />
        )}
      </div>
    );
  };
  
  export default BookCard;
  