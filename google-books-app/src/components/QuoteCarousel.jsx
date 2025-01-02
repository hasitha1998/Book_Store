import React, { useState, useEffect } from "react";
import image from '../assets/922690.jpg'
const quotes = [
  "“A room without books is like a body without a soul.” – Marcus Tullius Cicero",
  "“The only thing that you absolutely have to know, is the location of the library.” – Albert Einstein",
  "“So many books, so little time.” – Frank Zappa",
  "“Reading is essential for those who seek to rise above the ordinary.” – Jim Rohn",
];

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
    {/* Cover Image Section */}
    <div className="relative w-full h-64 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
    <div className="bg-gradient-to-r from-blue-200 to-purple-400 py-8 px-8 shadow-lg">
      <p className="text-center text-2xl font-semibold text-gray-50 neon-animation">
        {quotes[currentQuote]}
      </p>
    </div>
    </div>
  );
};

export default QuoteCarousel;
