import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Sarah J",
    review:
      "Thanks to Santamonica, my dream of moving abroad became a reality! The process was seamless, and I found a fantastic job within weeks. Highly recommended!",
  },
  {
    name: "John D",
    review:
      "The guidance and support I received were outstanding. Moving abroad was much easier than I thought!",
  },
  {
    name: "Emily R",
    review:
      "A wonderful service that made my transition to a new country smooth and hassle-free. I can't thank them enough!",
  },
];

function UserReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center py-16">
      <h3 className="font-semibold text-3xl my-8">Get verified user reviews</h3>
      <div className="w-full sm:w-3/5 px-4">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-8 border shadow-md rounded-lg py-8"
            >
              <div className="font-semibold text-lg text-center">
                {review.name}
              </div>
              <div className="mt-4 text-center">{review.review}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default UserReviews;
