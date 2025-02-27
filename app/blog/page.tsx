import Head from "next/head";
import { getSortedPostsData } from "@/utils/getSortedPostsData";
import Link from "next/link";
import { ArrowRight, Home, Info, FileText, Send } from "lucide-react";

export default function Blog() {
  const allPostsData = getSortedPostsData();
  const [activeTab, setActiveTab] = ['Coding', () => {

  }];
  
  const categories = ['Coding', 'Startups', 'Tutorials', 'Indie Hacking'];
  
  const allArticles: any = {
    Coding: allPostsData,
  };
  return (
    <div className="flex-1">
      <div className="flex">
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-6 mb-6">
              <img
                src="/profpic.jpeg"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              I write about coding and being a{" "}
              <span className="text-blue-500">full-time</span> maker.
            </h1>
            <p className="text-gray-600">
              I write about coding, startups, and my journey as a full-time
              maker.
            </p>

            {/* Categories */}
            {/* <div className="border-b border-gray-200 mt-8">
              <nav className="flex space-x-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    // onClick={() => setActiveTab(category)}
                    className={`pb-4 px-1 transition-colors ${
                      activeTab === category
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div> */}

            {/* Articles */}
            <div className="mt-8 space-y-8">
              {allArticles[activeTab].map((article: any, index: number) => (
                <Link
                  href={`blog/${article.id}`}
                  key={article.id}
                  className="flex items-start gap-6 group cursor-pointer"
                >
                  <img
                    src={article.image ?? "https://picsum.photos/200/300?random=" + index}
                    alt={article.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <span className="text-gray-400 text-sm">
                      {article.date}
                    </span>
                    <h2 className="text-xl font-semibold mt-1 mb-2 group-hover:text-blue-500 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600">{article.excerpt}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
