import React from "react";
import { FaWordpress, FaReact, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiFirebase,
} from "react-icons/si";

export default function Technologies() {
  return (
    <div className="my-2">
      <h2 className="text-2xl text-center">What I am used to work with</h2>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-100 rounded-box mx-auto my-2 w-96">
        <div
          id="item1"
          className="carousel-item w-full flex items-center justify-center"
        >
          <FaReact className="text-6xl mx-4 text-neutral" />
          <IoLogoHtml5 className="text-6xl mx-4 text-neutral" />
          <IoLogoCss3 className="text-6xl mx-4 text-neutral" />
          <IoLogoJavascript className="text-6xl mx-4 text-neutral" />
        </div>
        <div
          id="item2"
          className="carousel-item w-full  flex items-center justify-center"
        >
          <SiTypescript className="text-6xl mx-4 text-neutral" />
          <FaPython className="text-6xl mx-4 text-neutral" />
          <FaJava className="text-6xl mx-4 text-neutral" />
          <SiMysql className="text-6xl mx-4 text-neutral" />
        </div>
        <div
          id="item3"
          className="carousel-item w-full  flex items-center justify-center"
        >
          <SiMongodb className="text-6xl mx-4 text-neutral" />
          <SiFirebase className="text-6xl mx-4 text-neutral" />
          <FaWordpress className="text-6xl mx-4 text-neutral" />
          <FaPhp className="text-6xl mx-4 text-neutral" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
}
