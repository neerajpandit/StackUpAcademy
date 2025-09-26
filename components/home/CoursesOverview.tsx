"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Layers,
  Terminal,
  Database,
  Layout,
  Globe,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Full Stack Development",
    description:
      "Master both frontend and backend development with hands-on projects using the MERN stack (MongoDB, Express.js, React, Node.js).",
    icon: <Layers className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500",
    href: "/courses/full-stack-development",
  },
  {
    title: "Frontend Development",
    description:
      "Learn HTML, CSS, JavaScript, and React to create responsive, modern, and user-friendly web applications.",
    icon: <Layout className="h-8 w-8" />,
    color: "from-pink-500 to-rose-500",
    href: "/courses/frontend-development",
  },
  {
    title: "Backend Development",
    description:
      "Build robust server-side applications with Node.js, Express.js, and MongoDB to handle real-world business logic.",
    icon: <Database className="h-8 w-8" />,
    color: "from-emerald-500 to-teal-500",
    href: "/courses/backend-development",
  },
  {
    title: "React.js Mastery",
    description:
      "Dive deep into React.js, covering components, hooks, state management, and real-world projects to become a frontend pro.",
    icon: <Code className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    href: "/courses/react-development",
  },
  {
    title: "Node.js & Express.js",
    description:
      "Learn backend development with Node.js and Express.js to build APIs, handle authentication, and manage databases.",
    icon: <Terminal className="h-8 w-8" />,
    color: "from-yellow-500 to-orange-500",
    href: "/courses/node-express",
  },
  {
    title: "Web Development Fundamentals",
    description:
      "Perfect for beginners – learn the foundations of web technologies including HTML, CSS, and JavaScript.",
    icon: <Globe className="h-8 w-8" />,
    color: "from-red-500 to-pink-500",
    href: "/courses/web-fundamentals",
  },
];

const CoursesOverview = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10 z-0"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our professional training programs designed to help you
            master Full Stack, Frontend, Backend, React, and Node.js
            development. Learn from industry experts with hands-on projects.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-background/95 backdrop-blur-sm border border-transparent hover:border-primary/30 hover:shadow-xl transition-all">
                <CardHeader>
                  <div
                    className={`p-3 w-14 h-14 rounded-lg bg-gradient-to-r ${course.color} text-white flex items-center justify-center mb-4`}
                  >
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={course.href} passHref>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto group text-primary hover:text-indigo-600"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesOverview;
