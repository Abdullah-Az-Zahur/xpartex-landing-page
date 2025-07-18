import React from "react";
import bg from "/public/assets/image/bg-3.jpg";
import image1 from "/public/assets/image/mockup/image1.jpg";
import Image from "next/image";
import Link from "next/link";

const MockUp = () => {
  return (
    <div
    id="mockup"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-cover"
    >
      <div className="md:flex mx-auto ">
        <div className="md:w-1/2 mx-auto my-auto gap-5 py-10 ">
          <div className="md:w-5/6 ml-auto pb-5">
            <Image src={image1} alt="Image" height={400} width={400} />
          </div>
          <div className="bg-amber-100 text-black text-center md:w-2/3 p-28">
            <h2 className="text-2xl">MOCKUP</h2>
            <p>READY TO USE</p>
          </div>
        </div>
        <div className=" md:w-1/2">
          <div className="items-center flex justify-center my-5">
            <div className="bg-slate-50 text-black p-5 md:w-2/3">
              <h3 className="text-2xl font-bold my-4">Branding Strategy</h3>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                autem eius eligendi aperiam, assumenda dolores laborum et,
                ducimus aut enim, odio temporibus inventore. Rerum obcaecati
                itaque architecto eius? Adipisci, consectetur.
              </p>
              <p className="my-4">
                Image from{" "}
                <Link href="#" className="underline">
                  Freepic
                </Link>
              </p>
            </div>
          </div>
          <div className="items-center flex justify-center my-5">
            <div className="bg-slate-50 text-black p-5 md:w-2/3">
              <h3 className="text-2xl font-bold my-4">Designing Logos</h3>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                autem eius eligendi aperiam, assumenda dolores laborum et,
                ducimus aut enim, odio temporibus inventore. Rerum obcaecati
                itaque architecto eius? Adipisci, consectetur.
              </p>
            </div>
          </div>
          <div className="items-center flex justify-center my-5">
            <div className="bg-slate-50 text-black p-5 md:w-2/3">
              <h3 className="text-2xl font-bold my-4">Brand identity</h3>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                autem eius eligendi aperiam, assumenda dolores laborum et,
                ducimus aut enim, odio temporibus inventore. Rerum obcaecati
                itaque architecto eius? Adipisci, consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockUp;
