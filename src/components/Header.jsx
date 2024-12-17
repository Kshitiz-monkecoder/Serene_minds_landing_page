
const Header = () => {
  return (
    <header className=" border-b-2 shadow-lg p-4">
      <div className="container font-poppins mx-auto flex items-center justify-between">
        {/* Center Links */}
        <nav className="absolute left-1/2 text-sm  transform -translate-x-1/2 uppercase font-semibold flex space-x-6 text-[#2d3748]">
          <a href="#Features" className="hover:text-blue-500 hover:border-b-2 border-blue-500">Features</a>
          <a href="#Community" className="hover:text-blue-500 hover:border-b-2 border-blue-500">Community</a>
          <a href="#Testimonials" className="hover:text-blue-500 hover:border-b-2 border-blue-500">Testimonials</a>
          <a href="#Pricing" className="hover:text-blue-500 hover:border-b-2 border-blue-500">Contact</a>
        </nav>

        {/* Book Appointment Button */}
        <div className="ml-auto">
        <button className="bg-blue-500 text-sm uppercase hover:bg-blue-600 text-white py-3 px-6 rounded font-medium shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
