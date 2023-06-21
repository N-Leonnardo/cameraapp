import React from "react";
import { FaBeer } from "react-icons/fa";

export const ProjectTimelineCard = (props) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-px h-10 opacity-0 sm:h-full" />
        <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
            {props.year}
          </div>
        </div>
        <div className="w-px h-full bg-gray-300" />
      </div>
      <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
        <div className="sm:mr-5">
          <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <FaBeer />
          </div>
        </div>
        <div className="my-5">
          <p className="text-xl font-semibold sm:text-base">{props.title}</p>
          <p className="text-sm text-gray-700">{props.text}</p>
          <button className="btn btn-sm">Read more</button>
        </div>
      </div>
    </div>
  );
};
