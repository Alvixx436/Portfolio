import React from "react";
import GalleryList from "../components/GalleryList";

function Project() {
  return (
    <>
      <div className="flex items-center gap-4 mb-8 animate-fade-in">
        <a
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          href="/"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Home
        </a>
        <h1 className="text-2xl font-bold">All Projects</h1>
      </div>
      <div>
        <GalleryList limit={6} />
      </div>
    </>
  );
}

export default Project;
