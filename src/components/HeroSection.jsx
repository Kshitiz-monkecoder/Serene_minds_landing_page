import HeroSectionImg from "../assets/HeroSection.jpg"
import DoctorImg from "../assets/DoctorImg.png"
import { FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import Instagram_icon from "../assets/Instagram_icon.png"

const HeroSection = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center pb-32 justify-center"
      style={{
        backgroundImage: `url(${HeroSectionImg})`, // Replace with your image URL
      }}
    >
      {/* Left Section - Profile Photo */}
      <div className="ml-32 flex-shrink-0">
        <img
          src={DoctorImg} // Replace with your profile photo URL
          alt="Profile"
          className="w-60 h-60 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
        />
      </div>

      {/* Right Section - Introduction */}
      <div className="ml-20 text-black space-y-4">
        <p className="text-xl md:text-2xl font-light">Hi, I am</p>
        <h1 className="text-4xl md:text-6xl font-normal">Dr. Anshuman Mishra</h1>
        <p className="text-4xl md:text-6xl font-normal">Clinical Psychologist</p>

        {/* Social Media Icons */}
        
        <div className="flex justify-evenly">
          {/* WhatsApp */}
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white p-3 rounded-full "
          >
             <FaSquareWhatsapp className="text-green-500 text-8xl"/>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white "
          >
            <FaLinkedin className="text-blue-500 mt-3 text-8xl"/> {/* Font Awesome Icon */}
          </a>
          {/* Second WhatsApp */}
          <a
            href="https://wa.me/your-other-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3"
          >
            <img src={Instagram_icon} className="w-24 h-24" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
