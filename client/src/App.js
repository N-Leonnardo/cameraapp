import "./App.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageCount,
  FullpageNavigation,
  FullpageContext,
} from "@ap.cx/react-fullpage";
import logo from "./logo.svg";
import Projects from "./components/Projects";
import { Suspense, useEffect, useRef } from "react";
import { useState } from "react";
import Contact from "./components/Contact";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Ballon from "./components/3d/Ballon";
import { Projectsv2 } from "./components/Projectsv2";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "LeoNascimento.dev | Portfolio";
  }, []);

  return (
    <div className="bg-default">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Loading() {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center flex-col">
      <span className="text-black text-4xl mb-5 font-bold">
        LEONASCIMENTO.DEV
      </span>
      <progress className="progress w-56"></progress>
    </div>
  );
}

function ErrorPage() {
  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center flex-col">
      <span className="text-black text-4xl mb-5 font-bold">Error 404</span>
      <p className="text-black">No page was found</p>
    </div>
  );
}

function HomePage() {
  const fullpageRef = useRef(null);

  function scrollToSlide(index) {
    fullpageRef.current.moveTo(index);
  }

  return (
    <div>
      <Alert />
      <Fullpage ref={fullpageRef}>
        <FullpageNavigation style={{ zIndex: "100" }} />
        <FullPageSections>
          <FullpageSection id="Home">
            <Ballon />
            <HeroSection />
          </FullpageSection>
          <FullpageSection>
            <About />
          </FullpageSection>
          <FullpageSection>
            {/* <Projects /> */}
            <Projectsv2 />
          </FullpageSection>
          <FullpageSection>
            <Contact />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;
