import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShoppingCart, FaClock } from 'react-icons/fa';

const Homepage = () => {
  const sliderImages = [
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://img.freepik.com/free-vector/spotlights-realistic-composition-with-cyclorama-studio-spot-lights-hanging-reel-mounted-stands_1284-31591.jpg?t=st=1735046083~exp=1735049683~hmac=b84f8d4997d43e4a20ae2d7b62aa4d668313c6cbba002539f00817357989c575&w=740',
    'https://www.markhayesphotography.com/wp-content/uploads/2019/11/studio-1340521_960_720.jpg'
  ];

  const customers = [
    {
      id: 1,
      name: "Gold Luna",
      image: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Rosh.com.pk",
      image: "/api/placeholder/200/200",
    },
    {
      id: 3,
      name: "Scriptsense Technologies",
      image: "/api/placeholder/200/200",
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Slider Section - Adjusted height for mobile */}
      <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
        {sliderImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
      </div>

      {/* Founder Section - Improved padding and text size for mobile */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="px-4 py-8 md:py-16 bg-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-white">Founder</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Shahmir Imam</h1>
          <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6 px-2 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="flex items-center mx-auto bg-gray-800 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm md:text-base">
            Read More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </motion.section>

      {/* Co-Founder Section - Consistent mobile styling */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="px-4 py-8 md:py-16 bg-black/90"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-white">Co-Founder</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Asad Ahmed</h1>
          <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 px-2 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="flex items-center mx-auto bg-gray-800 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm md:text-base">
            Read More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </motion.section>

      {/* Customers Section - Improved grid for mobile */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-black px-4 py-8 md:py-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">Our Customers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {customers.map((customer) => (
            <div key={customer.id} className="text-center py-6 md:py-10 bg-gray-950 rounded-md">
              <h3 className="font-semibold text-base md:text-lg text-white/80">{customer.name}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Product Section - Responsive layout and spacing */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="px-4 py-8 md:py-16 bg-black/90"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">Our Product</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="w-full md:w-1/2 max-w-lg">
            <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left text-white">Shahmir Fragrance: Fragrance for Classy</h3>
              Indulge in the sophisticated allure of Shahmir Fragrance, where timeless elegance meets unparalleled craftsmanship. Designed for those who exude grace and command attention, our scents redefine luxury, capturing the essence of class in every drop. Experience a fragrance that transcends the ordinary—a statement of refinement, an ode to the extraordinary. With Shahmir Fragrance, elevate your aura and let your presence linger, unmatched and unforgettable.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="flex items-center bg-gray-800 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm md:text-base">
                Buy Now <FaShoppingCart className="ml-2" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-lg mt-6 md:mt-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/daab/fef7/85559250c082e942272da999ebf5f158?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVY-2fWxZzp74mlv~c3gUOfH5XhI2Mnbc8OhlBU3Z5p7my72hXaDhImoFgXP~p6LvF3Q6n6kkn5Jq4TulHXx2~JoYWyE88ht0~t4TaGShf0~eqTniFLjoq7SbpwHp5R~y7CHu7n7zseBaccDVmtq7Zc8~U4HyE7uK1Rh9IDIJ5sK-aDeWCBN~wp2KAH4GEndzb3Cam5sjGTUwoiqRo~0SylPYeIAzqdsd5NqFgKpxJCZHmv7kUFLdRAOwWS4g~~TYjzWwqFIUfdOk7oKaH3CliML4NvyQqo6B7ksadChfWKoMPPeV2o3TeuhjJpUlvyzbjlw80p5uijx8hZx3lPZnQ__"
              alt="product"
              className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </motion.section>

      {/* Upcoming Products Section - Responsive spacing and layout */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-black px-4 py-8 md:py-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">Upcoming Products</h2>
        <div className="space-y-12 md:space-y-24">
          {/* Upcoming Product 1 */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="w-full md:w-1/2 max-w-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left text-white">Menswear Kurtas: The Perfect Blend of Style and Tradition</h3>
              <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8 text-center md:text-left">
                Discover the perfect balance of tradition and style with our menswear kurtas. Designed for comfort and elegance, each piece combines timeless craftsmanship with a modern touch, making it ideal for every occasion.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="flex items-center bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm md:text-base">
                  Stay Tuned <FaClock className="ml-2" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mt-6 md:mt-0">
              <img
                src="https://s3-alpha-sig.figma.com/img/e626/7808/af6392113722bea2b70124c1545a75ab?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fxYHSfDzInHMOMBzdlTenQaP-c7Z2~mQpF~GX5fewwzHEDnAQSI2aIVflFLwzX7SBTsvuTVpANLh0lhWS2Kv8wwhcw-kT7r-moaLLSqJM3U2Oyt8w6AW4EEdaexwtI9jAChoWmPthH1Yh04kVSxf4vZhCvz0hPWOcKMwzbQyHZfeiH4hLGVLKbeUOsd9nupjCP9izTFHVj03cIRJIxWlI4Pku51pk5lf8CO2igLj25iXKzVx2I0SKYBTFSq3cHI~kHERRp9ZQxuMzRoTYZbGmGgPOR3KH4gyuFIyEJG5aOsfOux0pv2~Eag3GEWrK6JvfD8BeMKqHt9iakKJmaXCHg__"
                alt="upcoming-product-1"
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>

          {/* Upcoming Product 2 */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="w-full md:w-1/2 max-w-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left text-white">Ladies Clothing Collections: Blending Tradition with Modern Trends</h3>
              <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8 text-center md:text-left">
                Experience fashion where timeless tradition meets modern elegance. Our ladies' clothing collection blends rich heritage with contemporary designs, offering pieces that celebrate sophistication and style. From classic patterns to bold, modern cuts, each outfit is crafted to honor the past while embracing the present.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="flex items-center bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 text-sm md:text-base">
                  Stay Tuned <FaClock className="ml-2" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-lg mt-6 md:mt-0">
              <img
                src="https://s3-alpha-sig.figma.com/img/a982/aadc/8aedb6e6b73326067facf9c694d6aff6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEWJRM7USBhatHcPsM2JjrSfGObf0qDYwqUO91gg~lP0s37NR40HsfG4LNyGu8JEyCjpwrjvxVxX~k0Mv62V6QQNIZy~ZUxQw4i~eO0P6dRs1leA~WrNROnZxlUZ7yKQs4s4KPpPXAcegA0agrA2kcLGKHXZ5eJFx-Vyt-A4dy1iRVyGUYVWfwUnR-~rCS8la62kiejL6ZoMQY9x5MD1qmnJwyg20djDaR5D-YrgY-MuhtGpPnd3N1eBPU-kRJIjmAnuZq~wZJ9a5wFdbCJBHbxdrskClU-hb7Q-5CAyaYSf6a5zvBqPuZY0-zlKIYdNRB6mKnegzeHfMSsIsvh4dg__"
                alt="upcoming-product-2"
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;