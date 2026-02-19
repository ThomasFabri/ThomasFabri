"use client";

import GradientBlinds from "./GradientBlinds";

export default function Hero() {
  return (
    <div className="min-h-screen items-center justify-center bg-white">
      <div className="relative h-screen w-full border-[#ffffff] bg-black">
        <GradientBlinds
          gradientColors={["#233D4C"]}
          angle={200}
          noise={0.0}
          blindCount={1}
          blindMinWidth={2}
          mouseDampening={0.15}
          mirrorGradient={false}
          spotlightRadius={0.6}
          spotlightSoftness={1.0}
          spotlightOpacity={0.25}
          distortAmount={200}
          shineDirection="right"
          className={undefined}
          dpr={undefined}
        />
        <div>
          <div>
            <p className="absolute md:top-115 top-35 left-10 text-6xl md:text-9xl font-vcr text-[#ffffff] text-shadow-xl">
              Thomas <br /> Fabri
            </p>
            <p className="absolute bottom-15 md:bottom-5 right-10 text-end text-2xl md:text-3xl font-semibold italic text-white text-shadow-xl">
              Fullstack Developer <br /> DevOps Enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
