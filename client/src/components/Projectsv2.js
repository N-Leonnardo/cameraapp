import React from "react";
import { ProjectTimelineCard } from "./projects/ProjectTimelineCard";

export const Projectsv2 = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="card bg-base-100 shadow-xl">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid max-w-2xl mx-auto">
            <ProjectTimelineCard
              title={"The Change"}
              year={"2019"}
              text={
                "In 2019 I moved to United States, when I got here I started all the process that a normal immigrant would make: Learn the language, adapt to the culture, meet new people "
              }
            />
            <ProjectTimelineCard
              title={"TESTING"}
              year={"2020"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              }
            />
            <ProjectTimelineCard
              title={"TESTING"}
              year={"2020"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              }
            />
            <ProjectTimelineCard
              title={"TESTING"}
              year={"2020"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              }
            />
            <ProjectTimelineCard
              title={"TESTING"}
              year={"2020"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
