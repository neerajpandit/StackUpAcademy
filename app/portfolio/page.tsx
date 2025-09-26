// import Link from 'next/link'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { ArrowRight } from 'lucide-react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export const metadata = {
//   title: 'Portfolio | Brijinnotech',
//   description: 'Explore our portfolio of successful digital projects including websites, mobile apps, and marketing campaigns.',
// }

// const projects = [
//   {
//     id: 'ecommerce-platform',
//     title: 'E-commerce Platform',
//     client: 'FashionTrend',
//     category: 'web-development',
//     tags: ['E-commerce', 'Web Development', 'UI/UX Design'],
//     image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Designed and developed a modern e-commerce platform with advanced filtering, seamless checkout, and inventory management.',
//     results: [
//       '40% increase in conversion rate',
//       '25% reduction in cart abandonment',
//       'Improved mobile sales by 35%'
//     ]
//   },
//   {
//     id: 'fitness-mobile-app',
//     title: 'Fitness Tracking App',
//     client: 'FitLife',
//     category: 'app-development',
//     tags: ['Mobile App', 'iOS', 'Android', 'Health Tech'],
//     image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Created a comprehensive fitness tracking application for iOS and Android with workout plans, progress tracking, and social features.',
//     results: [
//       '100,000+ downloads in first 3 months',
//       '4.8/5 average rating on app stores',
//       '68% daily active user retention'
//     ]
//   },
//   {
//     id: 'seo-campaign',
//     title: 'SEO Optimization Campaign',
//     client: 'LegalAdvisors',
//     category: 'seo-google-ads',
//     tags: ['SEO', 'Content Strategy', 'Law Firm'],
//     image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Implemented a comprehensive SEO strategy for a law firm, including technical optimizations, content creation, and link building.',
//     results: [
//       '156% increase in organic traffic',
//       'Improved rankings for 50+ keywords',
//       '75% growth in qualified leads'
//     ]
//   },
//   {
//     id: 'social-media-campaign',
//     title: 'Social Media Campaign',
//     client: 'EcoProducts',
//     category: 'smm-lead-generation',
//     tags: ['Social Media', 'Content Creation', 'Lead Generation'],
//     image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Developed and executed a multi-platform social media campaign for an eco-friendly product line, including content creation and influencer partnerships.',
//     results: [
//       '200% increase in social engagement',
//       '45% growth in follower base',
//       '3x increase in leads from social channels'
//     ]
//   },
//   {
//     id: 'restaurant-website',
//     title: 'Restaurant Website & Ordering System',
//     client: 'Gourmet Bistro',
//     category: 'web-development',
//     tags: ['Web Development', 'Online Ordering', 'Restaurant'],
//     image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Created a modern website with integrated online ordering system, reservation management, and menu customization for a fine dining restaurant.',
//     results: [
//       '85% increase in online reservations',
//       '30% of sales now coming from online ordering',
//       'Reduced operational costs by 15%'
//     ]
//   },
//   {
//     id: 'travel-app',
//     title: 'Travel Planning Application',
//     client: 'Wanderlust',
//     category: 'app-development',
//     tags: ['Mobile App', 'Travel', 'UI/UX Design'],
//     image: 'https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Developed a comprehensive travel planning app with itinerary creation, booking integration, and local recommendations features.',
//     results: [
//       '250,000+ downloads across platforms',
//       'Featured in App Store "Apps We Love"',
//       'Average user plans 2.3 trips per year'
//     ]
//   },
//   {
//     id: 'google-ads-campaign',
//     title: 'Google Ads Campaign',
//     client: 'PropertyInvest',
//     category: 'seo-google-ads',
//     tags: ['Google Ads', 'PPC', 'Real Estate'],
//     image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Designed and managed a targeted Google Ads campaign for a real estate investment firm, focusing on high-intent keywords and conversion optimization.',
//     results: [
//       '22% reduction in cost per acquisition',
//       '185% increase in qualified leads',
//       '3.2x return on ad spend'
//     ]
//   },
//   {
//     id: 'b2b-lead-generation',
//     title: 'B2B Lead Generation Program',
//     client: 'EnterpriseCloud',
//     category: 'smm-lead-generation',
//     tags: ['B2B Marketing', 'Lead Generation', 'SaaS'],
//     image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     description: 'Implemented a comprehensive B2B lead generation strategy for a SaaS company, including content marketing, email automation, and LinkedIn campaigns.',
//     results: [
//       '210% increase in marketing qualified leads',
//       '42% improvement in lead-to-demo conversion',
//       '28% reduction in customer acquisition cost'
//     ]
//   }
// ]

