import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { getBlogPost, getSimilarPosts } from "@/lib/blogData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | StackUp Academy Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | StackUp Academy Blog`,
    description:
      post.excerpt || post.content?.substring(0, 160).replace(/<[^>]*>/g, ""),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }
  const similarPosts = getSimilarPosts(post);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <Link
              href="/blog"
              className="flex items-center text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Articles
            </Link>
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-6">
              {post.title}
            </h1>
            <div className="flex items-center mb-6">
              <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author.position}
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-[300px] md:h-[500px] w-full mt-6">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content || "<p>No content available.</p>",
                  }}
                />
              </article>

              {/* Tags */}
              {post.tags && (
                <div className="mt-12">
                  <h3 className="font-medium mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="mt-12">
                <h3 className="font-medium mb-3">Share this article:</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="mr-4 relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {post.author.position}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>

              {/* Similar Articles */}
              {similarPosts.length > 0 && (
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    Similar Articles
                  </h3>
                  <div className="space-y-6">
                    {similarPosts.map((similar) => (
                      <div key={similar.id} className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={similar.image}
                            alt={similar.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/blog/${similar.slug}`}
                            className="font-medium hover:text-primary"
                          >
                            {similar.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {similar.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Coding Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get tutorials, career tips, and industry insights delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
