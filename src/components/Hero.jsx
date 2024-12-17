import HeroImg from "../assets/Group.png"

export default function Hero() {
  return (
    <div className=" text-black min-h-screen flex items-center justify-between px-4 lg:px-16">
      {/* Left Section */}
      <div className="max-w-xl space-y-4">
        <span className="flex items-center font-bold uppercase text-sm tracking-widest whitespace-nowrap">
          <span className="text-blue-500 mr-2">■ </span>
          The Simplest Way to Manage Mental Health Appointments
        </span>

        <h1 className="text-6xl font-bold text-nowrap leading-tight tracking-tight">
        Build. Manage. Grow.
        <br />
          <span className="font-normal">
            Serene <br />
            </span>
            <span className="text-blue-500 text-semibold">MINDS</span>
          
        </h1>

        <p className="text-gray-500 text-lg">
        Streamline your practice with Serene MINDS, the all-in-one platform for mental
        health professionals. Effortlessly manage appointments, track client progress,
        and secure payments—all in one place. Start your practice online, expand your
        reach, and connect with a thriving community of peers.
        </p>
        <p className="text-gray-500 text-lg">
        Take your practice to the next level with tools designed to empower you.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-medium shadow-lg">
            Let&apos;s get started →
          </button>
          <button className=" font-medium hover:underline">
            Features →
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block relative w-1/2">
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Add your image here */}
          <img
            src={HeroImg}
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
