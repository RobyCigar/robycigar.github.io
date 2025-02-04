import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  // Generate page numbers to display
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      // First page always shown
      pages.push(1);

      // Logic for middle pages
      if (currentPage > 3) pages.push("...");

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");

      // Last page always shown
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center space-x-1">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-1 text-gray-500">
              ...
            </span>
          );
        }

        return (
          <Link
            key={page}
            href={`${baseUrl}?page=${page}`}
            className={`
              px-3 py-1 rounded
              ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {page}
          </Link>
        );
      })}

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
      )}
    </div>
  );
}
