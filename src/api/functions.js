export const fetchPopularMovies = async () => {
  const api = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e07534acae00ac56e6c4533528bdb3ff&language=en-US&page=1"
  );
  const data = await api.json();
  return data;
};
