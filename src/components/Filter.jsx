import React from "react";
import { genres } from "../data/genres";

const Filter = ({ selectedGenre, setSelectedGenre }) => {
  return (
    <div className=" flex md:gap-5 gap-2 flex-wrap md:px-32 px-3 mt-10">
      <button
        className={` md:w-32 md:h-20 block px-4 py-2 rounded-md text-sm font-medium text-gray-700  hover:bg-gray-300 focus:relative ${
          selectedGenre == 0 ? "active" : "bg-gray-200"
        }`}
        onClick={() => setSelectedGenre(0)}>
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          className={` md:w-32 md:h-20 block px-4 py-2 rounded-md text-sm font-medium text-gray-700  hover:bg-gray-300 focus:relative ${
            selectedGenre == genre.id ? "active" : "bg-gray-200"
          }`}
          onClick={() => setSelectedGenre(genre.id)}>
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
