import "./Section3.css";
import polaroids from "../../../assets/landing/polaroids.png";

export default function Section3() {
  return (
    <div className="section3">
      <main>
        <div className="left">
          <h1>CETReads</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pulvinar leo eget ipsum pulvinar iaculis. Vivamus egestas eleifend
            metus, at scelerisque ipsum bibendum eu. Maecenas pretium felis eu
            metus consequat efficitur. Quisque elementum urna diam, quis
            vulputate magna dignissim eget.
          </p>
          <h3>Reading sessions : 8 am, Saturdays at the Gazebos</h3>
        </div>
        <div className="right">
          <img src={polaroids} alt="polaroids" />
        </div>
      </main>
      <footer>
        <hr></hr>
        <h5>CETREADS</h5>
      </footer>
    </div>
  );
}
