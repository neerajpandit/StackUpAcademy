"use client";

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

// Define interface for Testimonial
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Satyam",
    position: "Founder",
    company: "Sun Solar Industry",
    avatar: "/user_icon.png", // Replace with actual image URL or path
    content:
      "Partnering with StackUp Academy was a game-changer for Sun Solar Industry. They delivered a clean, responsive website tailored to our solar panel solutions and executed a powerful SEO strategy that boosted our organic traffic by over 150% within just three months. Their expertise and commitment truly set them apart.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Abhishek Sahani",
    position: "Founder & Director",
    company: "Svatsalya Academy",
    avatar: "/user_icon.png", // Use a default icon since no image is available
    content:
      "We approached StackUp Academy to design a modern, responsive website for Svatsalya Academy, and the results were outstanding. The team created a user-friendly platform that showcases our school’s values, achievements, and admissions process perfectly. Parents have found it much easier to connect with us online since the site went live.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. Ramesh Kumar",
    position: "Owner",
    company: "Ramesh Jewellers",
    avatar: "/user_icon.png", // Use a default icon since no image is available
    content:
      "StackUp Academy created a beautiful website for our jewelry shop. It's helped increase customer interest and looks great on mobile too.",
    rating: 5,
  },
  {
    id: 6,
    name: "Mr. Sandeep Pandey",
    position: "Founder & Principal",
    company: "Shiksha Deep School",
    avatar: "/user_icon.png", // Use a default icon since no image is available
    content:
      "Our new school website by StackUp Academy is clean, easy to use, and very helpful for parents and staff alike.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover why businesses trust StackUp Academy for their digital
            solutions
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative"
        >
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="italic text-muted-foreground">
                    “{testimonial.content}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                    />
                    <AvatarFallback>
                      {testimonials[activeIndex].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].position},{" "}
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                <p className="italic text-muted-foreground">
                  “{testimonials[activeIndex].content}”
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-4 gap-2">
              <Button variant="outline" size="icon" onClick={handlePrev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {testimonials.map((_: Testimonial, index: number) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-8 h-8 p-0 ${
                    activeIndex === index
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button variant="outline" size="icon" onClick={handleNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
