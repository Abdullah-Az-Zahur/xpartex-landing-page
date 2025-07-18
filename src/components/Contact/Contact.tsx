import Image from "next/image";
import React from "react";
import contactImage from "/public/assets/image/contact/contact-1.jpg"; // Adjust the path as necessary
import Link from "next/link";

const Contact = () => {
  return (
    <div className="container mx-auto p-4 flex">
      <div className=" bg-white text-black text-center w-1/2 p-5">
        <h2 className="text-3xl font-bold my-5">CONTACT US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit illum
          facere sed quae iusto, fugit vitae laboriosam perferendis laudantium
          porro.
        </p>
        <hr className="my-5" />

        <p>
          <span className="font-bold">Phone</span>: 1 (23) 252 55 22
        </p>
        <p>
          <span className="font-bold">Location</span>: 75 Street Sample, WI
          63025
        </p>
        <p>
          <span className="font-bold">Mail</span>:{" "}
          <a href="mailto:templete@sample.com" className="underline">
            templete@sample.com
          </a>
        </p>
        <p className="my-4">
          Image from{" "}
          <Link href="#" className="underline">
            Freepic
          </Link>
        </p>
      </div>
      <div className="w-1/2 ">
        <Image
          src={contactImage}
          alt="Image"
          height={400}
          width={400}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Contact;
