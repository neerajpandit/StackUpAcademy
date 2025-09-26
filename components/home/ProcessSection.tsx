"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  UserPlus,
  BookOpen,
  Code2,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

const steps: Step[] = [
  {
    title: "Enrollment",
    description:
      "Start your journey by enrolling in your preferred course – Full Stack, Frontend, Backend, React, or Node.js.",
    icon: <UserPlus className="h-8 w-8" />,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Learning Modules",
    description:
      "Access structured lessons, projects, and hands-on coding challenges designed by industry experts.",
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Practical Coding",
    description:
      "Work on real-world projects and assignments to strengthen your coding skills and problem-solving abilities.",
    icon: <Code2 className="h-8 w-8" />,
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Doubt Support",
    description:
      "Get 1-on-1 mentorship and group sessions to resolve your queries and keep your learning on track.",
    icon: <Users className="h-8 w-8" />,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Certification",
    description:
      "Receive an industry-recognized certificate upon successfully completing the course and assessments.",
    icon: <GraduationCap className="h-8 w-8" />,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Placement Guidance",
    description:
      "We help you with resume building, interview preparation, and job referrals to kickstart your IT career.",
    icon: <Briefcase className="h-8 w-8" />,
    color: "bg-teal-500/10 text-teal-500",
  },
];

const ProcessSection: React.FC = () => {
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
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-20 z-0"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            How Learning Works at StackUp Academy
          </h2>
          <p className="text-muted-foreground text-lg">
            A step-by-step learning process designed to take you from beginner
            to job-ready professional in web development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:shadow-xl hover:border-primary/30 transition-all h-full">
                <div
                  className={`${step.color} p-3 w-14 h-14 rounded-xl flex items-center justify-center mb-4`}
                >
                  {step.icon}
                </div>
                <div className="flex items-center mb-4">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
