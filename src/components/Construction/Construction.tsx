import React from "react";
import bg from "/public/assets/image/bg-yellow.jpg";
import Link from "next/link";

const Construction = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-cover"
    >
      <div className="w-1/2 ml-auto text-gray-500 py-16">
        <h2 className=" text-3xl font-bold my-5">Construction and <br /> renovation project</h2>
        <p className="w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id autem
          eius eligendi aperiam, assumenda dolores laborum et, ducimus aut enim,
          odio temporibus inventore. Rerum obcaecati itaque architecto eius?
          Adipisci, consectetur.
        </p>
        <p className="my-4">
          Image from{" "}
          <Link href="#" className="underline">
            Freepic
          </Link>
        </p>
        <button className="bg-transparent  py-2 px-5 rounded-md text-xs border-2">
          VIEW PORTFOLIO
        </button>
      </div>
    </div>
  );
};

export default Construction;
