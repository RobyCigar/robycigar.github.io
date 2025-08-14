import React, { useEffect, useCallback } from "react";
import Image from "next/image";

// --- MODIFICATION 1: ADD 'type' PROP ---
interface ImageModalProps {
  src: string;
  type: "image" | "video";
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, type, onClose }) => {
  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Handle click outside
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  // Add escape key listener
  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleEscape]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      {/* --- MODIFICATION 2: CONDITIONAL RENDERING --- */}
      <div className="relative max-w-4xl max-h-[90vh] w-auto">
        {type === "image" ? (
          <Image
            src={src}
            alt="Gallery image"
            width={1200}
            height={800}
            // Use h-auto and max-h to respect viewport height
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg animate-in zoom-in-95 duration-300"
            quality={90} // Increased quality for better modal view
            priority
          />
        ) : (
          <video
            src={src}
            controls
            autoPlay
            // Use similar classes for consistent sizing
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg animate-in zoom-in-95 duration-300"
          >
            Browser Anda tidak mendukung tag video.
          </video>
        )}
        <button
          className="absolute -top-2 -right-2 md:top-4 md:right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
