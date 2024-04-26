import React, { useEffect } from "react";

import useFetch from "../hooks/UseFetch";
const API_KEY = "Vq-91FazZn9Q4dhAJQL1MOWQ0al0C8-PmTrp5-b4UdE";
const IMAGE_COUNT = 40;

const Gallery = () => {
  const { data, hasError, isLoading } = useFetch(
    `https://api.unsplash.com/photos?client_id=${API_KEY}&per_page=40`
  );

  const bio = data?.user?.bio;
  return (
    <div>
      <h1>Galeria</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {data?.map((image) => (
          <img
            className="w-[150px] "
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