// export default function PortfolioPage() {
//   return (
//     <div className="min-h-screen pt-24">
//       {/* Hero Section */}
//       <section className="py-12 md:py-20 bg-secondary/30">
//         <div className="container px-4 md:px-6 mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Explore our collection of successful projects that showcase our expertise
//             and the transformative results we deliver for our clients.
//           </p>
//         </div>
//       </section>

//       {/* Portfolio Tabs */}
//       <section className="py-16 md:py-24">
//         <div className="container px-4 md:px-6 mx-auto">
//           <Tabs defaultValue="all" className="w-full">
//             <div className="flex justify-center mb-8">
//               <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
//                 <TabsTrigger value="all">All Projects</TabsTrigger>
//                 <TabsTrigger value="web-development">Web Development</TabsTrigger>
//                 <TabsTrigger value="app-development">App Development</TabsTrigger>
//                 <TabsTrigger value="seo-google-ads">SEO & Ads</TabsTrigger>
//                 <TabsTrigger value="smm-lead-generation">SMM & Lead Gen</TabsTrigger>
//               </TabsList>
//             </div>

//             {/* All Projects */}
//             <TabsContent value="all" className="mt-0">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects.map((project) => (
//                   <ProjectCard key={project.id} project={project} />
//                 ))}
//               </div>
//             </TabsContent>

//             {/* Web Development */}
//             <TabsContent value="web-development" className="mt-0">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects
//                   .filter((project) => project.category === 'web-development')
//                   .map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//               </div>
//             </TabsContent>

//             {/* App Development */}
//             <TabsContent value="app-development" className="mt-0">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects
//                   .filter((project) => project.category === 'app-development')
//                   .map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//               </div>
//             </TabsContent>

//             {/* SEO & Google Ads */}
//             <TabsContent value="seo-google-ads" className="mt-0">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects
//                   .filter((project) => project.category === 'seo-google-ads')
//                   .map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//               </div>
//             </TabsContent>

//             {/* SMM & Lead Generation */}
//             <TabsContent value="smm-lead-generation" className="mt-0">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects
//                   .filter((project) => project.category === 'smm-lead-generation')
//                   .map((project) => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-20 bg-primary">
//         <div className="container px-4 md:px-6 mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
//           <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
//             Let's create something amazing together. Contact us to discuss your project
//             and how we can help you achieve your business goals.
//           </p>
//           <Link href="/contact" passHref>
//             <Button size="lg" variant="secondary" className="group">
//               Get in Touch
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }

// function ProjectCard({ project }) {
//   return (
//     <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
//       <div className="relative h-48 w-full">
//         <Image 
//           src={project.image} 
//           alt={project.title}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <CardHeader className="pb-2">
//         <CardTitle>{project.title}</CardTitle>
//         <CardDescription>Client: {project.client}</CardDescription>
//       </CardHeader>
//       <CardContent className="flex-1">
//         <p className="text-muted-foreground mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag, index) => (
//             <Badge key={index} variant="outline">{tag}</Badge>
//           ))}
//         </div>
//         <div>
//           <h4 className="font-semibold mb-2">Results:</h4>
//           <ul className="space-y-1 text-sm">
//             {project.results.map((result, index) => (
//               <li key={index} className="flex items-start">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
//                 <span>{result}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Link href={`/portfolio/${project.id}`} passHref>
//           <Button variant="outline" className="w-full group">
//             View Case Study
//             <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   )
// }


import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: 'Portfolio | StackUp Academy',
  description: 'Explore our portfolio of successful digital projects including websites, mobile apps, and marketing campaigns.',
}

// Define interface for Project
interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  results: string[];
}

