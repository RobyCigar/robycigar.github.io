"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const convertDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

interface Post {
  id: string;
  title?: string;
  date: string;
  excerpt: string;
  image?: string;
  category: string;
  tags: string[];
}

interface BlogProps {
  initialPosts: Post[];
}

export default function Blog({ initialPosts }: any) {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Dynamically generate categories
  const categories = useMemo(() => {
    const categorySet = new Set([
      "All",
      ...initialPosts.map((post: Post) => post.category),
    ]);
    return Array.from(categorySet);
  }, [initialPosts]);

  // Filter posts based on active tab
  const filteredPosts = useMemo(() => {
    return activeTab === "All"
      ? initialPosts
      : initialPosts.filter((post: Post) => post.category === activeTab);
  }, [activeTab, initialPosts]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex-1">
      <div className="flex">
        <div className="flex-1 w-full max-w-4xl mx-auto py-12">
          {/* Header */}
          <div className="mb-12 px-8">
            <div className="flex items-center gap-6 mb-6">
              <img
                src="/profpic.jpeg"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              I write about my journey as a{" "}
              <span className="text-blue-500">full-time</span> maker.
            </h1>
            <p className="text-gray-600">
              Sharing insights, stories, and experiences from my personal and
              professional life.
            </p>

            {/* Categories */}
            <div className="border-b border-gray-200 mt-8">
              <nav className="flex space-x-8 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveTab(category);
                      setCurrentPage(1); // Reset to first page when changing category
                    }}
                    className={`pb-4 px-1 transition-colors whitespace-nowrap ${
                      activeTab === category
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>

            {/* Articles */}
            {currentPosts.length > 0 ? (
              <div className="mt-8 space-y-8">
                {currentPosts.map((article: Post, index: number) => (
                  <Link
                    href={`blog/${article.id}`}
                    key={article.id}
                    className="flex flex-col md:flex-row items-start gap-6 group cursor-pointer"
                  >
                    <img
                      src={
                        article.image ??
                        `https://picsum.photos/200/300?random=${index}-${article.id}`
                      }
                      alt={article.title || "Article image"}
                      className="w-full h-28 md:w-24 md:h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">
                          {convertDate(article.date)}
                        </span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mt-1 mb-2 group-hover:text-blue-500 transition-colors">
                        {article.title || "Untitled Post"}
                      </h2>
                      <p className="text-gray-600">{article.excerpt}</p>
                      {article.tags && (
                        <div className="mt-2 flex gap-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ArrowRight className="w-6 h-6 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-8">
                No posts found in this category.
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center space-x-2 mt-8">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white rounded-md shadow-sm border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`w-10 h-10 rounded-md ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    } shadow-sm border hover:bg-gray-50 transition-colors`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white rounded-md shadow-sm border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
