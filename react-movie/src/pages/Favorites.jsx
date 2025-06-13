
import '/Users/pushpanjaniambadipudi/react-movie/react-movie/src/css/Favorites.css'
import {useMovieContext } from '../contextss/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites(){

    const {favorites} = useMovieContext();
    if (favorites){
        return (
            <div className='favorites'>
                <h2>Your favorites❤️</h2>
                <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            </div>
            
        )
    }
    else{
        return(
            <div className="favorites-empty">
                <h2>No favorite movies yet👀</h2>
                <p>Start adding movies to your favorites and they will appear here</p>
            </div>
        );
    }
    
}

export default Favorites;