const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    client: 'FashionTrend',
    category: 'web-development',
    tags: ['E-commerce', 'Web Development', 'UI/UX Design'],
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Designed and developed a modern e-commerce platform with advanced filtering, seamless checkout, and inventory management.',
    results: [
      '40% increase in conversion rate',
      '25% reduction in cart abandonment',
      'Improved mobile sales by 35%'
    ]
  },
  {
    id: 'fitness-mobile-app',
    title: 'Fitness Tracking App',
    client: 'FitLife',
    category: 'app-development',
    tags: ['Mobile App', 'iOS', 'Android', 'Health Tech'],
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Created a comprehensive fitness tracking application for iOS and Android with workout plans, progress tracking, and social features.',
    results: [
      '100,000+ downloads in first 3 months',
      '4.8/5 average rating on app stores',
      '68% daily active user retention'
    ]
  },
  {
    id: 'seo-campaign',
    title: 'SEO Optimization Campaign',
    client: 'LegalAdvisors',
    category: 'seo-google-ads',
    tags: ['SEO', 'Content Strategy', 'Law Firm'],
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Implemented a comprehensive SEO strategy for a law firm, including technical optimizations, content creation, and link building.',
    results: [
      '156% increase in organic traffic',
      'Improved rankings for 50+ keywords',
      '75% growth in qualified leads'
    ]
  },
  {
    id: 'social-media-campaign',
    title: 'Social Media Campaign',
    client: 'EcoProducts',
    category: 'smm-lead-generation',
    tags: ['Social Media', 'Content Creation', 'Lead Generation'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Developed and executed a multi-platform social media campaign for an eco-friendly product line, including content creation and influencer partnerships.',
    results: [
      '200% increase in social engagement',
      '45% growth in follower base',
      '3x increase in leads from social channels'
    ]
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Website & Ordering System',
    client: 'Gourmet Bistro',
    category: 'web-development',
    tags: ['Web Development', 'Online Ordering', 'Restaurant'],
    image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Created a modern website with integrated online ordering system, reservation management, and menu customization for a fine dining restaurant.',
    results: [
      '85% increase in online reservations',
      '30% of sales now coming from online ordering',
      'Reduced operational costs by 15%'
    ]
  },
  {
    id: 'travel-app',
    title: 'Travel Planning Application',
    client: 'Wanderlust',
    category: 'app-development',
    tags: ['Mobile App', 'Travel', 'UI/UX Design'],
    image: 'https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Developed a comprehensive travel planning app with itinerary creation, booking integration, and local recommendations features.',
    results: [
      '250,000+ downloads across platforms',
      'Featured in App Store "Apps We Love"',
      'Average user plans 2.3 trips per year'
    ]
  },
  {
    id: 'google-ads-campaign',
    title: 'Google Ads Campaign',
    client: 'PropertyInvest',
    category: 'seo-google-ads',
    tags: ['Google Ads', 'PPC', 'Real Estate'],
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Designed and managed a targeted Google Ads campaign for a real estate investment firm, focusing on high-intent keywords and conversion optimization.',
    results: [
      '22% reduction in cost per acquisition',
      '185% increase in qualified leads',
      '3.2x return on ad spend'
    ]
  },
  {
    id: 'b2b-lead-generation',
    title: 'B2B Lead Generation Program',
    client: 'EnterpriseCloud',
    category: 'smm-lead-generation',
    tags: ['B2B Marketing', 'Lead Generation', 'SaaS'],
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Implemented a comprehensive B2B lead generation strategy for a SaaS company, including content marketing, email automation, and LinkedIn campaigns.',
    results: [
      '210% increase in marketing qualified leads',
      '42% improvement in lead-to-demo conversion',
      '28% reduction in customer acquisition cost'
    ]
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of successful projects that showcase our expertise
            and the transformative results we deliver for our clients.
          </p>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-2xl">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web-development">Web Development</TabsTrigger>
                <TabsTrigger value="app-development">App Development</TabsTrigger>
                <TabsTrigger value="seo-google-ads">SEO & Ads</TabsTrigger>
                <TabsTrigger value="smm-lead-generation">SMM & Lead Gen</TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects */}
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            {/* Web Development */}
            <TabsContent value="web-development" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === 'web-development')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            {/* App Development */}
            <TabsContent value="app-development" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === 'app-development')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            {/* SEO & Google Ads */}
            <TabsContent value="seo-google-ads" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === 'seo-google-ads')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            {/* SMM & Lead Generation */}
            <TabsContent value="smm-lead-generation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === 'smm-lead-generation')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Contact us to discuss your project
            and how we can help you achieve your business goals.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>Client: {project.client}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
        </div>
        <div>
          <h4 className="font-semibold mb-2">Results:</h4>
          <ul className="space-y-1 text-sm">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/portfolio/${project.id}`} passHref>
          <Button variant="outline" className="w-full group">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
