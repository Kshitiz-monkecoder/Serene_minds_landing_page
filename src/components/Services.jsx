import ServiceImg1 from "../assets/undraw_Booking_re_gw4j (1)-Photoroom.png"
import ServiceImg2 from "../assets/undraw_website_5bo8-Photoroom.png"
import ServiceImg3 from "../assets/undraw_Transfer_money_re_6o1h-Photoroom.png"
import ServiceImg4 from "../assets/undraw_Push_notifications_re_t84m-Photoroom.png"
import ServiceImg5 from "../assets/undraw_Profile_data_re_v81r-Photoroom.png";
import ServiceImg6 from "../assets/undraw_Progress_tracking_re_ulfg-Photoroom.png";
import ServiceImg7 from "../assets/undraw_online_connection_6778-Photoroom.png";

const servicesData = [
  {
    id: 1,
    photo: ServiceImg1, // Replace with actual image path
    heading: "Appointment Booking",
    subHeading:
      "Manage your schedule effortlessly with an intuitive booking system tailored for mental health professionals.",
  },
  {
    id: 2,
    photo: ServiceImg2,
    heading: "Personal Website",
    subHeading:
      "Establish your online presence with a customizable website to showcase your expertise and services.",
  },
  {
    id: 3,
    photo: ServiceImg3,
    heading: "Secure Payments",
    subHeading:
      "Hassle-free payment solutions with industry-standard security to ensure smooth transactions.",
  },
  {
    id: 4,
    photo: ServiceImg4,
    heading: "In-app Chats",
    subHeading:
      "Communicate securely with clients in real-time, offering seamless support whenever they need it.",
  },
  {
    id: 5,
    photo: ServiceImg5,
    heading: "Clients' Profiles",
    subHeading:
      "Maintain comprehensive, organized client logs for easy access and management.",
  },
  {
    id: 6,
    photo: ServiceImg6,
    heading: "Clients' Progress Tracking Tools",
    subHeading:
      "Monitor client progress with AI-driven analytics, helping you deliver impactful care.",
  },
  {
    id: 7,
    photo : ServiceImg7,
    heading: "Connect with Other Mental Health Professionals",
    subHeading: "Join a thriving community to share insights, collaborate on cases, and grow your network.",
  },
];

const Services = () => {
  return (
    <div className="text-black min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold mb-12">
          Features
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-blue-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
            >
              <img
                src={service.photo}
                alt={service.heading}
                className="w-44  mx-auto mb-4"
              />
              <h2 className="text-black font-semibold text-lg mb-2">
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
