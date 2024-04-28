import React, { useEffect } from "react";

import useFetch from "../hooks/UseFetch";
import SearchGallery from "./SearchGallery";
const API_KEY = "Vq-91FazZn9Q4dhAJQL1MOWQ0al0C8-PmTrp5-b4UdE";
const IMAGE_COUNT = 40;

const Gallery = () => {
  const { data, hasError, isLoading } = useFetch(
    `https://api.unsplash.com/photos?client_id=${API_KEY}&per_page=40`
  );

  return (
    <div className="p-4">
      <SearchGallery />
      <h1 className="text-center mb-8 font-bold text-4xl mt-4">Galeria</h1>

      <div className="flex flex-wrap justify-center gap-4 ">
        {data?.map((image) => (
          <img
            key={image.id}
            className="w-[350px] border-2 border-purple-400 rounded-md hover:animate-pulse "
            src={image.urls.regular}
            alt={image.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
