"use client";

import GooeyNav from "@/components/GooeyNav";

export default function Header() {
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

  return (

    <header className="sticky top-3 z-50 flex justify-center max-w-full">
      <div className="h-17 absolute rounded-xl text-lg md:text-2xl font-vcr shadow-lg shadow-black bg-black/70 backdrop-blur-xl border-x-4 border-white">
        <GooeyNav
          items={items}
          particleCount={10}
          particleDistances={[70, 10]}
          particleR={200}
          initialActiveIndex={1}
          animationTime={600}
          timeVariance={200}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </header>
  );
}
