import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

// Define interface for Feature
interface Feature {
  title: string;
  description: string;
  image: string;
}

// Define interface for Course
interface Course {
  title: string;
  description: string;
  hero: string;
  benefits: string[];
  features: Feature[];
  process: string[];
  technologies: string[];
}

// Define valid course keys
type CourseKey = 'full-stack-development' | 'nodejs-backend' | 'reactjs-frontend' | 'git-github';

// Define courses data
const coursesData: Record<CourseKey, Course> = {
  'full-stack-development': {
    title: 'Full Stack Development (MERN)',
    description: 'Learn MongoDB, Express.js, React, and Node.js to build scalable full stack web applications.',
    hero: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Master both frontend and backend development',
      'Build real-world, production-ready applications',
      'Gain hands-on experience with the MERN stack',
      'Boost career opportunities as a Full Stack Developer',
      'Work with databases, APIs, and deployment tools',
    ],
    features: [
      {
        title: 'Frontend Development',
        description: 'Learn React.js, Next.js, Tailwind CSS for creating modern UIs.',
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Backend Development',
        description: 'Build REST APIs and authentication systems with Node.js and Express.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Database Management',
        description: 'Work with MongoDB to store and manage application data efficiently.',
        image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Deployment & Hosting',
        description: 'Learn to deploy apps on cloud platforms like Vercel, Netlify, or AWS.',
        image: 'https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ],
    process: [
      'Introduction to Web Development',
      'Frontend Development with React & Next.js',
      'Backend Development with Node.js & Express',
      'Database Integration with MongoDB',
      'Authentication & Security',
      'API Development & Integration',
      'Deployment & Final Project',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'GitHub']
  },

  'nodejs-backend': {
    title: 'Node.js & Backend Development',
    description: 'Master server-side programming with Node.js, Express, REST APIs, and databases.',
    hero: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Understand server-side programming',
      'Work with REST APIs and authentication',
      'Gain database integration skills',
      'Enhance backend performance and security',
      'Prepare for backend developer roles',
    ],
    features: [
      {
        title: 'Express.js Framework',
        description: 'Build scalable server applications using Express.js.',
        image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'API Development',
        description: 'Design and implement RESTful APIs for real-world use cases.',
        image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Database Integration',
        description: 'Connect your backend with MongoDB or SQL databases.',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Authentication & Security',
        description: 'Implement JWT, OAuth, and secure your applications.',
        image: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ],
    process: [
      'Node.js Fundamentals',
      'Building with Express.js',
      'Working with Databases',
      'Authentication & Authorization',
      'REST API Development',
      'Error Handling & Security',
      'Deployment & Monitoring',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST API', 'JWT', 'OAuth']
  },

  'reactjs-frontend': {
    title: 'React.js Frontend Development',
    description: 'Build dynamic and responsive user interfaces with React.js and Next.js.',
    hero: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Create modern, component-based UIs',
      'Improve app performance with React hooks',
      'Build SEO-friendly apps using Next.js',
      'Understand state management techniques',
      'Work with APIs for data-driven apps',
    ],
    features: [
      {
        title: 'React Fundamentals',
        description: 'Learn JSX, props, state, and component lifecycle.',
        image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Hooks & Context API',
        description: 'Manage app state effectively with React hooks and Context.',
        image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Next.js Integration',
        description: 'Build SSR and SSG applications with Next.js.',
        image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'UI Frameworks',
        description: 'Use Tailwind CSS and shadcn/ui for responsive UI design.',
        image: 'https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ],
    process: [
      'React Basics & Setup',
      'Component Development',
      'State & Props Management',
      'Hooks & Context API',
      'Next.js Fundamentals',
      'API Integration',
      'Final Project',
    ],
    technologies: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'shadcn/ui']
  },

  'git-github': {
    title: 'Git & GitHub Mastery',
    description: 'Learn version control, branching strategies, and collaboration with GitHub.',
    hero: 'https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Understand version control concepts',
      'Work with branches and merge conflicts',
      'Collaborate on open-source projects',
      'Master GitHub workflows',
      'Improve team productivity with Git',
    ],
    features: [
      {
        title: 'Git Basics',
        description: 'Learn commits, branches, and repository management.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Collaboration with GitHub',
        description: 'Contribute to projects and manage pull requests.',
        image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Branching & Merging',
        description: 'Work with feature branches and resolve conflicts.',
        image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        title: 'Open Source Contribution',
        description: 'Participate in global projects using GitHub.',
        image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ],
    process: [
      'Introduction to Git',
      'Git Installation & Setup',
      'Basic Git Commands',
      'Branching & Merging',
      'Working with GitHub',
      'Pull Requests & Code Reviews',
      'Advanced Git Workflows',
    ],
    technologies: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD']
  },
}

export async function generateMetadata({ params }: { params: { course: CourseKey } }) {
  const course = coursesData[params.course]
  
  if (!course) {
    return {
      title: 'Course Not Found | StackUp Academy',
      description: 'The requested course could not be found.'
    }
  }
  
  return {
    title: `${course.title} | StackUp Academy`,
    description: course.description,
  }
}

export default function CoursePage({ params }: { params: { course: CourseKey } }) {
  const course = coursesData[params.course]
  
  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image 
              src={course.hero} 
              alt={course.title}
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-background/10" />
          </div>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {course.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" passHref>
                <Button size="lg">Enroll Now</Button>
              </Link>
              <Link href="#features" passHref>
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits</h2>
            <p className="text-muted-foreground text-lg">
              Discover how our {course.title.toLowerCase()} course can accelerate your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {course.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Course Modules</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive {course.title.toLowerCase()} training designed for practical learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {course.features.map((feature: Feature, index: number) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="relative h-60 md:h-auto md:w-1/2 rounded-lg overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Path</h2>
            <p className="text-muted-foreground text-lg">
              We follow a structured approach to ensure hands-on learning.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 border-l-2 border-primary space-y-12">
              {course.process.map((step: string, index: number) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[25px] flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-lg font-medium">
                    {index + 1}
                  </div>
                  <div className="pl-6">
                    <h3 className="text-xl font-semibold mb-2">{step}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies & Tools</h2>
            <p className="text-muted-foreground text-lg">
              You will gain hands-on experience with industry-leading technologies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {course.technologies.map((tech: string, index: number) => (
              <div key={index} className="bg-card rounded-full px-4 py-2 shadow-sm">
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Enroll?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join our {course.title.toLowerCase()} course today and level up your development career.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary" className="group">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
