// lib/blogData.ts

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  tags?: string[]
  author: {
    name: string
    position: string
    avatar: string
    bio: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "introduction-to-full-stack-development",
    title: "Introduction to Full Stack Development",
    excerpt:
      "Full Stack Development combines frontend, backend, and databases to build complete web applications. Learn the essentials every developer should know.",
    content: `
      <p>Full Stack Development refers to the ability to work on both the frontend and backend of an application. A Full Stack Developer is skilled in designing user interfaces, writing server-side logic, and integrating with databases.</p>
      <p>Key technologies include:</p>
      <ul>
        <li>Frontend: HTML, CSS, JavaScript, React.js</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB, PostgreSQL, MySQL</li>
      </ul>
      <p>Mastering Full Stack Development makes you versatile and highly valuable in the industry.</p>
    `,
    category: "Full Stack",
    date: "September 20, 2025",
    readTime: "6 min read",
    image: "/full-stack.jpeg",
    featured: true,
    tags: ["Full Stack", "Web Development", "MERN"],
    author: {
      name: "Rohit Sharma",
      position: "Senior Full Stack Engineer",
      avatar: "/user_icon.png",
      bio: "Rohit is a full stack developer with 7+ years of experience building scalable web applications using the MERN stack."
    }
  },
  {
    id: 2,
    slug: "getting-started-with-nodejs",
    title: "Getting Started with Node.js",
    excerpt:
      "Node.js allows developers to use JavaScript on the server-side. Here’s how you can get started with building your first Node.js application.",
    content: `
      <p>Node.js is a runtime environment that enables running JavaScript outside the browser. It’s widely used for backend services, APIs, and microservices.</p>
      <p>Popular features of Node.js:</p>
      <ul>
        <li>Event-driven and non-blocking I/O</li>
        <li>Lightweight and fast</li>
        <li>Huge ecosystem with npm</li>
      </ul>
      <p>Example: Creating a simple server with Express.js is often the first step to explore Node.js.</p>
    `,
    category: "Node.js",
    date: "September 22, 2025",
    readTime: "5 min read",
    image: "/nodejs.png",
    featured: true,
    tags: ["Node.js", "Backend", "JavaScript"],
    author: {
      name: "Aisha Khan",
      position: "Backend Engineer",
      avatar: "/user_icon.png",
      bio: "Aisha specializes in backend development and cloud-native applications, with deep expertise in Node.js and microservices."
    }
  },
  {
    id: 3,
    slug: "mastering-reactjs",
    title: "Mastering React.js for Frontend Development",
    excerpt:
      "React.js is one of the most popular frontend libraries for building modern, scalable, and interactive UIs.",
    content: `
      <p>React.js, developed by Facebook, has transformed frontend development by introducing component-based architecture and a virtual DOM for performance optimization.</p>
      <p>Why React.js?</p>
      <ul>
        <li>Reusable components</li>
        <li>Fast rendering with Virtual DOM</li>
        <li>Rich ecosystem and community</li>
      </ul>
      <p>React is often the go-to choice for building SPAs (Single Page Applications) and is an essential skill for full stack developers.</p>
    `,
    category: "React.js",
    date: "September 25, 2025",
    readTime: "7 min read",
    image: "/reactjs.jpg",
    featured: false,
    tags: ["React.js", "Frontend", "JavaScript"],
    author: {
      name: "Sanjay Mehta",
      position: "Frontend Architect",
      avatar: "/user_icon.png",
      bio: "Sanjay is passionate about crafting user-friendly interfaces using React.js and Next.js."
    }
  },
  {
    id: 4,
    slug: "version-control-with-git-and-github",
    title: "Version Control with Git and GitHub",
    excerpt:
      "Learn how Git and GitHub streamline collaboration, version control, and deployment in modern software development.",
    content: `
      <p>Git is a distributed version control system that allows developers to track changes in code and collaborate effectively. GitHub extends Git with cloud-based collaboration tools.</p>
      <p>Key Git commands every developer should know:</p>
      <ul>
        <li><code>git init</code> – Initialize a repository</li>
        <li><code>git add</code> – Stage changes</li>
        <li><code>git commit</code> – Commit changes</li>
        <li><code>git push</code> – Push to remote repository</li>
        <li><code>git pull</code> – Fetch and merge changes</li>
      </ul>
      <p>GitHub adds features like pull requests, issues, CI/CD, and project management tools that enhance teamwork.</p>
    `,
    category: "Git/GitHub",
    date: "September 27, 2025",
    readTime: "8 min read",
    image: "/git.png",
    featured: false,
    tags: ["Git", "GitHub", "Collaboration", "Version Control"],
    author: {
      name: "Neha Verma",
      position: "DevOps Engineer",
      avatar: "/user_icon.png",
      bio: "Neha is a DevOps engineer with a strong background in Git, GitHub Actions, and CI/CD pipelines."
    }
  }
]

// --- Helpers ---
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getSimilarPosts(currentPost: BlogPost): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, 3)
}
