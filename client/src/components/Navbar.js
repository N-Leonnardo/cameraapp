import React, { useRef } from "react";
import ReactFullpage from "@ap.cx/react-fullpage";

export default function Navbar() {
  const fullpageApi = useRef(null);

  const scrollToSection = (sectionNumber) => {
    fullpageApi.current.moveTo(sectionNumber);
  };

  return (
    <div
      className="ws-menu bottom-24 left-24 absolute z-40"
      style={{
        top: "85vh",
      }}
    >
      <div className="ws-menu">
        <button className="btn btn-outline border-none">
          <a>HOME</a>
        </button>
        <button className="btn btn-outline border-none">
          <a
            onClick={() => {
              scrollToSection(2);
            }}
          >
            ABOUT ME
          </a>
        </button>
        <button className="btn btn-outline border-none">
          <a
            onClick={() => {
              scrollToSection(3);
            }}
          >
            PROJECTS
          </a>
        </button>
        <button className="btn btn-outline border-none">
          <a
            onClick={() => {
              scrollToSection(4);
            }}
          >
            CONTACT
          </a>
        </button>
      </div>
    </div>
  );
}
