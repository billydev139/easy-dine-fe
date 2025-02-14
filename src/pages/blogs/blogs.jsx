import DefaultLayout from "../../layouts/defaultLayout";
import Images from "../../assets/images";

const Blogs = () => {
  const data = [
    {
      id: 1,
      title: "Best Umrah Trip Packing Guide – You Must Know",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence app development costs and how to determine the final sum.",
      image: Images.blog2,
    },
    {
      id: 2,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog3,
    },
    {
      id: 3,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog4,
    },
    {
      id: 4,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog5,
    },
    {
      id: 5,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog6,
    },
    {
      id: 6,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog7,
    },
    {
      id: 7,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog8,
    },
    {
      id: 8,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog9,
    },
    {
      id: 9,
      title: "The Future of Dining: Top Hospitality Trends in 2024",
      description:
        "How much does it cost to build an app? It's an urgent question on any tech project. Check out the article to learn what factors influence ...",
      image: Images.blog10,
    },
  ];

  return (
    <DefaultLayout heading="Blog Posts">
      <div className="bg-primaryBlack text-white py-16 px-4 md:px-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-[38px] font-bold">Blog Posts</h2>
          <input
            type="text"
            placeholder="Search for blogs, topics..."
            className="w-1/3 p-2 rounded-md bg-[#2F2F2F] text-white !text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center bg-[#2F2F2F] p-2 rounded-lg mb-12 shadow-lg">
          <div className="w-full md:w-2/3 h-auto rounded-lg p-4">
            <img
              src={Images.blog1}
              alt="Best Umrah Trip Packing Guide"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/3 md:ml-6 mt-4 md:mt-0 text-center md:text-left p-4 self-start">
            <h3 className="text-xl font-bold text-[#FFFFFF]">
              Best Umrah Trip Packing Guide – You Must Know
            </h3>
            <p className="text-[#A3A3A3] text-sm mt-2">
              How much does it cost to build an app? It's an urgent question on
              any tech project. Check out the article to learn what factors
              influence app development costs and how to determine the final
              sum.
            </p>
            <a
              href="#"
              className="text-[#FFFFFF] mt-4 inline-block font-bold underline"
            >
              Continue Reading
            </a>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#2F2F2F] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img  
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#FFFFFF]">
                  {blog.title}
                </h3>
                <p className="text-[#A3A3A3] text-sm mt-2">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="text-[#FFFFFF] mt-4 inline-block font-bold underline"
                >
                  Continue Reading
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Blogs;
