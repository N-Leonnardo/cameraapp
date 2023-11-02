import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJava,
  DiJavascript1,
  DiPhp,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import { BiLogoFirebase } from "react-icons/bi";
import {
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

import { EffectCards } from "swiper/modules";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export const Projectsv2 = () => {
  const [posts, setPosts] = useState();
  const [categories, setCategories] = useState();

  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 500; // Adjust the scroll amount as needed
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 500; // Adjust the scroll amount as needed
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const icons = {
    React: <DiReact width={64} />,
    38: <DiHtml5 width={64} />,
    39: <DiCss3 width={64} />,
    37: <DiJava width={64} />,
    36: <DiJavascript1 width={64} />,
    44: <SiFirebase width={64} />,
    42: <SiMysql width={64} />,
    43: <SiMongodb width={64} />,
    48: <SiNextdotjs width={64} />,
    46: <DiPhp width={64} />,
    47: <DiNodejs width={64} />,
    41: <DiPython width={64} />,
    40: <SiTypescript width={64} />,
    45: <SiWordpress width={64} />,
  };

  function categoryHandler(category) {
    return icons[category];
  }

  async function getPosts(category) {
    try {
      const response = await axios.get(
        "https://wordpress.leonascimento.dev/wp-json/wp/v2/posts?_embed"
      );
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center flex-col justify-center h-full p-2 ">
      Filters
      <div className="flex w-full max-w-screen-sm items-center z-50">
        <a
          className="cursor-pointer btn btn-sm rounded-full mr-2  "
          onClick={scrollLeft}
        >
          <AiFillCaretLeft />
        </a>
        <div
          className="w-full max-w-screen-sm bg-white rounded-3xl p-1 my-4 shadow flex overflow-x-scroll border-8 border-white scroll-snap-type-x mandatory"
          ref={scrollContainerRef}
        >
          {Object.entries(icons).map(([label, icon]) => (
            <div className="p-1 flex items-center flex-col text-xs rounded-full hover:bg-gray-100 scroll-snap-align-start">
              <a
                className="btn btn-sm mx-1 flex flex-col text-2xl rounded-full cursor-pointer"
                key={label}
                value={label}
              >
                {icon}
              </a>
            </div>
          ))}
        </div>
        <a
          className="cursor-pointer btn btn-sm rounded-full ml-2  "
          onClick={scrollRight}
        >
          <AiFillCaretRight />
        </a>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full max-w-screen-sm rounded lg z-50"
      >
        {posts?.map((post) => {
          return (
            <SwiperSlide className="rounded-3xl" key={post.id}>
              {<div></div>}
              <div className="bg-white w-full h-full rounded-3xl flex items-center justify-start flex-col">
                {post._embedded &&
                post._embedded["wp:featuredmedia"] &&
                post._embedded["wp:featuredmedia"][0].source_url ? (
                  <img
                    className="rounded aspect-video object-fit w-full h-72 object-cover aspect-video "
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    width={300}
                    height={300}
                    loading="lazy"
                  />
                ) : (
                  <div className="bg-gray-300 rounded aspect-video object-fit flex items-center justify-center"></div>
                )}
                <div className="flex flex-col w-full h-full justify-between py-6 px-8">
                  <div>
                    <h2
                      className="text-xl text-center font-semibold"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>
                    <div className="flex items-center justify-center my-5">
                      {post._embedded["wp:term"][0].map((category) => {
                        return (
                          <p className="text-2xl mr-1">
                            {categoryHandler(category.id)}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <a className="w-full " href="">
                    <button className="btn w-full  btn-primary btn-sm rounded-full ">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
