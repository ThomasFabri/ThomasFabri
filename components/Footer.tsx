import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black px-6 py-8 text-white md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-neue text-sm text-white/70">(c) {new Date().getFullYear()} Thomas Fabri. All rights reserved.</p>
        <div className="flex items-center gap-4 font-neue text-sm">
          <a
            href="https://github.com/ThomasFabri"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-fabri/"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 transition hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:tsfabri@gmail.com" className="text-white/80 transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
