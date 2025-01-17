import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import Images from "../../assets/images";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

// Testimonials data
const testimonials = [
  {
    id: 1,
    message:
      "I had the pleasure of working with PixelPrem on a project for my company, and I couldn't be happier with the results. Their attention to detail and creativity are truly exceptional, and I would work with them again in a heartbeat.",
    name: "Cecily Villarreal",
    role: "UI Designer",
    image: Images.user1,
  },
  {
    id: 2,
    message:
      "PixelPrem exceeded all my expectations! They are the best team I’ve ever collaborated with.",
    name: "Ioan Jacobs",
    role: "App Developer",
    image: Images.user1,
  },
  {
    id: 3,
    message:
      "Working with PixelPrem has been a transformative experience for our business. Highly recommend them!",
    name: "Maria López",
    role: "Project Manager",
    image: Images.user3,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-[#0B1120] to-[#111621] text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What our clients say about us
        </h2>
        <p className="text-center text-gray-400 text-base md:text-lg mb-16">
          Customer Testimonials
        </p>

        {/* Swiper Slider */}
        <div className="max-w-full lg:max-w-[calc(100%-200px)] mx-auto relative">
          <Swiper
            modules={[Navigation, A11y]}
            navigation={{
              prevEl: ".custom-prev", // Reference custom buttons
              nextEl: ".custom-next",
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1.2, spaceBetween: 20 },
              1024: { slidesPerView: 1.3, spaceBetween: 30 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#1A202C] rounded-2xl p-8 shadow-lg flex flex-col lg:flex-row items-center lg:items-center gap-6 max-w-full">
                  {/* Client Info */}
                  <div className="flex flex-col items-center lg:items-start text-center  lg:text-left">
                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-52 lg:h-52 rounded-3xl overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                   <div className="w-full">
                   <h4 className="text-lg md:text-xl text-center font-semibold mt-4">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm md:text-base text-center text-gray-400">
                      {testimonial.role}
                    </p>
                   </div>
                  </div>
                  {/* Testimonial Message */}
                  <div className="text-gray-300 leading-relaxed text-base md:text-lg lg:text-2xl">
                    {testimonial.message}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="relative z-50 top-[-20px] -translate-y-1/2 flex justify-between w-full px-6">
            <button
              className="custom-prev text-white text-3xl md:text-4xl"
              aria-label="Previous"
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className="custom-next text-white text-3xl md:text-4xl"
              aria-label="Next"
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
