import React from "react";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/space-bg.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore the Universe</h1>
      <p className="mb-6 text-lg">Join us on an adventure through space</p>
      <button className="bg-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-500 transition">
        Get Started
      </button>
    </div>
  );
}

export default Home;