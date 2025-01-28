import { useState } from "react";
import "./Carousel.css";
import book1 from "../../../assets/landing/book1.png";
import book3 from "../../../assets/landing/book3.jpg";
import book4 from "../../../assets/landing/book4.jpg";
import book5 from "../../../assets/landing/book5.jpg";

const books = [
  { id: 1, src: book1, title: "The Handmaid's Tale" },
  { id: 2, src: book5, title: "The Day of the Jackal" },
  { id: 3, src: book3, title: "Life Before Man" },
  { id: 4, src: book4, title: "Malayalam Book" },
  { id: 5, src: book5, title: "Cut & Thrust" },
  { id: 6, src: book5, title: "Cut & Thrust" },
  { id: 7, src: book5, title: "Cut & Thrust" },
  { id: 7, src: book5, title: "Cut & Thrust" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(3);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn left" onClick={moveLeft}>
        {"<"}
      </button>
      <div
        className="carousel"
        style={{
          transform: `translateX(calc(50% - ${
            150 + 10 /* item width + gap */
          }px * ${currentIndex + 0.5}))`,
        }}
      >
        {books.map((book, index) => (
          <img
            key={book.id}
            src={book.src}
            alt={book.title}
            className={`carousel-item ${
              index === currentIndex ? "center" : ""
            }`}
            style={{
              filter: index === currentIndex ? "none" : "grayscale(100%)",
              transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>
      <button className="carousel-btn right" onClick={moveRight}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
