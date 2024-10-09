import React from "react";

const CoverSection = () => {
  return (
    <div className="bg-blue-500 py-12 px-4 lg:px-16 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        {/* Brand name  */}
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-gray-900">
            CEO Electronic Store, Lagos
          </h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis
          </p>
          <div className="space-x-4 mt-6">
            <button className="bg-gray-800 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300">
              Explore More
            </button>
          </div>
        </div>

        {/* cover Image */}
        <div className="relative">
          <img
            src="ele.png"
            alt="Decorative Pillow"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CoverSection;
