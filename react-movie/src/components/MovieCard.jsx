import '/Users/pushpanjaniambadipudi/react-movie/react-movie/src/css/MovieCard.css'
import { useMovieContext } from '../contextss/MovieContext';

function MovieCard({movie}){

    const {isFavorite,addToFavorites,removeFromFavorites} = useMovieContext();
    const isMovieFavorite = isFavorite(movie.id);

    function onlike(e)
    {
        e.preventDefault();
        if (isMovieFavorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
        
    }

    return <div className="movie-card">


            <div className="movie-poster">
            {movie.poster_path ? (
                    <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                  />
                  
                    ) : (
                    <div className="no-poster">No image available</div>
                    )}

                <div className="movie-overlay">
                    <button className={`favorite-btn ${isMovieFavorite? "active":""}`} onClick={onlike}>♥</button>
                </div>
            </div>


            <div className="movie-info">

                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>

        </div>


    
}

export default MovieCard;