import React, { useEffect, useRef, useState } from "react";

const countersData = [
  { label: "TEACHERS", value: 44 },
  { label: "SUPPORT STAFF", value: 45 },
  { label: "STUDENTS", value: 51300 },
  { label: "DEPARTMENTS", value: 6 },
];

const AboutNumbers = () => {
  const countersRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(countersData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (countersRef.current) observer.observe(countersRef.current);

    return () => {
      if (countersRef.current) observer.unobserve(countersRef.current);
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    countersData.forEach((counter, idx) => {
      let start = 0;
      const end = counter.value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // approx 60fps
      const update = () => {
        start += increment;
        if (start >= end) {
          start = end;
          setDisplayValues((prev) => {
            const newVals = [...prev];
            newVals[idx] = Math.floor(start);
            return newVals;
          });
        } else {
          setDisplayValues((prev) => {
            const newVals = [...prev];
            newVals[idx] = Math.floor(start);
            return newVals;
          });
          requestAnimationFrame(update);
        }
      };
      requestAnimationFrame(update);
    });
  };

  return (
    <div
      id="counters"
      ref={countersRef}
      className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white"
    >
      {countersData.map((counter, idx) => (
        <div key={counter.label} className="text-center">
          <div className="text-4xl">{displayValues[idx]}</div>
          <div className="text-md">{counter.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutNumbers;
