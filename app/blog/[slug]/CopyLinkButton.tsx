"use client"
import React from 'react'
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
// Utility function for copy to clipboard
const useCopyToClipboard = (text: string) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [text]);

  return { isCopied, copyToClipboard };
};

function CopyLinkButton() {
  // Copy to clipboard hook for page URL
  const { isCopied, copyToClipboard } = useCopyToClipboard(
    typeof window !== "undefined" ? window.location.href : ""
  );
  return (
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      aria-label="Copy page link"
    >
      {isCopied ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <Copy className="w-5 h-5" />
      )}
      <span>{isCopied ? "Copied!" : "Copy Link"}</span>
    </button>
  );
}

export default CopyLinkButton