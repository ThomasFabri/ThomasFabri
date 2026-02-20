"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity", touchAction: "none" }}
      onAnimationComplete={() => {
        if (isExiting) onComplete();
      }}
    >
      <motion.div
        className="h-30 w-30 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ willChange: "opacity" }}
      >
        <video
          className="block h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setIsExiting(true)}
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
}
