import HeroImg from "../assets/Group.png"

export default function Hero() {
  return (
    <div className="bg-[#1a2238] text-white min-h-screen flex items-center justify-between px-16">
      {/* Left Section */}
      <div className="max-w-xl space-y-4">
  <span className=" flex items-center font-bold uppercase text-sm tracking-widest whitespace-nowrap">
      <span className="text-blue-500 mr-2">■ </span>
      The Simplest Way to Manage Mental Health Appointments
      </span>

        <h1 className="text-9xl sm:text-7xl font-bold text-nowrap leading-tight tracking-tight">
          Make your life <br />
          easier with our <br />
          <span className="text-semibold">
          Serene <br />
            <span className="text-blue-500 text-semibold">MINDS
              </span>
          </span>
          
        </h1>
        <p className="text-gray-300 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo
          voluptate iure ipsum molestias repudiandae perspiciatis nostrum praesentium, unde pariatur
          tempora magni rem. Necessitatibus facilis obcaecati ratione.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-medium shadow-lg">
            Let&apos;s get started →
          </button>
          <button className="text-white font-medium hover:underline">
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
