
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-blue-500 text-white py-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">© 2024 MindCare. All rights reserved.</p>
      <div className="flex justify-center gap-6">
        <FaFacebook className="text-2xl" />
        <FaTwitter className="text-2xl" />
        <FaInstagram className="text-2xl" />
      </div>
    </div>
  </footer>
);

export default Footer;
