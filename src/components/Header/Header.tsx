import React from "react";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-50 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center ">
        <h2 className=" text-gray-300 text-2xl">logo</h2>
      <nav>
        <MdMenu className="text-gray-600 text-2xl" />
      </nav>
      </div>
    </header>
  );
};

export default Header;
