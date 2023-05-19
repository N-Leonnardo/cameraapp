import React from "react";
import react from "../media/react-svgrepo-com.svg";
import mysql from "../media/mysql-svgrepo-com.svg";
import nodejs from "../media/nodejs-svgrepo-com.svg";
import python from "../media/python-svgrepo-com.svg";
import typescript from "../media/typescript-svgrepo-com.svg";
import ProjectCard from "./projects/ProjectCard";
import myDriverApp from "../media/myDriverApp.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mydriverappBg from "../media/mydriverapp-background.jpg";
import mydriverappLogo from "../media/myDriverApp.svg";

// IMAGES IMPORTER

import mda2 from "../media/projects-images/mydriverapp/mediamodifier_image.png";
import mda3 from "../media/projects-images/mydriverapp/mediamodifier_image (1).png";
import mda1 from "../media/projects-images/mydriverapp/iphone202.png";

import cisco1 from "../media/projects-images/cisco/cisco-1.jpg";
import cisco2 from "../media/projects-images/cisco/cisco-2.jpg";
import cisco3 from "../media/projects-images/cisco/cisco-3.jpg";

import craig1 from "../media/projects-images/craig/craig-1.jpg";
import craig2 from "../media/projects-images/craig/craig-2.jpg";
import craig3 from "../media/projects-images/craig/craig-3.jpg";

import cameraapp1 from "../media/projects-images/cameraapp/cameraapp-1.jpg";
import cameraapp2 from "../media/projects-images/cameraapp/cameraapp-2.jpg";
import cameraapp3 from "../media/projects-images/cameraapp/cameraapp-3.jpg";

export default function Projects() {
  return (
    <div
      className={
        "w-screen h-screen flex justify-center lg:items-start overflow-y-scroll z-50 rounded-lg"
      }
    >
      <div className="flex flex-col ">
        <ProjectCard
          bg={mydriverappBg}
          doc={"client/src/media/MyDriverApp.pdf"}
          desc={
            "The application enables users to order trips by utilizing the Google Maps API, which calculates prices based on distance and time. It has been developed using a combination of React, Express, Node.js, and MySQL technologies."
          }
          title={"My Driver App"}
          logo={mydriverappLogo}
          technologies={[react, nodejs, mysql]}
          image1={mda1}
          image2={mda2}
          image3={mda3}
          projSc={""}
          projLive={"https://mydriverapp.leonascimento.dev/login"}
        />
        <ProjectCard
          bg={mydriverappBg}
          doc={"client/src/media/MyDriverApp.pdf"}
          desc={
            "The application has an interface that lets the users see important informations about your network such as latency and IP.  It has been developed using a combination of React, Node.js, and WebSockets."
          }
          title={"Cisco | Software Engineering Experience Program"}
          image1={cisco1}
          image2={cisco2}
          image3={cisco3}
          technologies={[react, nodejs]}
          classes={"flex-row-reverse"}
          projSc={"https://github.com/N-Leonnardo/cisco-starter-repo"}
          projLive={""}
        />
        <ProjectCard
          desc={
            "Craigslist Jobs is a web application that collects job listings from Craigslist and presents them in an easy-to-use interface. It allows users to filter job listings based on location, job title, and keywords. Users can save job listings, share them with friends and receive daily email notifications about new job postings. However, users should be cautious of scams and verify the legitimacy of job listings before applying."
          }
          image1={craig1}
          image2={craig2}
          image3={craig3}
          title={"Craigslist Jobs"}
          logo={"https://www.svgrepo.com/show/473567/cisco.svg"}
          technologies={[typescript, nodejs]}
          classes={"flex-row-reverse"}
          projSc={"https://github.com/N-Leonnardo/cisco-starter-repo"}
          projLive={""}
        />
        <ProjectCard
          bg={mydriverappBg}
          doc={"client/src/media/MyDriverApp.pdf"}
          desc={
            "I needed a camera for my ring bell, then I decide to create this application using Python to make a program that let select the camera you would like and then when it is running, it reads faces and bodies that are on the camera and record it."
          }
          title={"My Smart Camera "}
          image1={cameraapp1}
          image2={cameraapp2}
          image3={cameraapp3}
          logo={mydriverappLogo}
          technologies={[python]}
          projSc={"https://github.com/N-Leonnardo/cameraapp"}
          classes={"flex-row-reverse"}
        />
      </div>
    </div>
  );
}
