import "./Section1.css";
import bookset from "../../../assets/landing/bookset.png";

export default function Section1() {
  return (
    <div className="section1">
      <header>
        CETREADS
        <button>Login</button>
      </header>
      <main>
        <section className="left">
          <h1>Which book are you looking for?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            elementum, odio nec pellentesque fermentum, justo purus euismod
            nunc, nec luctus nisi justo sit amet erat. Nullam nec nunc et nisl
            fringilla.
          </p>
          <button>Learn More</button>
        </section>
        <section className="right">
          <img src={bookset} />
        </section>
      </main>
    </div>
  );
}
