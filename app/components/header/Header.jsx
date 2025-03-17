"use client";
import { FaBars, FaSearch, FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdApps } from "react-icons/md";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Left - Menu & Logo */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FaBars className="text-gray-600 text-xl" />
        </button>
        <h1 className="text-xl font-bold text-gray-700">Mail</h1>
      </div>

      {/* Middle - Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-full max-w-md">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search mail"
          className="bg-transparent flex-1 px-2 outline-none text-gray-700"
        />
      </div>

      {/* Right - Icons & Avatar */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FaRegBell className="text-gray-600 text-xl" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <IoSettingsOutline className="text-gray-600 text-xl" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <MdApps className="text-gray-600 text-xl" />
        </button>
        <Image
          src="/avatar.png" // Change this to your actual avatar URL
          alt="User Avatar"
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
