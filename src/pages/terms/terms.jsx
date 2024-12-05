import DefaultLayout from "../../layouts/defaultLayout";



const TermsofServices = () => {
    const termsData = [
        {
          title: "Introduction",
          content:
            "These Terms and Conditions govern your use of EasyDine. By accessing the platform, you agree to these terms. If you do not agree, please stop using EasyDine immediately.",
        },
        {
          title: "User Responsibilities",
          bullets: [
            "You must provide accurate and complete information during registration.",
            "You are responsible for maintaining the confidentiality of your account credentials.",
            "You agree to notify EasyDine immediately about unauthorized access.",
          ],
        },
        {
          title: "Acceptable Use",
          bullets: [
            "By using EasyDine, you agree not to engage in fraudulent or harmful activities.",
            "You agree not to violate any applicable laws, rules, or terms of service.",
            "You agree not to harm others through intentional misuse, including uploading malicious code.",
          ],
        },
        {
          title: "Services and Payments",
          bullets: [
            "EasyDine offers a range of services, including dining reservations, meal plans, and delivery options.",
            "Some features require subscription or purchase. Payments are handled as available at the time of booking.",
            "Refunds, if applicable, are governed by EasyDine's refund policy.",
          ],
        },
        {
          title: "Intellectual Property",
          content:
            "All content, including designs, logos, and software, is the property of EasyDine and is protected by intellectual property laws. Using this property without authorization may result in legal action.",
        },
        {
          title: "Data Protection and Privacy",
          content:
            "EasyDine respects user privacy and complies with applicable data protection laws. For details on how we collect and use your data, please visit our Privacy Policy.",
        },
        {
          title: "Limitation of Liability",
          bullets: [
            "EasyDine is not liable for loss or damage resulting from your use or inability to use the platform.",
            "We are not responsible for unauthorized access to your account.",
            "Third-party services are not endorsed or managed by EasyDine.",
          ],
        },
        {
          title: "Account Termination",
          content:
            "EasyDine reserves the right to suspend or terminate your account if you violate these Terms and Conditions or engage in activities that harm the platform or its users.",
        },
        {
          title: "Modifications to Terms",
          content:
            "EasyDine may revise these Terms and Conditions at any time. Any updates will be communicated to users and reflected on the platform. Continued use of EasyDine constitutes acceptance of the updated terms.",
        },
        {
          title: "Governing Law",
          content:
            "These Terms and Conditions are governed by the laws of your jurisdiction. Any disputes arising from these terms will be resolved in accordance with these laws.",
        },
        {
          title: "Contact Us",
          content:"For questions about these Terms and Conditions, you can contact us at:",
          bullets: [
            "Email: support@easydine.com",
            "Phone: +1 800-123-4567",
          ],
        },
      ];
      
  return (
    <DefaultLayout heading={"Terms of service"}>
    <div className="container mx-auto p-6 px-12 bg-primaryBlack">
      <h2 className="text-[50px] font-extrabold mb-4 text-white text-center">
      Terms and Conditions
      </h2>
      {/* <p className="mb-8 text-lg text-[#696969]">
        Are you familiar with our job portal? Sign up or log in today to find
        the best job opportunities on our platform! If you have any questions,
        feel free to check out our FAQ for solutions to your concerns.
      </p> */}

      <div>
        {termsData.map((section, index) => (
          <div key={index} className="mb-8 text-white">
            <h2 className="lg:text-[40px] text-[16px] font-semibold mb-2">{section.title}</h2>
            <p className="text-white lg:text-[16px] text-xs leading-6">{section.content}</p>
            {section.bullets && (
              <ul className="list-disc ml-6 mt-2 ">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    {bullet.includes("Email:") ? (
                      <>
                        <strong>Email:</strong> {bullet.replace("Email:", "")}
                      </>
                    ) : bullet.includes("Address:") ? (
                      <>
                        <strong>Address:</strong> {bullet.replace("Address:", "")}
                      </>
                    ) : (
                      bullet
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </DefaultLayout>
  );
};

export default TermsofServices;
