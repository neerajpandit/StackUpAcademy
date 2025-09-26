import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About Us | StackUp Academy",
  description:
    "Learn about StackUp Academy, our mission, vision, and the values driving our training programs.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About StackUp Academy
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At StackUp Academy, we empower learners with hands-on training
                in modern technologies like React, Node.js, and the MERN stack.
                Our mission is to help you stack your skills and build your
                future in the ever-growing tech industry.
              </p>
              <Link href="/contact" passHref>
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/react-node.png"
                alt="Students learning coding together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To equip aspiring developers with the practical skills and
                confidence they need to excel in software development. We focus
                on industry-driven curriculum, hands-on projects, and real-world
                applications.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading coding academy for MERN and full-stack
                training, recognized for producing job-ready developers who can
                innovate and thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We provide high-quality training that prepares you for
                real-world success.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white">
                💡
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We adopt the latest tools, frameworks, and methods to keep our
                learners ahead of the curve.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We build a supportive community where learners and mentors grow
                together.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white">
                🌟
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We stay transparent, honest, and committed to your learning
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-blue-500">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Stack Your Skills?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join StackUp Academy today and start your journey toward becoming a
            professional full-stack developer.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
