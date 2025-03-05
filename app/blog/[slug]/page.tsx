import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { getPostData, getAllPostIds } from "@/utils/getSortedPostsData";
import { Calendar, User, Tag } from "lucide-react";

// Utility function to convert date
const convertDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

// Types for better type safety
interface PostData {
  title: string;
  date: string;
  desc: string;
  contentHtml: string;
  tags?: string[];
}

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostProps) {
  const postData: PostData = await getPostData(params.slug);

  const SEO = {
    title: postData.title,
    description: postData.desc,
    openGraph: {
      type: "website",
      url: "https://www.rabihutomo.com/og-image.png",
      title: postData.title,
      description: postData.desc,
    },
  };

  // Generate a random background image URL from Lorem Picsum
  const backgroundImageUrl = `https://picsum.photos/seed/${params.slug}/1600/900`;

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
      <main
        className="relative min-h-screen bg-cover bg-center bg-no-repeat transition-colors duration-300"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.9)), url(${backgroundImageUrl})`,
        }}
      >
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

        <div className="container mx-auto px-4 py-12 lg:px-8 xl:max-w-5xl relative z-10">
          <article
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-xl 
            overflow-hidden p-6 sm:p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
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

                {/* Tags */}
                {postData.tags && postData.tags.length > 0 && (
                  <div className="flex items-center space-x-2">
                    <Tag className="w-5 h-5" />
                    <div className="flex space-x-2">
                      {postData.tags.map((tag) => (
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
              className="prose dark:prose-invert prose-lg max-w-none 
              prose-headings:text-gray-900 dark:prose-headings:text-gray-100
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-gray-900 dark:prose-strong:text-gray-100
              prose-code:text-gray-800 dark:prose-code:text-gray-200
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
              selection:bg-blue-100 dark:selection:bg-blue-900"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>
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
