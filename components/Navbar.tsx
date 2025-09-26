"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Search,
  BarChart3,
  Users,
} from "lucide-react";
  import { Layers, GitBranch, Globe } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Web Design & Development",
      href: "/services/web-development",
      description:
        "Custom website solutions designed for growth and engagement",
      icon: <Code className="h-5 w-5 text-primary mr-2" />,
    },
    {
      title: "Mobile App Development",
      href: "/services/app-development",
      description: "iOS and Android apps built for seamless user experiences",
      icon: <Smartphone className="h-5 w-5 text-primary mr-2" />,
    },
    {
      title: "SEO & Google Ads",
      href: "/services/seo-google-ads",
      description:
        "Increase visibility and drive targeted traffic to your business",
      icon: <Search className="h-5 w-5 text-primary mr-2" />,
    },
    {
      title: "SMM & Lead Generation",
      href: "/services/smm-lead-generation",
      description: "Engage your audience and convert prospects into customers",
      icon: <BarChart3 className="h-5 w-5 text-primary mr-2" />,
    },
  ];


  const courses = [
    {
      title: "Full Stack Development (MERN) Training",
      href: "/courses/full-stack-development",
      description:
        "Learn MongoDB, Express.js, React, and Node.js to build scalable web applications.",
      icon: <Layers className="h-5 w-5 text-primary mr-2" />,
    },
    {
      title: "Node.js & Backend Development Training",
      href: "/courses/nodejs-backend",
      description:
        "Master server-side development with Node.js, Express, REST APIs, and databases.",
      icon: <Code className="h-5 w-5 text-primary mr-2" />,
    },
    {
      title: "React.js Frontend Development Training",
      href: "/courses/reactjs-frontend",
      description:
        "Build dynamic and responsive user interfaces with React.js and Next.js.",
      icon: <Globe className="h-5 w-5 text-primary mr-2" />,
    },
    {
      title: "Git & GitHub Mastery Training",
      href: "/courses/git-github",
      description:
        "Learn version control, branching strategies, and collaboration with GitHub.",
      icon: <GitBranch className="h-5 w-5 text-primary mr-2" />,
    },
  ];


  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background shadow-md py-2" : " py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            <Image
              src="/stackupacademy2_logo.png" // Make sure the image is in public/images/
              alt="Logo"
              width={200}
              height={200}
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:bg-accent disabled:pointer-events-none disabled:opacity-50",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:bg-accent disabled:pointer-events-none disabled:opacity-50",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Cources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {courses.map((cource) => (
                      <li key={cource.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={cource.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center">
                              {cource.icon}
                              <div className="text-sm font-medium leading-none">
                                {cource.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {cource.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center">
                              {service.icon}
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/process" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:bg-accent disabled:pointer-events-none disabled:opacity-50",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    Process
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:bg-accent disabled:pointer-events-none disabled:opacity-50",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:bg-accent disabled:pointer-events-none disabled:opacity-50",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-2">
            <Link href="/contact" passHref>
              <Button className="bg-primary hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="py-2">
              <div className="flex items-center justify-between cursor-pointer">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-muted">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block py-1 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      {service.icon}
                      <span>{service.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/process"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="/portfolio"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="block py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              passHref
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
