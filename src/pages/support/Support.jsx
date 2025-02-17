import React, { useState } from "react";
import DefaultLayout from "../../layouts/defaultLayout";
import RegisterVideo from "../../assets/video/1192-143842659.mp4";
import ChatIcon from "../../assets/icons/chat";
import EmailIcon from "../../assets/icons/emails";
import PhoneIcon from "../../assets/icons/call";

const SupportFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "How does QR code integration work?",
    "Can I switch between packages?",
    "Does Easy Dine support?",
    "How is my deposit handled?",
    "How Customized Menu Work?",
  ];

  const videoTutorials = [
    {
      title: "The Future of Dining.",
      thumbnail: "https://via.placeholder.com/300",
      videoUrl: RegisterVideo,
    },
    {
      title: "10 Must-Know Tips",
      thumbnail: "https://via.placeholder.com/300",
      videoUrl: RegisterVideo,
    },
    {
      title: "10 Must-Know Tips",
      thumbnail: "https://via.placeholder.com/300",
      videoUrl: RegisterVideo,
    },
    {
      title: "The Future of Dining.",
      thumbnail: "https://via.placeholder.com/300",
      videoUrl: RegisterVideo,
    },
    {
      title: "10 Must-Know Tips",
      thumbnail: "https://via.placeholder.com/300",
      videoUrl: RegisterVideo,
    },
    {
      title: "10 Must-Know Tips",
      thumbnail: "https://via.placeholder.com/300",
      videoUrl: RegisterVideo,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <DefaultLayout heading="Blog Posts">
      <div className="bg-black-900 text-white min-h-screen p-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Categories</h2>
          <p className="text-gray-400">
            Pricing built for businesses of all sizes
          </p>
        </div>

        {/* <div className="flex justify-center gap-6 mb-12 ">
          {[
            {
              icon: <EmailIcon/>,
              title: "Live Chat (AI & WhatsApp)",
              desc: "Get quick answers from our AI-powered assistant or connect with a support agent on WhatsApp.",
              btn: "Start Live Chat",
            },
            {
              icon: "",
              title: "Email Support",
              desc: "Get quick answers from our AI-powered assistant or connect with a support agent on WhatsApp.",
              btn: "Send an Email",
            },
            {
              icon: "",
              title: "Phone Support",
              desc: "Get quick answers from our AI-powered assistant or connect with a support agent on WhatsApp.",
              btn: "Call Now",
            },
          ].map((item, index) => (
            <div
              key={index}
               className="bg-[#2F2F2F] p-6 rounded-lg shadow-lg w-1/4 text-center h-auto min-h-[372px] flex flex-col justify-between"
            >
            <div className="w-8 h-8 mx-auto mb-4 text-white">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                {item.btn}
              </button>
            </div>
          ))}
        </div> */}

<div className="flex justify-center gap-6 mb-12">
  {[
    {
      icon: <ChatIcon />,
      title: "Live Chat (AI & WhatsApp)",
      desc: "Get quick answers from our AI-powered assistant or connect with a support agent on WhatsApp.",
      btn: "Start Live Chat",
    },
    {
      icon: <EmailIcon />,
      title: "Email Support",
      desc: "Get quick answers from our AI-powered assistant or connect with a support agent on WhatsApp.",
      btn: "Send an Email",
    },
    {
      icon: <PhoneIcon/>,
      title: "Phone Support",
      desc: "Get quick answers from our AI-powered assistant or connect with a support agent on WhatsApp.",
      btn: "Call Now",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-[#2F2F2F] p-6 rounded-lg shadow-lg w-[377px] h-[372px] text-center flex flex-col items-center justify-between"
    >
      <div className="text-white flex justify-center items-center mb-4 pt-6">{item.icon}</div>
      <h3 className="text-2xl text-white font-semibold pt-6">{item.title}</h3>
      <p className="text-white text-base px-4 pt-2">{item.desc}</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-auto">
        {item.btn}
      </button>
    </div>
  ))}
</div>


        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Most Important Questions</h2>
          <div className="space-y-4">
            {faqs.map((question, index) => (
              <div
                key={index}
                className="bg-[#2F2F2F] p-4 rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-white">{question}</p>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-400 mt-2 text-sm">
                    This is a placeholder answer for the question.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
          <div className="grid grid-cols-3 gap-6">
            {videoTutorials.map((video, index) => (
              <div
                key={index}
                className="relative bg-gray-800  rounded-lg shadow-lg"
              >
                <div className="w-full h-40 relative">
                  <video
                    className="absolute inset-0 w-full h-full object-cover rounded"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <h3 className="absolute bottom-0 left-0 w-full text-left text-lg font-semibold bg-opacity-50 text-white pl-4">
                    {video.title}
                  </h3>
                </div>
                <h6 className="font-poppins text-[#A3A3A3] font-normal text-[10px] leading-[15px] tracking-[0px] text-left pl-4">
                  cost to build an app? It’s an urgent question on any tech
                  project.
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SupportFAQ;
