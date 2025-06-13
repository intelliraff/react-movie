

const BASE_URL = "https://api.themoviedb.org/3";




const API_KEY = "8387f45cb0c6a89bf4af0bca85e349a7";

console.log("API KEY from env:", API_KEY);


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
