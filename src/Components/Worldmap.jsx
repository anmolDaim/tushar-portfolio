import React from "react";
import { motion } from "framer-motion";
import WorldMap from "../Components/ui/world-map"; // Ensure correct path for the component

export function Worldmap() {
  return (
    <div className="pt-40 dark:bg-slate-900 bg-slate-900 w-full">
      <div className="max-w-7xl mb-10 mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Global {" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto py-4">
        Finance knows no borders. Track, manage, and optimize your financial transactions worldwide with expert accounting solutions. Stay connected to global markets, international taxation, and financial growth opportunities with precision and clarity.
        </p>
      </div>
      <WorldMap
        dots={[
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
          { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
          { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
          { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
          { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
        ]}
      />
    </div>
  );
}

export default Worldmap;
