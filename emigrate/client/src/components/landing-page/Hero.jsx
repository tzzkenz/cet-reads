import hero from "../../assets/hero-image.png";

function Hero() {
  return (
    <>
      <div className="flex mx-32 justify-around items-center ">
        <div className="w-2/5 -pt-16">
          <h1 className="font-bold text-5xl py-8 leading-normal">
            {" "}
            Your Next Chapter Begins Here{" "}
          </h1>
          <h3 className="font-base text-xl  leading-normal">
            Connecting you with employers worldwide and guiding your emigration
            journey.
          </h3>
        </div>
        <img src={hero} alt="hero" />
      </div>
    </>
  );
}

export default Hero;
