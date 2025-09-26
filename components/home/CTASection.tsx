"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-white"></div>
            <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-white"></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Kickstart Your Coding Career?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join <span className="font-semibold">StackUp Academy</span> and
              master Full Stack, Frontend, Backend, React, and Node.js with
              hands-on training, mentorship, and job placement support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" passHref>
                <Button size="lg" variant="secondary" className="group">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/courses" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/20 group"
                >
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
