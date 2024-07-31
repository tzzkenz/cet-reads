import backgroundImage from "../../assets/bg-image-cta.png";

function CallToAction() {
  return (
    <div
      className="flex flex-col bg-cover bg-center items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded text-3xl font-semibold w-1/2 text-center mt-16">
        Search from over 17,000+ registered consultancies
      </div>
      <div className="mt-8 w-1/3 text-center mb-16">
        Find tailored guidance for every step of your emigration process,
        ensuring you secure the right job and settle comfortably
      </div>
      <button className="bg-white border-emigrate-blue rounded-xl px-4 py-2 border-4 font-semibold mt-4 text-emigrate-blue mb-20">
        Sign Up
      </button>
    </div>
  );
}

export default CallToAction;
