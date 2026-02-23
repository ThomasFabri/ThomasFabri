"use client";

import React from "react";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";
import FuzzyText from "./FuzzyText";

const CardTyped = Card as React.ComponentType<
  React.PropsWithChildren<{
    customClass?: string;
    className?: string;
  }>
>;

export default function Projects() {
  const projects = [
    { title: "Yoga App", href: "https://yoga-batel.pages.dev/", image: "/yoga.png", alt: "Yoga App" },
    { title: "Landing Pages", href: "https://olhos.keithnunes.com/", image: "/olho.png", alt: "Landing Page" },
    { title: "Biography Website", href: "https://gigantesdeolinda.com/", image: "/andre.png", alt: "Biography Website" },
    { title: "GitHub", href: "https://github.com/ThomasFabri", image: "/github.png", alt: "GitHub Projects" },
    { title: "AI Agents Info Website", href: "https://ai.agenciarei.com/", image: "/aiagents.png", alt: "AI info Website" },
  ];

  return (
    <section className="min-h-screen bg-black text-white" id="projects">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] w-full grid-cols-1 gap-10 px-6 pb-10 pt-8 md:grid-cols-2 md:gap-16 md:px-20">
        <div className="relative items-center pt-38">
          <h2 className="font-vcr text-5xl leading-none md:text-7xl lg:text-8xl">
            RECENT
            <br />
            WORKS
          </h2>
          <p className="max-w-110 font-neue text-xl leading-relaxed">
            My projects combine performance-first engineering with bold visual direction. <br />
            Built primarily with Next.js and TypeScript, each interface is designed to feel fast, intentional, and
          </p>
          <a href="https://www.youtube.com/watch?v=fNFzfwLM72c" target="_blank" rel="noreferrer">
            <FuzzyText baseIntensity={0.05} hoverIntensity={0.3} enableHover className="relative -top-8 left-24">
              alive
            </FuzzyText>
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative top-15">
            <CardSwap
              width={500}
              height={400}
              cardDistance={55}
              verticalDistance={62}
              delay={2800}
              pauseOnHover={true}
              onCardClick={() => {}}
            >
              {projects.map((project) => (
                <CardTyped key={project.title}>
                  <h3 className="h-12 border-b-2 p-3 font-vcr text-2xl">{project.title}</h3>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <Image src={project.image} alt={project.alt} width={1000} height={600} />
                  </a>
                </CardTyped>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
