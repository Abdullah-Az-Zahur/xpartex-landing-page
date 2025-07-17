import React from "react";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-md border-red-500 border-2">
      <h2 className=" text-gray-300 text-2xl">logo</h2>
      <nav>
        <MdMenu className="text-gray-600 text-2xl" />
      </nav>
    </header>
  );
};

export default Header;
