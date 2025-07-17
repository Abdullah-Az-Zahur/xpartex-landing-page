import React from "react";
import { CiBullhorn } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { PiHeadCircuitFill } from "react-icons/pi";

const DesignEngineering = () => {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-bold text-black text-center">
          Epic design and engineering
        </h2>
        <p className="text-center text-gray-600 my-4 container mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          sapiente nisi quia vero alias ab saepe recusandae odio eos magnam?
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 my-10 container mx-auto">
        
        {/* STRATEGY */}
        <div className="text-black text-center p-5">
          <PiHeadCircuitFill className="text-black text-6xl bg-white p-2 rounded-full shadow-md  items-center justify-center mx-auto" />
          <h3 className="  py-4">STRATEGY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            aperiam dicta sequi id ut quasi repellendus asperiores, quia
            quisquam quae!
          </p>
        </div>

        {/* BRANDING */}
        <div className="text-black bg-white text-center p-5">
          <CiBullhorn className="text-white bg-orange-300 text-6xl p-2 rounded-full shadow-md  items-center justify-center mx-auto" />
          <h3 className="  py-4">BRANDING</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            aperiam dicta sequi id ut quasi repellendus asperiores, quia
            quisquam quae!
          </p>
        </div>
        {/* DEVELOPMENT */}
        <div className="text-black text-center p-5">
          <FaLaptopCode className="text-black text-6xl bg-white p-2 rounded-full shadow-md  items-center justify-center mx-auto" />
          <h3 className="  py-4">DEVELOPMENT</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            aperiam dicta sequi id ut quasi repellendus asperiores, quia
            quisquam quae!
          </p>
        </div>
        {/* WEB DESIGN */}
        <div className="text-black bg-orange-300 text-center p-5">
          <IoIosColorPalette className="text-black bg-white text-6xl p-2 rounded-full shadow-md  items-center justify-center mx-auto" />
          <h3 className="  py-4">WEB DESIGN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            aperiam dicta sequi id ut quasi repellendus asperiores, quia
            quisquam quae!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignEngineering;
