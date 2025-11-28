import React from "react";
import logoImage from "../assets/Government Polytechnic Solapur.gif";
import arrow from "../assets/arrow.svg";

export default function Header() {
  // DROPDOWN DATA MAP
  const dropdowns = {
    Institute: ["About Us", "Vision & Mission", "Principal Desk"],
    Academics: ["Courses", "Syllabus", "Academic Calendar"],
    Adminstration: ["Staff", "Rules", "Circulars"],
    Departments: ["Computer", "Mechanical", "Civil", "Electrical"],
    Admissions: ["Fees", "Eligibility", "How to Apply"],
    NBA: ["Accreditation", "Reports"],
    TPO: ["Placement Cell", "Drives", "Recruiters"],
    "Exam Section": ["Timetable", "Results", "Forms"],
    // Other: ["RTI", "Contact", "Gallery"],
  };

  const secondaryItems = [
    "Institute",
    "Academics",
    "Adminstration",
    "Departments",
    "Admissions",
    "NBA",
    "TPO",
    "Exam Section",
    "Other",
  ];

  return (
    <div className="outer-container fixed top-0 left-0 z-50 flex flex-col w-full h-[136px] bg-white text-black">

      {/* TOP HEADER */}
      <div className="header-container flex justify-between px-12 w-full bg-white h-[96px] items-center">

        <div
          className="logo bg-white h-4/5 w-[320px] bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${logoImage})` }}
        ></div>

        {/* PRIMARY MENU (unchanged) */}
        <div className="options bg-white h-4/5 flex items-center justify-center">
          <ul className="flex gap-6 text-md text-gray-700">
            {[
              "STUDENTS",
              "ALUMINI",
              "VISITS",
              "MEDIA",
              "CAREER",
              "EVENTS",
              "TENDER",
              "CONTACT",
            ].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                {item}

                <span
                  className="
                    absolute left-0 -bottom-1 
                    h-[2px] w-0 bg-red-500
                    transition-all duration-300 
                    group-hover:w-full
                  "
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECONDARY MENU WITH DYNAMIC DROPDOWNS */}
      <div className="w-full bg-red-700 px-12 secondary-menu h-14 flex items-center justify-center">
        <ul className="flex gap-6 text-md text-gray-700">

          {secondaryItems.map((item) => {
            const hasDropdown = dropdowns[item] !== undefined;

            return (
              <li
                key={item}
                className="relative group cursor-pointer text-white select-none"
              >
                {/* Label + arrow only if dropdown exists */}
                <div className="flex items-center gap-1">
                  {item}

                  {hasDropdown && (
                    <span
                      className="
                        text-black
                        inline-block text-sm
                        transition-transform duration-300
                        group-hover:rotate-180
                      "
                    >
                      <img src={arrow} className="h-4 w-4" />
                    </span>
                  )}
                </div>

                {/* ONLY render dropdown if mapped */}
                {hasDropdown && (
                  <ul
                    className="
                      absolute left-0 top-full mt-2
                      w-40 bg-white shadow-lg rounded-md
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 z-50
                    "
                  >
                    {dropdowns[item].map((opt) => (
                      <li
                        key={opt}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Underline animation */}
                <span
                  className="
                    absolute left-0 -bottom-1 
                    h-[2px] w-0 bg-white
                    transition-all duration-300 
                    group-hover:w-full
                  "
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
