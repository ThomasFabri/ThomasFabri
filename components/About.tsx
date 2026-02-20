"use client";

import React, { useEffect, useRef } from "react";
import { Hammer } from "lucide-react";
import { gsap } from "gsap";

export default function About() {
  const hammerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      hammerRef.current,
      { rotation: -40 },
      {
        rotation: 0,
        duration: 0.4,
        ease: "power2.in",
        yoyo: true,
        repeat: -1, // infinito
      }
    );
  }, []);

  return (
    <section className="min-h-200 bg-black/95 text-white pt-60 text-center justify-items-center">
      <h1>Buildin...</h1>

      <div ref={hammerRef} className="inline-block">
        <Hammer size={40} />
      </div>
    </section>
  );
}