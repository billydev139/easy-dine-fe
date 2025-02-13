import DefaultLayout from "../../layouts/defaultLayout";
import { useState } from "react";

const Faqs = () => {
  const faqsData = [
    {
      title: "How does QR code integration work?",
      content:
      "Customers do not need to download an app or register; they can scan a QR code to directly  access the web app, browse the menu, place orders, and make payments.",
    },
    {
      title: "Which payment methods does EasyDine support?",
      content:
      "Customers do not need to download an app or register; they can scan a QR code to directly  access the web app, browse the menu, place orders, and make payments.",
  
    },
    {
      title: "Can I switch between packages?",
      content:
      "Customers do not need to download an app or register; they can scan a QR code to directly  access the web app, browse the menu, place orders, and make payments.",
    },
    {
      title: "Does EasyDine o er support?",
      content:
      "Customers do not need to download an app or register; they can scan a QR code to directly  access the web app, browse the menu, place orders, and make payments.",
    },
    {
      title: "How is my deposit handled?",
      content:
      "Customers do not need to download an app or register; they can scan a QR code to directly  access the web app, browse the menu, place orders, and make payments.",
    },
    {
      title: "How Customized Menu Work?",
      content:
      "Customers do not need to download an app or register; they can scan a QR code to directly  access the web app, browse the menu, place orders, and make payments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <DefaultLayout heading="Terms of Service">
      <div className="container mx-auto p-6 px-4 lg:px-12 bg-primaryBlack text-white">
        <h2 className="text-[32px] lg:text-[50px] font-extrabold mb-6 text-center">
          FAQs
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqsData.map((section, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-4"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-lg lg:text-sm 
                   rounded-[16px] px-4 py-2 text-white"
              >
                {section.title}
                <span className="text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-2 text-sm lg:text-base text-gray-300">
                  {section.content &&
                    <p className="text-[#707070]">{section.content}</p>
                   }
                  {section.bullets && (
                    <ul className="list-disc ml-6 mt-2">
                      {section.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Faqs;

