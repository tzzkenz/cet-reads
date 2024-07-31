import { BiPaperPlane } from "react-icons/bi";

function WhyUs() {
  return (
    <div className="flex flex-col justify-center items-center py-16 bg-green">
      <h3 className="font-semibold text-3xl mt-8 mb-16 ">Why choose us?</h3>
      <div className="flex flex-col gap-16 items-start my-4">
        <div className="flex items-center justify-center">
          <BiPaperPlane className=" mr-8 text-emigrate-blue" size={50} />
          <div>
            <h4 className="font-semibold text-lg">
              Personalized Relocation Plans:
            </h4>
            <p>
              Tailored emigration plans to fit your specific needs, ensuring a
              smooth transition to your new country.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiPaperPlane className=" mr-8 text-emigrate-blue" size={50} />
          <div>
            <h4 className="font-semibold text-lg">
              Personalized Relocation Plans:
            </h4>
            <p>
              Tailored emigration plans to fit your specific needs, ensuring a
              smooth transition to your new country.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BiPaperPlane className=" mr-8 text-emigrate-blue" size={50} />
          <div>
            <h4 className="font-semibold text-lg">
              Personalized Relocation Plans:
            </h4>
            <p>
              Tailored emigration plans to fit your specific needs, ensuring a
              smooth transition to your new country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
