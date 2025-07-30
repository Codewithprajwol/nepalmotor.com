"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  color: string;
};

const stats: StatItem[] = [
  {
    label: "Car Exchanged",
    value: 240,
    color: "text-white",
  },
  {
    label: "Satisfied Clients",
    value: 235,
    color: "text-white",
  },
  {
    label: "Years Experience",
    value: 12,
    suffix: "+",
    color: "text-white",
  },
  {
    label: "Car Types",
    value: 18,
    color: "text-white",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-[#008080] p-10">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <p
                className={`text-5xl md:text-6xl font-extrabold ${item.color}`}
              >
                {inView ? (
                  <CountUp start={0} end={item.value} duration={2.5} />
                ) : (
                  "0"
                )}
                {item.suffix}
              </p>
              <p className="mt-2 text-sm font-medium tracking-widest uppercase text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
