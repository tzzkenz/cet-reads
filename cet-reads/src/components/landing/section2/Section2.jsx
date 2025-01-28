import Carousel from "../carousel/Carousel";
import "./Section2.css";

export default function Section2() {
  return (
    <div className="section2">
      <h1>Available Books</h1>
      <Carousel />
      <div className="get-books-container">
        <button className="get-books">Get Books</button>
      </div>
    </div>
  );
}
