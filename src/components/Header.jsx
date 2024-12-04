
const Header = () => {
  return (
    <header className="bg-[#2d3748] border-b-2 border-gray-800 shadow-xl p-4">
      <div className="container font-poppins mx-auto flex items-center justify-between">
        {/* Center Links */}
        <nav className="absolute left-1/2 text-sm  transform -translate-x-1/2 uppercase font-semibold flex space-x-6 text-white">
          <a href="#home" className="hover:text-blue-500 hover:border-b-2 border-blue-500">Home</a>
          <a href="#services" className="hover:text-blue-500 hover:border-b-2 border-blue-500">Services</a>
          <a href="#about" className="hover:text-blue-500 hover:border-b-2 border-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500 hover:border-b-2 border-blue-500">Contact</a>
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
