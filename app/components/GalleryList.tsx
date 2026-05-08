"use client";

import React, { useMemo, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { images } from "../type/image";

function GalleryList({ limit }: { limit?: number } = {}) {
  const itemsPerPage = limit ?? 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return images.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      {/* GRID */}
      <div
        className="
        grid 
        gap-4 
        sm:grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3
        max-w-7xl 
        mx-auto
        items-stretch
      "
      >
        {paginatedData.map((item, index) => (
          <div key={index} className="hover-3d w-full h-full">
            <figure className="w-full h-full">
              <Card
                className="
                flex flex-col 
                h-full 
                overflow-hidden 
                rounded-2xl 
                shadow-sm 
                hover:shadow-lg 
                transition-all
                duration-300
                pb-6 pt-2
              "
              >
                {/* Image */}
                <div className="relative h-36 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <CardHeader className="flex-1 space-y-3">
                  <CardTitle className="text-lg">{item.title}</CardTitle>

                  <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                {/* Footer */}
                <CardFooter className="mt-auto">
                  <a href={`/projects/${item.ID}`} className="w-full">
                    <Button className="w-full text-white">View Project</Button>
                  </a>
                </CardFooter>
              </Card>
            </figure>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {/* Prev */}
        <Button
          variant="outline"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </Button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              onClick={() => goToPage(page)}
              className="w-10"
            >
              {page}
            </Button>
          );
        })}

        {/* Next */}
        <Button
          variant="outline"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default GalleryList;
