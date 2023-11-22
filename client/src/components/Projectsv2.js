import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineSwipe } from "react-icons/md";

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
  const [loading, setLoading] = useState(true);
  const [guide, setGuide] = useState(true);
  const [selectedIcons, setSelectedIcons] = useState([]);

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

  const toggleIcon = (id) => {
    const isSelected = selectedIcons.includes(id);
    if (isSelected) {
      setSelectedIcons(selectedIcons.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIcons([...selectedIcons, id]);
    }
  };

  useEffect(() => {
    getPosts();
  }, [selectedIcons]);

  const icons = {
    35: <DiReact width={64} id={38} />,
    38: <DiHtml5 width={64} id={38} />,
    39: <DiCss3 width={64} id={39} />,
    37: <DiJava width={64} id={37} />,
    36: <DiJavascript1 width={64} id={36} />,
    44: <SiFirebase width={64} id={44} />,
    42: <SiMysql width={64} id={42} />,
    43: <SiMongodb width={64} id={43} />,
    48: <SiNextdotjs width={64} id={48} />,
    46: <DiPhp width={64} id={46} />,
    47: <DiNodejs width={64} id={47} />,
    41: <DiPython width={64} id={41} />,
    40: <SiTypescript width={64} id={40} />,
    45: <SiWordpress width={64} id={45} />,
  };

  function categoryHandler(category) {
    return icons[category];
  }

  async function getPosts() {
    setLoading(true);
    if (selectedIcons?.length > 0) {
      try {
        const response = await axios.get(
          `https://wordpress.leonascimento.dev/wp-json/wp/v2/posts?categories=${selectedIcons.join(
            ","
          )}&_embed`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          "https://wordpress.leonascimento.dev/wp-json/wp/v2/posts?_embed"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="flex items-center flex-col justify-center h-full p-2 ">
      <div className="ml-24 w-full" id="project title">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <p> Here are my projects, you can take a look </p>
      </div>
      Filters
      <div className="flex w-full max-w-screen-sm items-center z-40">
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
          {Object.entries(icons).map(([id, icon]) => (
            <button
              className={
                "btn btn-sm mx-1 flex flex-col text-2xl rounded-full cursor-pointer hover:bg-accent hover:border-accent" +
                (selectedIcons?.includes(id)
                  ? " bg-secondary border-secondary"
                  : "")
              }
              key={id}
              id={id}
              onClick={() => toggleIcon(id)}
            >
              {icon}
            </button>
          ))}
        </div>
        <a
          className="cursor-pointer btn btn-sm rounded-full ml-2  "
          onClick={scrollRight}
        >
          <AiFillCaretRight />
        </a>
      </div>
      {!loading ? (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full max-w-screen-sm rounded lg z-50"
        >
          {posts?.map((post, index) => {
            return (
              <SwiperSlide className="rounded-3xl" key={index}>
                <div
                  className="bg-white w-full h-full rounded-3xl flex items-center justify-start flex-col"
                  onClick={(e) => {
                    console.log(e);
                    setGuide(false);
                  }}
                >
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
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      ></h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      ></p>
                      <div className="flex items-center justify-center my-5">
                        {post._embedded["wp:term"][0].map((category, index) => {
                          return (
                            <p className="text-2xl mr-1" key={index}>
                              {categoryHandler(category.id)}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <a className="w-full " href={post.link} target="_blank">
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
      ) : (
        <div
          className="
            bg-transparent
            w-96
            h-96
            rounded-3xl
            flex
            items-center
            justify-center
            flex-col"
        >
          <progress className="progress w-56"></progress>
        </div>
      )}
      <div className="flex items-end justify-center h-24">
        {guide && (
          <motion.div
            initial={{
              rotate: [0, 20, 0],
            }}
            animate={{
              x: [0, -20, 0],
              rotate: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <MdOutlineSwipe className="text-6xl" />
          </motion.div>
        )}
      </div>
    </div>
  );
};
