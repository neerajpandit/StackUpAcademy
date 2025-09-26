"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Globe, PieChart, Award } from "lucide-react";

interface Stat {
  value: number;
  label: string;
  icon: JSX.Element;
  suffix: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: 130,
    label: "Happy Students",
    icon: <Users className="h-8 w-8" />,
    suffix: "+",
    color: "from-pink-500 to-rose-400",
  },
  {
    value: 250,
    label: "Projects Completed",
    icon: <Globe className="h-8 w-8" />,
    suffix: "+",
    color: "from-blue-500 to-indigo-400",
  },
  {
    value: 99,
    label: "Satisfaction Rate",
    icon: <PieChart className="h-8 w-8" />,
    suffix: "%",
    color: "from-green-500 to-emerald-400",
  },
  {
    value: 15,
    label: "Industry Mentors",
    icon: <Award className="h-8 w-8" />,
    suffix: "+",
    color: "from-yellow-500 to-orange-400",
  },
];

// Custom hook for counter animation
const useCounter = (end: number, duration: number, inView: boolean): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return count;
};

const StatsSection: React.FC = () => {
  const controls = useAnimationControls();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-16 bg-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const count = useCounter(stat.value, 2000, inView);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="text-center bg-background/95 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:shadow-xl hover:border-primary/30 transition-all">
                  <div
                    className={`flex justify-center mb-4 p-3 rounded-full bg-gradient-to-r ${stat.color} text-white shadow-md`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    {count}
                    {stat.suffix}
                  </h3>
                  <p className="text-muted-foreground text-base">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
