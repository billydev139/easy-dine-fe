
import Images from "../../assets/images";

const testimonials = [
  {
    id: 1,
    message:
      "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you",
    name: "Veona Watson",
    handle: "@hi.veona",
    image: Images.user, // Replace with actual image URL
  },
  {
    id: 2,
    message:
      "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you",
    name: "Thais Carballal",
    handle: "@myself.thais",
    image: Images.user, // Replace with actual image URL
  },
  {
    id: 3,
    message:
      "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you",
    name: "Veona Watson",
    handle: "@me.veona",
    image: Images.user, // Replace with actual image URL
  },
];

const Testimonials = () => {
  return (
    <div className="bg-primaryBlack text-white py-12 px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-[38px] font-semibold text-center mb-4">
          What client say about us
        </h2>
        <p className="text-center text-white mb-8">
          Customer testimonial
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-black rounded-lg shadow-lg p-6"
            >
              <p className="italic mb-4">{testimonial.message}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
