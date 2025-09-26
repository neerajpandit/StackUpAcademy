"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const controls = useAnimation();
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90 z-0"></div>

      {/* Animated blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-lg text-left"
          >
            <motion.div variants={itemVariants}>
              <h3 className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
                Your Career Partner
              </h3>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Master the{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                MERN Stack
              </span>
              <br />
              with StackUp Academy
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Learn Full Stack Web Development with{" "}
              <strong>hands-on projects</strong>,{" "}
              <strong>industry-level mentors</strong>, and{" "}
              <strong>job-ready skills</strong>. Gain expertise in MongoDB,
              Express.js, React, Node.js, and build modern, scalable
              applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/courses" passHref>
                <Button
                  size="lg"
                  className="group hover:shadow-lg transition-shadow duration-300"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-6 pt-10 min-h-[450px]"
          >
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
                  Your Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
                  Your Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Type Here"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    className="border border-gray-300 dark:border-gray-700 rounded-l-md px-4 py-2 
                     bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>UK</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter Number"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-r-md px-3 py-2 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition"
                >
                  Submit Inquiry →
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            opacity: 0.9;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
