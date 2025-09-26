import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stackupacademy.in"),
  title:
    "StackUp Academy | Best Web Development Courses – Full Stack, Frontend, Backend, React & Node.js",
  description:
    "StackUp Academy offers expert-led offline coaching in Lucknow for Full Stack, Frontend, Backend, React, and Node.js Development. Learn MERN Stack, build real-world projects, and become job-ready.",
  keywords:
    "StackUp Academy, Full Stack Development Course Lucknow, Frontend Development, Backend Development, MERN Stack, Web Development Coaching, Learn React, Learn Node.js, React Course Lucknow, Node.js Training Lucknow, Offline Web Development Coaching",
  icons: {
    icon: "/stackupacademy_favicon.ico", // update with your favicon path
  },
  openGraph: {
    title:
      "StackUp Academy | Full Stack, Frontend, Backend, React & Node.js Courses in Lucknow",
    description:
      "Join StackUp Academy in Lucknow for hands-on coaching in Full Stack, Frontend, Backend, React, and Node.js. Build projects with MongoDB, Express.js, React, and Node.js.",
    url: "https://www.stackupacademy.in", // your actual domain
    siteName: "StackUp Academy",
    images: [
      {
        url: "https://www.stackupacademy.in/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "StackUp Academy - Web Development Coaching in Lucknow",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "StackUp Academy | Web Development Coaching – Full Stack, React & Node.js",
    description:
      "Offline coaching in Lucknow for Full Stack, Frontend, Backend, React, and Node.js development. Learn MERN Stack and become a professional developer with StackUp Academy.",
    images: ["https://www.stackupacademy.in/og-image.jpg"], // replace with your Twitter OG image
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/stackupacademy_favicon.ico" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "StackUp Academy",
              alternateName: "StackUp, StackUpAcademy",
              url: "https://www.stackupacademy.in",
              logo: "https://www.stackupacademy.in/stackupacademy_logo.png",
              sameAs: [
                "https://www.facebook.com/stackupacademy",
                "https://www.linkedin.com/company/stackupacademy",
                "https://www.instagram.com/stackupacademy/",
              ],
              description:
                "StackUp Academy provides offline coaching in Lucknow for Full Stack, Frontend, Backend, React, and Node.js Web Development. Learn MERN Stack and become job-ready.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}