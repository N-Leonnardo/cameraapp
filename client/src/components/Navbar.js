import React, { useRef } from "react";
import ReactFullpage, { FullpageContext } from "@ap.cx/react-fullpage";

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
        <FullpageContext.Consumer>
          {(ctx) => (
            <button
              className="btn btn-outline border-none"
              onClick={() => ctx.goto(ctx.slides[1], true)}
            >
              ABOUT ME
            </button>
          )}
        </FullpageContext.Consumer>
        <FullpageContext.Consumer>
          {(ctx) => (
            <button
              className="btn btn-outline border-none"
              onClick={() => ctx.goto(ctx.slides[2], true)}
            >
              PROJECTS
            </button>
          )}
        </FullpageContext.Consumer>
        <FullpageContext.Consumer>
          {(ctx) => (
            <button
              className="btn btn-outline border-none"
              onClick={() => ctx.goto(ctx.slides[3], true)}
            >
              CONTACT
            </button>
          )}
        </FullpageContext.Consumer>
      </div>
    </div>
  );
}
