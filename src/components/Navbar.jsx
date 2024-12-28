import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'About', path: '/about' },
    { name: 'Photography', path: '/photography' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav>
      {/* Logo Section */}
      <div className="bg-white w-full py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="https://s3-alpha-sig.figma.com/img/8a67/77bb/ae6c3074d7d351e9dc9c9528fd044512?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MLkDYWyV4rasS05hjiglZFK4QfAiRU~U9CRMeS9NF1oWbpl5ONZ086lEfoyIUsJYuBhrqUTj28GQVYsudaDdAEsl5fgmUzvLZkU-VqV4pUOvWohh~PRmgN~OEmZfLMARNEzO4lt5zKUfhKDeZ~pj5IuS1S6VQxO4~3LaEO3~mY4DbaugY~RWj6BthGCfTxG5Oi~tjIa5AXBZpmJzq~-EVO45MvyKAMSVOg2y8h4X9pZ3RoyUCDkBgTPx6ydow7zdb0JLwEw-MAQjw7Bqiu8UEBoh-WbOsk-dFrDK1xI56Pq~U6-UjjwQMD0IkiC7L156-Z4bgn4bP4BAhTcJh6hVTQ__"
              alt="Sham Studio Logo"
              className="h-16 md:h-20"
            />
          </div>
        </div>
      </div>

      {/* Main Navigation - Now Sticky */}
      <div className={`bg-black shadow-lg w-full ${isSticky ? 'fixed top-0 left-0 z-50 animate-slideDown' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Social Icons - Left Side */}
            <div className="hidden md:flex space-x-4">
              {['facebook', 'whatsapp', 'instagram', 'youtube'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover="hover"
                  variants={iconVariants}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  {platform === 'facebook' && <FaFacebook size={20} />}
                  {platform === 'whatsapp' && <FaWhatsapp size={20} />}
                  {platform === 'instagram' && <FaInstagram size={20} />}
                  {platform === 'youtube' && <FaYoutube size={20} />}
                </motion.a>
              ))}
            </div>

            {/* Mobile Header with Menu and Cart */}
            <div className="md:hidden flex justify-between items-center w-full">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
              
              <Link to="/cart" className="text-gray-300 hover:text-white">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <FaShoppingCart size={24} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <Link
                    to={item.path}
                    className={`text-gray-300 hover:text-white transition duration-300 ${
                      location.pathname === item.path ? 'text-white' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Link to="/cart" className="text-gray-300 hover:text-white">
                  <FaShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="md:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 10 }}
                      className="block"
                    >
                      <Link
                        to={item.path}
                        className={`block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition duration-300 ${
                          location.pathname === item.path ? 'bg-gray-800 text-white' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="flex space-x-4 px-3 py-2">
                    {['facebook', 'instagram', 'twitter'].map((platform) => (
                      <motion.a
                        key={platform}
                        href="#"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-gray-300 hover:text-white transition duration-300"
                      >
                        {platform === 'facebook' && <FaFacebook size={20} />}
                        {platform === 'instagram' && <FaInstagram size={20} />}
                        {platform === 'twitter' && <FaTwitter size={20} />}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {isSticky && <div className="h-16" />}
    </nav>
  );
};

export default Navbar;