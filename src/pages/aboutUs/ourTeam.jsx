import Images from "../../assets/images";

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Reef Parker',
      role: 'Carol Management',
      image: Images.user1,
    },
    {
      name: 'Reef Parker',
      role: 'Carol Management',
      image: Images.user1,
    },
    {
      name: 'Reef Parker',
      role: 'Carol Management',
      image: Images.user1,
    },
  ];

  return (
    <div className="bg-primaryBlack text-white py-12  ">
      <h2 className="text-2xl md:text-[38px] font-bold text-center mb-8">
        Meet our teams at your service
      </h2>
      <div className="grid grid-cols-3 justify-center gap-8  ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg py-6 px-12 mt-28"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-[10px] w-full  object-cover -mt-24"
            />
            <div className="text-center mt-12">
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-[#8C959F] mt-4">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
