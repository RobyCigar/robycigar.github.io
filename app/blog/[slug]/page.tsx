import React from "react";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  getPostData,
  getAllPostIds,
  getSortedPostsData,
} from "@/utils/getSortedPostsData";
import {
  Calendar,
  User,
  Tag,
  Home,
  ChevronRight,
  Copy,
  Check,
  BookOpen,
} from "lucide-react";
// import { motion } from "framer-motion";
import CopyLinkButton from "./CopyLinkButton";

// Utility function to convert date
const convertDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

// Utility function for reading time estimation
const estimateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};


// Types for better type safety
interface PostData {
  id: string;
  image?: string;
  title: string;
  date: string;
  desc: string;
  contentHtml: string;
  tags?: string[];
  slug: string;
}


// Dynamic Breadcrumb Component
const Breadcrumb = ({
  postTitle,
  slug,
}: {
  postTitle: string;
  slug: string;
}) => {
  return (
    <nav
      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link
        href="/blog"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Blog
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="font-semibold truncate max-w-[200px]">{postTitle}</span>
    </nav>
  );
};

// Related Posts Component
const RelatedPosts = ({
  currentSlug,
  posts,
}: {
  currentSlug: string;
  posts: PostData[];
}) => {
  const currentPost = posts.find((p) => p.id === currentSlug);
  const relatedPosts = posts
    .filter(
      (post) =>
        post.id !== currentSlug &&
        post.tags?.some((tag) => currentPost?.tags?.includes(tag))
    )
    .slice(0, 3);
  if (relatedPosts.length === 0) return null;

  return (
    <section className="my-12 border-t pt-8 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Related Posts
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <Link href={`/blog/${post.id}`} className="block">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.desc}
              </p>
              <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {convertDate(post.date)}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default async function Post({ params }: any) {
  const slug = await params.slug;
  const postData: any = await getPostData(slug);
  const allPosts: any = await getSortedPostsData();

  const SEO = {
    title: postData.title,
    description: postData.desc,
    openGraph: {
      type: "website",
      url: `https://www.rabihutomo.com/blog/${slug}`,
      title: postData.title,
      description: postData.desc,
    },
  };

  // Generate a random background image URL from Lorem Picsum
  const backgroundImageUrl = `https://picsum.photos/seed/${slug}/1600/900`;

  // Reading time calculation
  const readingTime = estimateReadingTime(
    postData.contentHtml.replace(/<[^>]*>/g, "")
  );

  console.log({postData})

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <NextSeo
          title={SEO.title}
          description={SEO.description}
          openGraph={SEO.openGraph}
        />
      </Head>
      <main className="relative min-h-screen bg-cover bg-center bg-no-repeat transition-colors duration-300 max-w-[1200px] mx-auto my-4">
        {/* Decorative Emoji Floating Elements */}
        <div className="fixed top-20 left-10 text-6xl opacity-20 rotate-12 hidden md:block">
          🚀
        </div>
        <div className="fixed top-40 right-10 text-7xl opacity-20 -rotate-12 hidden md:block">
          💡
        </div>
        <div className="fixed bottom-20 left-20 text-5xl opacity-20 rotate-6 hidden md:block">
          ✨
        </div>

        <div className="">
          <article
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-xl 
            overflow-hidden p-6 sm:p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            {/* Breadcrumb */}
            <Breadcrumb postTitle={postData.title} slug={slug} />
            {/* Header Image */}
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
              {postData.image ? (
                <img
                  src={postData.image}
                  alt={`${postData.title} header image`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <img
                  src={backgroundImageUrl}
                  alt={`${postData.title} header image`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
            {/* Header Section */}
            <header className="mb-10 border-b pb-6 dark:border-gray-700 relative">
              <div className="absolute top-0 right-0 text-4xl">
                {postData.tags && postData.tags.includes("tech") ? "💻" : "📝"}
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 
                leading-tight mb-6 transition-colors duration-300 relative"
              >
                <span className="block">
                  {postData.title}
                  <span className="text-2xl ml-3 align-top">
                    {Math.random() > 0.5 ? "🌟" : "🔥"}
                  </span>
                </span>
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{convertDate(postData.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Rabih Utomo 👨‍💻</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{readingTime} min read</span>
                </div>

                {/* Copy Link Button */}
                <CopyLinkButton />

                {/* Tags */}
                {postData.tags && postData.tags.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <Tag className="w-5 h-5" />
                    <div className="flex space-x-2">
                      {postData.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </header>

            {/* Content Section */}
            <div
              className="prose text-base md:text-md dark:prose-invert prose-lg max-w-none 
              prose-headings:text-gray-900 dark:prose-headings:text-gray-100
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-gray-900 dark:prose-strong:text-gray-100
              prose-code:text-gray-800 dark:prose-code:text-gray-200
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
              selection:bg-blue-100 dark:selection:bg-blue-900"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>

          {/* Related Posts */}
          <RelatedPosts currentSlug={slug} posts={allPosts} />
        </div>

        {/* Footer Decoration */}
        <div className="fixed bottom-10 right-10 text-4xl opacity-20 hidden md:block">
          🌈
        </div>
      </main>
    </>
  );
}

// Static params generation remains the same
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}
