"use client";

import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function GalleryList() {
  const images = [
    {
      image: "/image/ts1.png",
      title: "Ticketing System",
      description: "Manage and track support tickets efficiently.",
    },
    {
      image: "/image/Hr1.png",
      title: "HR Management System",
      description: "Centralized employee and payroll management.",
    },
    {
      image: "/image/Ms1.png",
      title: "Production Monitoring System",
      description: "Real-time monitoring of production workflows.",
    },
  ];

  return (
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
      {images.map((item, index) => (
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
              transition-shadow 
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
                <Button className="w-full text-white">View Project</Button>
              </CardFooter>
            </Card>
          </figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default GalleryList;
