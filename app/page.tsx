"use client";

import { memo, useCallback, useLayoutEffect, useState } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Loader from "../components/Loader";
import Buildin from "@/components/Building";

const MainContent = memo(function MainContent() {
  return (
    <main>
      <Header />

      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen">
          <Hero />
        </div>

        <div className="absolute inset-x-0 top-[100vh] z-20">
          <div className="sticky top-0 z-40">
            <div className="relative h-0">
              <div className="mx-auto -translate-y-1/2 h-5 w-30 rounded-2xl border-x-2 border-y-2 border-gray-400 bg-[#080e17]" />
            </div>
            <div className="h-1 w-full bg-white shadow-lg shadow-black" />
          </div>

          <Projects />
          <About />
          <Buildin/>
        </div>
      </section>
    </main>
  );
});

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useLayoutEffect(() => {
    if (!showLoader) return;

    const { documentElement, body } = document;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [showLoader]);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      <MainContent />
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
    </>
  );
}
