import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineStatusOnline } from "react-icons/hi";
import react from "../../media/myDriverApp.svg";

export default function ProjectCard(props) {
  return (
    <div className="x-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 z-50">
      <div className="grid bg-base-100 gap-10 lg:grid-cols-2 p-20 rounded-xl md: p-10 mx-4 shadow-lg">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-neutral font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none text-neutral">
              {props.title}
            </h2>
            <p className="text-base md:text-lg text-neutral">{props.desc}</p>
          </div>
          <div>
            <div className="technologies my-2">
              <span className="font-medium text-neutral"> Technologies: </span>

              <div className="tech-icons text-neutral flex my-2 ">
                {props.technologies?.map((tech) => {
                  console.log(tech);
                  return <img src={tech} alt="" className="w-8 mx-2" />;
                })}
              </div>
            </div>
            <button className="btn bg-white text-neutral my-2">
              Read More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </button>

            <div className="links flex my-2">
              <a
                href={props.projSc}
                target="_blank"
                className="flex items-center text-neutral"
              >
                <AiFillGithub
                  className="mx-2 text-neutral"
                  style={{ fontSize: "32px" }}
                />
                Source Code
              </a>
              {props.projLive && (
                <a
                  href={props.projLive}
                  target="_blank"
                  className="flex items-center cursor-pointer text-neutral"
                >
                  <HiOutlineStatusOnline
                    className="mx-2 text-neutral"
                    style={{ fontSize: "32px" }}
                  />
                  See it live
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={props.image1}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded-xl shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={props.image2}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded-xl shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={props.image3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
