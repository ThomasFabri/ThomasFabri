"use client";

import React from "react";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";

const CardTyped = Card as React.ComponentType<
  React.PropsWithChildren<{
    customClass?: string;
    className?: string;
  }>
>;

export default function About() {
  return (
    <section className="h-screen bg-[#080f16]">
      <div className="relative -top-3.5 z-10 h-5 w-30 justify-self-center rounded-2xl border-x-2 border-t-4 border-gray-500 bg-[#233D4C] shadow-lg shadow-black" />
      <div className="relative -top-7 z-0 h-2 w-full justify-self-center bg-white shadow-lg shadow-black" />

      <div className="relative h-150 right-3/8 md:right-40 -top-20 text-white">
        <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={true} onCardClick={() => {}}>
          <CardTyped>
            <h3 className="border-b-2 h-12 p-3 font-vcr text-2xl">Yoga App</h3>
            <a href="https://yoga-batel.pages.dev/" target="blank">
            <Image src={"/yoga.png"} alt={"Yoga App"} width={1000} height={10} />
            </a>
          </CardTyped>

          <CardTyped>
            <h3 className="border-b-2 h-12 p-3 font-vcr text-2xl">Landing Page</h3>
            <a href="https://olhos.keithnunes.com/" target="blank">
            <Image src={"/olho.png"} alt={"Landing Page"} width={1000} height={10}/>
            </a>
          </CardTyped>

          <CardTyped>
            <h3 className="border-b-2 h-12 p-3 font-vcr text-2xl">Biography Website</h3>
            <a href="https://gigantesdeolinda.com/" target="blank">
            <Image src={"/andre.png"} alt={"Landing Page"} width={1000} height={10}/>
            </a>
          </CardTyped>
        </CardSwap>
      </div>
    </section>
  );
}

