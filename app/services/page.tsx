import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Services | StackUp Academy',
  description: 'Explore our comprehensive range of digital services including web development, app development, SEO, social media marketing, and more.',
}

const services = [
  {
    id: 'web-development',
    title: 'Web Design & Development',
    shortDesc: 'Custom website solutions designed for growth and engagement',
    description: 'We create responsive, user-friendly websites that are both visually stunning and functionally powerful. From corporate websites to e-commerce platforms, we build digital experiences that convert visitors into customers.',
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Responsive Design',
      'Custom Web Applications',
      'E-commerce Solutions',
      'Content Management Systems',
      'UI/UX Design',
      'Website Maintenance'
    ]
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    shortDesc: 'iOS and Android apps built for seamless user experiences',
    description: 'Our expert developers build native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices. We focus on performance, usability, and design to create apps that users love.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Testing & QA',
      'App Store Optimization',
      'Ongoing Support & Updates'
    ]
  },
  {
    id: 'seo-google-ads',
    title: 'SEO & Google Ads',
    shortDesc: 'Increase visibility and drive targeted traffic to your business',
    description: 'Our data-driven SEO and Google Ads strategies help improve your search visibility, drive targeted traffic, and maximize ROI on your advertising spend. We use the latest techniques and tools to keep you ahead of the competition.',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Keyword Research & Strategy',
      'On-page & Technical SEO',
      'Content Optimization',
      'Google Ads Campaign Management',
      'PPC Optimization',
      'SEO Audits & Reports'
    ]
  },
  {
    id: 'smm-lead-generation',
    title: 'SMM & Lead Generation',
    shortDesc: 'Engage your audience and convert prospects into customers',
    description: 'Our social media marketing and lead generation services help you engage with your audience, build brand awareness, and convert prospects into loyal customers. We create compelling content and implement proven lead generation tactics.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Social Media Strategy',
      'Content Creation',
      'Community Management',
      'Paid Social Campaigns',
      'Lead Capture Systems',
      'Email Marketing Automation'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end digital solutions to help businesses establish a strong online presence,
            engage with their target audience, and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-60 w-full">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/services/${service.id}`} passHref>
                    <Button className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose StackUp Academy?</h2>
            <p className="text-muted-foreground text-lg">
              We're more than just a service provider – we're your strategic partner in digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-muted-foreground">
                Our team of skilled professionals brings years of experience and specialized knowledge across various digital domains.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cutting-edge Technology</h3>
              <p className="text-muted-foreground">
                We stay updated with the latest technologies and industry trends to deliver innovative and future-proof solutions.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                We create customized strategies and solutions that align with your specific business goals and target audience.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2a10 10 0 1 0 10 10H12V2Z"/><path d="M21.18 10.43A10 10 0 0 0 12 2v8.43z"/><path d="M12 6.8v5.2H6.8"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-driven Approach</h3>
              <p className="text-muted-foreground">
                Our decisions and strategies are backed by comprehensive data analysis and research for optimal results.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Support</h3>
              <p className="text-muted-foreground">
                We provide responsive customer support and maintain open communication throughout our partnership.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Our track record speaks for itself, with numerous success stories and satisfied clients across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project and how we can help your business thrive in the digital landscape.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" variant="secondary">
                Contact Us Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}