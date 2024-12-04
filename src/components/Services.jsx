import ServiceImg from "../assets/undraw_Services_re_hu5n-Photoroom.png"
const servicesData = [
  {
    id: 1,
    photo: ServiceImg, // Replace with actual image path
    heading: "Service 1",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem.",
  },
  {
    id: 2,
    photo: ServiceImg,
    heading: "Service 2",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Omnis error dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    photo: ServiceImg,
    heading: "Service 3",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    photo: ServiceImg,
    heading: "Service 4",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem.",
  },
  {
    id: 5,
    photo: ServiceImg,
    heading: "Service 5",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem.",
  },
  {
    id: 6,
    photo: ServiceImg,
    heading: "Service 6",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold text-white mb-12">
          Services
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
            >
              <img
                src={service.photo}
                alt={service.heading}
                className="w-44  mx-auto mb-4"
              />
              <h2 className="text-white font-semibold text-lg mb-2">
                {service.heading}
              </h2>
              <p className="text-gray-400 text-sm">{service.subHeading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
