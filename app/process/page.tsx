import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Learning Process | StackUp Academy",
  description:
    "Discover StackUp Academy’s step-by-step learning process — from fundamentals to full stack development, real-world projects, and career support.",
};

const processSteps = [
  {
    step: 1,
    title: "Orientation & Foundation",
    description:
      "We start by introducing students to the world of coding and development. You’ll learn the basics of programming, web fundamentals, and how to set up your development environment.",
    keyPoints: [
      "HTML, CSS & JavaScript fundamentals",
      "How the web works",
      "Setting up tools (VS Code, Git, Node.js)",
      "Problem-solving mindset",
      "Introduction to projects",
    ],
    color: "border-blue-500 dark:border-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    step: 2,
    title: "Frontend Development",
    description:
      "Students dive deep into frontend technologies and modern frameworks to build interactive, responsive, and user-friendly websites.",
    keyPoints: [
      "Advanced JavaScript (ES6+)",
      "React.js & state management",
      "UI/UX design principles",
      "Responsive design with Tailwind CSS",
      "Building real-world frontend projects",
    ],
    color: "border-purple-500 dark:border-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    step: 3,
    title: "Backend Development",
    description:
      "Learn to build powerful and scalable backend applications with Node.js and Express. Understand databases and API development.",
    keyPoints: [
      "Node.js & Express.js",
      "REST APIs & GraphQL",
      "Authentication & Authorization",
      "MongoDB & SQL Databases",
      "Secure coding practices",
    ],
    color: "border-pink-500 dark:border-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-900/30",
    textColor: "text-pink-600 dark:text-pink-400",
  },
  {
    step: 4,
    title: "Full Stack Integration",
    description:
      "Combine frontend and backend skills to create complete applications. Learn deployment and teamwork through collaborative projects.",
    keyPoints: [
      "Connecting frontend & backend",
      "MERN stack projects",
      "Version control with Git & GitHub",
      "Agile & teamwork skills",
      "Deployment on cloud (Vercel, AWS)",
    ],
    color: "border-amber-500 dark:border-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/30",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  {
    step: 5,
    title: "Projects & Portfolio",
    description:
      "Students work on real-world projects to showcase their skills and build a professional portfolio that helps in placements.",
    keyPoints: [
      "Capstone project",
      "Open-source contributions",
      "Portfolio website",
      "Code reviews & best practices",
      "Presentation skills",
    ],
    color: "border-green-500 dark:border-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    step: 6,
    title: "Career Support",
    description:
      "We guide students beyond coding by preparing them for the job market with career counseling, interview prep, and placement support.",
    keyPoints: [
      "Resume building",
      "Mock interviews",
      "Soft skills & communication",
      "Placement assistance",
      "Lifetime mentorship",
    ],
    color: "border-teal-500 dark:border-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/30",
    textColor: "text-teal-600 dark:text-teal-400",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Learning Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At StackUp Academy, we follow a step-by-step teaching method that
            takes you from beginner to full-stack developer — with real-world
            projects and career guidance along the way.
          </p>
        </div>
      </section>

      {/* Main Process Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Step number and title */}
                  <div className="md:w-1/3">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} ${step.textColor} text-2xl font-bold mb-4`}
                    >
                      {step.step}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {step.title}
                    </h2>
                  </div>

                  {/* Step description and key points */}
                  <div className="md:w-2/3">
                    <div
                      className={`p-6 rounded-lg border-l-4 ${step.color} bg-card shadow-sm`}
                    >
                      <p className="text-lg mb-6">{step.description}</p>
                      <h3 className="font-semibold mb-3">Key Activities:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {step.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle
                              className={`h-5 w-5 ${step.textColor} mt-0.5 mr-2 flex-shrink-0`}
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector line between steps (except for last) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex justify-center my-8">
                    <div className="w-0.5 h-16 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Our Learning Process Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven step-by-step methodology ensures students gain both
              technical skills and real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Beginner-Friendly Start
              </h3>
              <p className="text-muted-foreground">
                We welcome complete beginners and guide them step by step,
                ensuring no one is left behind.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Project-Based Learning
              </h3>
              <p className="text-muted-foreground">
                Students build real-world projects that strengthen their
                portfolio and confidence.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Career-Focused Training
              </h3>
              <p className="text-muted-foreground">
                From mock interviews to placement support, we help students land
                jobs and internships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Enroll today and start your transformation from beginner to
            full-stack developer with StackUp Academy.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary">
              Join Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
