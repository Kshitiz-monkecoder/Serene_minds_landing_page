import DoctorImg from "../assets/DoctorImg.png"

const About = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section - 2/5 */}
      <div className="w-2/5 bg-white flex flex-col items-center justify-center p-8 border-r border-gray-300">
        {/* Photo Icon */}
          <img
          src={DoctorImg} // Replace with your profile photo URL
          alt="Profile"
          className="w-80 h-80 rounded-3xl object-cover border-4 border-white shadow-xl"
        />

        {/* Name */}
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">Dr. John Doe</h2>

        {/* Subheading */}
        <p className="text-gray-800 text-3xl">Clinical Psychologist</p>
        <p className="text-gray-400 text-base">5+ years experience</p>
      </div>

      {/* Right Section - 5/5 */}
      <div className="w-3/5 py-10 justify-center flex flex-col px-16">
        {/* About Section */}
        <h1 className="text-4xl font-normal text-gray-800">About</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-500">Bio</h2>
        <p className="mt-2 text-xl text-gray-600">
          John Doe is a passionate software engineer with a decade of experience in building robust and scalable web applications. He enjoys solving challenging problems and learning new technologies to stay at the cutting edge of the industry.
        </p>

        {/* Education Section */}
        <h2 className="mt-10 text-2xl font-semibold text-gray-500">Education</h2>
        <p className="mt-2 text-xl text-gray-600">
          John holds a Masters degree in Computer Science from XYZ University, where he specialized in artificial intelligence and machine learning. His academic background is complemented by several certifications in cloud computing and web development.
        </p>
      </div>
    </div>
  );
};

export default About;
