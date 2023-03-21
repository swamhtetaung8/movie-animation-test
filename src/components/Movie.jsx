import React from "react";
import { motion } from "framer-motion";
const Movie = ({ backdrop_path, original_title, release_date }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="border border-gray-800 rounded-md overflow-hidden w-32 md:w-auto">
      <img
        alt="Art"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        className="h-auto md:h-64 w-full object-cover sm:h-80 lg:h-96"
      />

      <div className="md:p-5 p-2">
        <h3 className=" md:text-lg text-sm font-bold text-gray-900 sm:text-xl truncate">
          {original_title}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700 uppercase">{release_date}</p>
      </div>
    </motion.div>
  );
};

export default Movie;
