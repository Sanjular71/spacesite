import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
      style={{ backgroundImage: "url('/space-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-8 text-center"
      >
        CONTACT US
      </motion.h1>

      {/* Form */}
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col space-y-4 w-80 bg-black bg-opacity-70 p-6 rounded-lg border border-gray-700"
      >
        <input type="text" placeholder="Your Name" className="p-3 rounded-lg text-black" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-lg text-black" />
        <textarea placeholder="Your Message" className="p-3 rounded-lg text-black h-32"></textarea>
        <button className="bg-cyan-400 text-black font-bold py-2 rounded-lg hover:bg-cyan-500 transition">
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;