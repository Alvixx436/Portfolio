"use client";
import GalleryList from "./GalleryList";

function Gallery() {
  return (
    <>
      <div className="">
        <div className="card  shadow-sm  p-4 col-span-1 md:col-span-4 space-y-2 group animate__animated animate__fadeIn rounded-lg ">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold mb-3">
              <i className="fa-solid fa-gear"></i> Recent Projects
            </h2>
            <a
              className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
              href="/projects"
            >
              View All
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>

          <div className="w-full px-4 py-2 ">
            <GalleryList limit={3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
