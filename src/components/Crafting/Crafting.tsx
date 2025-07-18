import React from "react";
import bg from "/public/assets/image/bg-4.jpg";
import Link from "next/link";

const Crafting = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-cover py-5"
    >
      <div className=" container mx-auto text-black ">
        <div className="bg-white w-1/3 my-10 p-10">
          <h3 className="text-2xl font-bold ">
            Crafting digital <br /> experiences
          </h3>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="my-4">
            Image from{" "}
            <Link href="#" className="underline">
              Freepic
            </Link>
          </p>
          <button className="bg-black text-white py-2 px-5 rounded-md text-xs">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Crafting;
