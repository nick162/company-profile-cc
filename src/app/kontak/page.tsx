"use client";

import { Mail, Phone, MapPin } from "lucide-react"; // Icons for contact info

const Contact = () => {
  return (
    <section id="kontak" className="bg-[#a29e9a] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-[#3C2F2F] mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Have a question or just want to say hello? Fill out the form below or
          reach out to us directly!
        </p>

        {/* Contact Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-xl font-semibold text-[#3C2F2F] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              We’d love to hear from you! Whether it’s a question about our
              coffee, menu, or just a friendly chat—drop us a message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-[#8B5A2B]" />
                <p className="text-gray-700">contact@coffeeshop.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#8B5A2B]" />
                <p className="text-gray-700">+123 456 7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#8B5A2B]" />
                <p className="text-gray-700">123 Coffee Street, Brewtown</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#3C2F2F] mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#8B5A2B] outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#8B5A2B] outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#8B5A2B] outline-none"
                rows={4}
                required
              />
              <button
                name="btn-sbm"
                type="submit"
                className="w-full bg-[#8B5A2B] text-white py-3 rounded-md hover:bg-[#6C4F32] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
