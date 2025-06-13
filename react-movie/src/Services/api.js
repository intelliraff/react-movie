

const BASE_URL = import.meta.env.VITE_BASE_URL;




const API_KEY = import.meta.env.VITE_API_KEY;




export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Failed to fetch popular movies");
  const data = await response.json();
  console.log("Popular movies:", data); // debug
  return data.results || [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  if (!response.ok) throw new Error("Failed to search movies");
  const data = await response.json();
  console.log("Search results:", data); // debug
  return data.results || [];
};
