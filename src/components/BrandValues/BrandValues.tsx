import Image from "next/image";
import React from "react";
import brandImage1 from "/public/assets/image/brandValue/1.jpg"; // Adjust the path as necessary
import brandImage2 from "/public/assets/image/brandValue/2.jpg"; // Adjust the path as necessary
import brandImage3 from "/public/assets/image/brandValue/3.jpg"; // Adjust the path as necessary
import Link from "next/link";

const BrandValues = () => {
  return (
    <div className="bg-red-100 p-4 w-full">
      {" "}
      <div className="w-full">
        {" "}
        <div className="relative w-full">
          <div className="flex justify-between gap-5 w-full ">
            {/* Right side image */}
            <div className="flex flex-col gap-5 w-1/2 md:mt-5">
              <div className="w-5/6 ml-auto">
                <Image
                  src={brandImage1}
                  alt="Image 1"
                  width={800}
                  height={500}
                  className="w-full h-auto "
                />
              </div>
              <div className="w-full">
                <Image
                  src={brandImage2}
                  alt="Image 2"
                  width={800}
                  height={500}
                  className="w-full h-auto "
                />
              </div>
            </div>
            {/* Right side image */}
            <div className="w-1/2 md:-mt-20 items-center flex">
              <Image
                src={brandImage3}
                alt="Image 3"
                width={600}
                height={500}
                className="w-full h-1/2"
              />
            </div>
          </div>

          
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="bg-black p-5 text-center max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-white">Brand Values</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                autem eius eligendi aperiam, assumenda dolores laborum et.
              </p>
              <p className="my-4 text-white">
                Image from{" "}
                <Link href="#" className="underline">
                  Freepik
                </Link>
              </p>
              <button className="bg-white text-black py-2 px-5 rounded-md text-xs border-2 border-white hover:bg-transparent hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandValues;
