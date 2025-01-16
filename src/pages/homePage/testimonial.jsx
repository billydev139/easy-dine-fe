import { motion } from "framer-motion";
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
    <div className="bg-gradient-to-b from-[#0f172a] to-[#111621] text-white py-16 px-6">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[38px] font-extrabold text-center mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12"
        >
          Real testimonials from our happy customers
        </motion.p>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black rounded-lg shadow-xl p-6 hover:scale-105 transform transition duration-300"
            >
              {/* Quote Icons */}
              <div className="relative text-primaryBlack mb-4">
                <span className="text-[50px] absolute -top-6 left-0 text-gray opacity-50">
                  &ldquo;
                </span>
                <p className="italic text-gray-600 pl-8 pr-8">
                  {testimonial.message}
                </p>
                <span className="text-[50px] absolute -bottom-6 right-0 text-gray opacity-50">
                  &rdquo;
                </span>
              </div>
              {/* Client Info */}
              <div className="flex items-center space-x-4 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-primaryBlack"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
