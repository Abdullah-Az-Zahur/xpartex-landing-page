import React from "react";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-50 p-4 flex justify-between items-center shadow-md">
      <h2 className=" text-gray-300 text-2xl">logo</h2>
      <nav>
        <MdMenu className="text-gray-600 text-2xl" />
      </nav>
    </header>
  );
};

export default Header;
