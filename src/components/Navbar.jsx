import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 3, name: "Skills", link: "/#skills" },
  { id: 4, name: "About Me", link: "/#about" },
  { id: 5, name: "Contact", link: "/#contact" },
  { id: 6, name: "Resume", link: "https://drive.google.com/file/d/16VTgd9ahCPdUOIbgs44GCk5MABztGuqI/view" }, // Updated to Google Drive link
];

const DropdownLinks = [
  { id: 1, name: "Data Analysis", link: "#data-analytics-projects" },
  { id: 2, name: "Machine Learning and Deep learning", link: "#machine-learning-projects" },
  { id: 3, name: "UI/UX and Design", link: "#ui-ux-projects" },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-primary duration-200 z-40 top-0 sticky backdrop-blur-xl ">
      <div className="flex justify-between items-center container mx-auto py-3 md:py-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <span className="font-bold text-white text-xl md:text-2xl ml-2">Suraj Singh</span>
        </div>

        {/* Links and Contact Us button */}
        <div>
          <ul className="hidden md:flex items-center text-white gap-3 md:gap-4">
            {/* First half of the menu */}
            {Menu.slice(0, 2).map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-3 md:px-4 text-sm md:text-base hover:text-[#b9b8b6] duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown for Portfolio Projects */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-1 md:gap-[2px] text-sm md:text-base py-2">
                Projects
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[180px] md:w-[200px] rounded-md text-white p-2 shadow-md">
                <ul className="flex flex-col gap-1">
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full bg-timber-green-800 rounded-md p-2 text-sm hover:bg-timber-green-700"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Second half of the menu */}
            {Menu.slice(2).map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-3 md:px-4 text-sm md:text-base hover:text-gray-300 duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Us button for small screens */}
          <div className="md:hidden">
            <a
              href="/#contact"
              className="bg-white text-primary font-semibold text-sm py-2 px-4 rounded-full duration-200 hover:bg-primary hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;