import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        style={{ backgroundImage: "url('./bg.jpg')" }}
        className="br-cover w-2/4 h-[calc(100vh-60px)] rounded-lg flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-6xl py-3 bg-opacity-80 font-bold text-white rounded-lg font-Anek">
            Welcome
          </h2>
          <button className="p-3 hover:bg-blue-800 rounded-lg mt-2 bg-blue-600 text-white text-3xl font-bold shadow-2xl">
            Login / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
