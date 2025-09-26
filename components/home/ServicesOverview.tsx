"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { 
  Code, 
  Smartphone, 
  Search, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const services = [
  {
    title: "Web Design & Development",
    description: "Custom website solutions tailored to your business needs, with responsive design, modern UX/UI, and powerful functionality.",
    icon: <Code className="h-8 w-8" />,
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.",
    icon: <Smartphone className="h-8 w-8" />,
    href: "/services/app-development",
  },
  {
    title: "SEO & Google Ads",
    description: "Data-driven strategies to improve your search visibility, drive targeted traffic, and maximize ROI on your advertising spend.",
    icon: <Search className="h-8 w-8" />,
    href: "/services/seo-google-ads",
  },
  {
    title: "SMM & Lead Generation",
    description: "Engage your audience with compelling social media content and convert prospects into loyal customers with proven lead gen tactics.",
    icon: <BarChart3 className="h-8 w-8" />,
    href: "/services/smm-lead-generation",
  }
]

const ServicesOverview = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 z-0"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Our Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Empowering businesses with innovative technology and strategic digital services to drive growth and success.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-background/95 backdrop-blur-sm border border-primary/10 transition-all hover:shadow-xl hover:border-primary/30">
                <CardHeader>
                  <div className="p-3 w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={service.href} passHref>
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

      {/* CSS for subtle animations */}
      <style jsx>{`
        .bg-background\/95 {
          background-color: rgba(var(--background), 0.95);
        }
      `}</style>
    </section>
  )
}

export default ServicesOverview