const Footer = () => {
  return (
    <footer id="footer" className="bg-[#8B5A2B] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold uppercase tracking-wide">
            STILL YOU NEED OUR SUPPORT?
          </h2>
          <p className="italic text-gray-200">
            Don’t wait, make a smart & logical quote here. It’s pretty easy
          </p>
        </div>

        {/* Email Subscription */}
        <div className="flex justify-center mt-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#C3833D] text-white placeholder-white px-6 py-3 rounded-full outline-none w-80"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              ➜
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-500 my-8" />

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 text-center md:text-left gap-6">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold">Contact us</h3>
            <p>Email: kopi_mantan@gmail.com</p>
            <p>Phone: +6282266520425</p>
            <p>Address: Jl Laksada Adi Sucipto, Lt 1 -3, Gedung Asia Pasific</p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-200">
              Prorate clients and leisure travelers have been relying on Ground
              Link for dependable, safe, and professional chauffeur car service
              in major cities across the world.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="bg-[#C3833D] p-3 rounded-full">⏳</div>
              <div>
                <p>Mon - Sat (8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-500 my-8" />

        {/* Bottom Links & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-200">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Coffee Menu
            </a>
            <a href="#" className="hover:text-white">
              Coffee For Home
            </a>
            <a href="#" className="hover:text-white">
              Our News
            </a>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full"
            >
              📷
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full"
            >
              📘
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
