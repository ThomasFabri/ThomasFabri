import React from "react";
import PixelTransition from "./PixelTransition";

export default function About() {
  return (
    <section className="min-h-screen bg-black/95 px-6 py-24 text-white md:px-16" id="about">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="justify-items-center text-center">
          <p className="mb-4 rounded-full bg-white px-4 py-1 text-sm font-bold italic text-black md:text-base">
            Hover image for contact info
          </p>
          <PixelTransition
            firstContent={
              <img
                src="./Headshot.jpeg"
                alt="Thomas Fabri profile picture"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  gap: "0.35rem",
                  padding: "1rem",
                  backgroundColor: "#111",
                  textAlign: "center",
                }}
              >
                <p className="text-lg font-bold text-white md:text-xl">tsfabri@gmail.com</p>
                <p className="text-lg font-bold text-white md:text-xl">(+351) 912 637 068</p>
                <a
                  href="https://www.linkedin.com/in/thomas-fabri/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold text-white underline-offset-4 transition hover:underline focus-visible:underline md:text-xl"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ThomasFabri"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold text-white underline-offset-4 transition hover:underline focus-visible:underline md:text-xl"
                >
                  GitHub
                </a>
              </div>
            }
            gridSize={8}
            pixelColor="#ffffff"
            once={false}
            animationStepDuration={0.4}
            className="custom-pixel-card h-100"
          />
        </div>

        <div className="text-left">
          <h2 className="font-vcr text-4xl md:text-6xl">ABOUT ME</h2>
          <p className="mt-6 max-w-xl font-neue text-lg leading-relaxed text-white/90 md:text-xl">
            Full Stack Developer (Mid-level) with solid hands-on experience building, deploying, and maintaining
            production-ready web applications and SaaS platforms. Strong focus on Node.js, TypeScript, React, and
            Next.js, with practical experience in RESTful APIs, containerized environments with Docker, VPS-based
            deployments, and workflow automation. Comfortable working across the full stack, collaborating in
            international teams, and continuously learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
