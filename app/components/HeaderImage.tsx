"use client";

import { useState } from "react";

function HeaderImage() {
  return (
    <>
      <figure className="hover-gallery max-w-60">
        <img
          className="rounded-lg w-30 h-35 md:w-40 md:h-40 object-cover flex-shrink-0"
          src="/image/profile.jpeg"
        />
        <img
          className="rounded-lg w-30 h-35 md:w-40 md:h-40 object-cover flex-shrink-0"
          src="/image/hvprofile.png"
        />
      </figure>
    </>
  );
}

export default HeaderImage;
