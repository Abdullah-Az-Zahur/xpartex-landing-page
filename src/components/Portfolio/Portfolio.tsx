import Image from "next/image";
import React from "react";
import a1 from "/public/assets/image/portfolio/1.png";
import a2 from "/public/assets/image/portfolio/2.png";
import a3 from "/public/assets/image/portfolio/3.png";
import a4 from "/public/assets/image/portfolio/4.png";
import a5 from "/public/assets/image/portfolio/5.png";
import a6 from "/public/assets/image/portfolio/6.png";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="text-center text-white ">
          <h2 className="text-2xl font-bold  py-10">PORTFOLIO</h2>
          <p className="container mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            deleniti eius non quae eaque adipisci facere inventore alias. Nemo
            beatae saepe ab vero, dolor quaerat cupiditate repellat quos
            repellendus fugit?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">
          <Link href="#" className="">
            <Image
              className="w-full h-auto"
              src={a1}
              alt="image"
              height={400}
              width={400}
            />
            <p className="text-center bg-white text-gray-400  p-5">
              Website Design
            </p>
          </Link>
          <Link href="#" className="">
            <Image
              className="w-full h-auto"
              src={a2}
              alt="image"
              height={400}
              width={400}
            />
            <p className="text-center bg-white text-gray-400  p-5">
              Mobile Application
            </p>
          </Link>
          <Link href="#" className="">
            <Image
              className="w-full h-auto"
              src={a3}
              alt="image"
              height={400}
              width={400}
            />
            <p className="text-center bg-white text-gray-400  p-5">
              Corporate Design
            </p>
          </Link>
          <Link href="#" className="">
            <Image
              className="w-full h-auto"
              src={a4}
              alt="image"
              height={400}
              width={400}
            />
            <p className="text-center bg-white text-gray-400  p-5">
              Mobile Application
            </p>
          </Link>
          <Link href="#">
            <Image
              className="w-full h-auto"
              src={a5}
              alt="image"
              height={400}
              width={400}
            />
            <p className="text-center bg-white text-gray-400  p-5">
              Responsive Design
            </p>
          </Link>
          <Link href="#">
            <Image
              className="w-full h-auto"
              src={a6}
              alt="image"
              height={400}
              width={400}
            />
            <p className="text-center bg-white text-gray-400  p-5">
              Digital Product
            </p>
          </Link>
        </div>

        <p className="my-4 text-center">
          Image from{" "}
          <Link href="#" className="underline">
            Freepic
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
