import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../api/functions";
import Filter from "../components/Filter";
import Movie from "../components/Movie";
import { getPopularMovies } from "../features/movieSlice";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const [selectedGenre, setSelectedGenre] = useState(0);

  useEffect(() => {
    fetchPopularMovies().then((data) => {
      dispatch(getPopularMovies(data.results));
    });
  }, []);
  console.log(movies);
  return (
    <section>
      <Filter
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <motion.div
        layout
        className=" flex flex-wrap md:gap-20 gap-3 justify-center items-center py-20">
        {movies.map((movie) => {
          if (selectedGenre == 0) {
            return (
              <AnimatePresence>
                <Movie key={movie.id} {...movie} />
              </AnimatePresence>
            );
          } else if (movie.genre_ids.includes(selectedGenre)) {
            return (
              <AnimatePresence>
                <Movie key={movie.id} {...movie} />
              </AnimatePresence>
            );
          }
        })}
      </motion.div>
    </section>
  );
};

export default Home;
