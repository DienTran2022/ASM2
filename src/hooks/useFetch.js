import { useState, useCallback } from "react";

function useFetch(url) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = useCallback(async () => {
    try {
      const reponse = await fetch(url);
      if (!reponse.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await reponse.json();
      const dataMovies = data.results;
      setMovies(dataMovies);
    } catch (error) {
      alert(error.message);
    }
  }, [url]);
  return { movies, fetchMovies };
}
export default useFetch;
