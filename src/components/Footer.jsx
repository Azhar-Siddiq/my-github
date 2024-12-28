import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white/90">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sham Studio</h3>
            <p className="text-gray-300">
              Professional photography services for all your special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/product" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone /> <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope /> <span>info@shamstudio.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt /> <span>123 Photo Street, City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Sham Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;