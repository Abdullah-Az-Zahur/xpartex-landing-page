import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "/public/assets/image/banner/banner-1.png";
import DesignEngineering from "../DesignEngineering/DesignEngineering";

const Banner = () => {
  return (
    <div className="bg-red-100 p-4 mx-auto">
      <section className="relative text-black py-20 px-10">
        {/*  Left Content Box */}
        <div className="bg-slate-50 p-5 py-10 w-2/3 h-1/2 bottom-0 left-0 mt-36">
          <h3 className="text-2xl font-bold my-4">We Create Websites</h3>
          <p className="w-1/2">
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
          <button className="bg-black text-white py-2 px-5 rounded-md text-xs">
            VIEW PORTFOLIO
          </button>
        </div>
        {/* Right Content Box */}
        <div className=" absolute w-1/2 h-4/6 right-10 top-0 my-10">
          <div className="absolute bg-amber-500 w-3/4 h-full right-0 z-0"></div>
          <div className="absolute bg-gray-500 w-1/2 h-4/6 z-10 left-0 top-28 justify-center"></div>
          <div className="absolute inset-0 z-20 -top-12 w-3/4 mx-auto  flex items-center justify-center">
            <Image
              src={bannerImage}
              alt="banner image"
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>
        <DesignEngineering/>
    </div>
  );
};

export default Banner;
