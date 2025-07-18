import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "/public/assets/image/banner/banner-1.png";
import DesignEngineering from "../DesignEngineering/DesignEngineering";

const Banner = () => {
  return (
    <div id="banner" className="pb-10">
      <section className="md:relative text-black md:py-20 container mx-auto ">
        {/*  Left Content Box */}
        <div className=" ">
          <div className="bg-slate-50 p-5 md:py-10 md:w-2/3 h-1/2 bottom-0 left-0 mt-5 md:mt-36 ">
            <h3 className="text-2xl font-bold my-4">We Create Websites</h3>
            <p className="md:w-1/2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id autem
              eius eligendi aperiam, assumenda dolores laborum et, ducimus aut
              enim, odio temporibus inventore. Rerum obcaecati itaque architecto
              eius? Adipisci, consectetur.
            </p>
            <p className="my-4">
              Image from{" "}
              <Link href="#" className="underline">
                Freepic
              </Link>
            </p>
            <button className="bg-black text-white py-2 px-5 rounded-md text-xs hover:bg-gray-400 hover:text-black transition">
              VIEW PORTFOLIO
            </button>
          </div>
          {/* Right Content Box */}
          <div className=" md:absolute md:w-1/2 h-4/6 right-0 top-0 my-10">
            <div className="md:absolute bg-amber-500 w-3/4 h-full right-0 z-0"></div>
            <div className="md:absolute bg-gray-500 w-1/2 h-4/6 z-10 left-0 top-28 justify-center"></div>
            <div className="md:absolute inset-0 z-20 -top-12 w-3/4 mx-auto  flex items-center justify-center">
              <Image
                src={bannerImage}
                alt="banner image"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
      </section>
      <DesignEngineering />
    </div>
  );
};

export default Banner;
