import React, { useState } from "react";

const SearchGallery = () => {
  const [search, setSearch] = useState("");
  return (
    <form className="text-center mt-10 ">
      <input
        className="w-[350px] border"
        type="text"
        placeholder="Buscar Imagenes"
      />
      <button className="bg-indigo-400" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchGallery;
