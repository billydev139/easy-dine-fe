import Images from "../../assets/images";
import DefaultLayout from "../../layouts/defaultLayout";
import HeroSection from "../homePage/heroSection";
import NewsletterSection from "./newsLetter";
import TeamSection from "./ourTeam";

const AboutUs = () => {
    const sections = [
        {
          title: 'Who We Are',
          description:
            'EasyDine is a cutting-edge restaurant management platform designed to simplify and enhance every aspect of your operations. From seamless order management to advanced analytics, we’re dedicated to helping restaurants thrive in a competitive market.',
          image: Images.who,
        },
        {
          title: 'Our Mission',
          description:
            'To simplify restaurant management and elevate the dining experience with intelligent, user-friendly solutions. We believe in enabling restaurants to focus on what they do best: creating memorable dining experiences while leaving the management complexities to us.',
          image: Images.mission,
        },
        {
          title: 'Our Vision',
          description:
            'To transform the restaurant industry by integrating cutting-edge technology into everyday operations.',
          image: Images.vision,
        },
      ];
  return (
    <DefaultLayout>
      <HeroSection
        heading="Who we are and what we do"
        para="From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom."
      />
      <div className="bg-primaryBlack text-white py-24 px-4 md:px-16">
       <div className=" container mx-auto ">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center gap-8 mb-12`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg leading-relaxed">{section.description}</p>
          </div>
        </div>
      ))}
      <TeamSection/>
      <NewsletterSection/>
    </div>
    </div>
    </DefaultLayout>
  );
};
export default AboutUs;
