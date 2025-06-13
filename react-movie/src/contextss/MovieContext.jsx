import {createContext,useState,useContext,useEffect} from 'react'


const MovieContext= createContext()

export const useMovieContext=()=>useContext(MovieContext)

export const MovieProvider=({children})=>{
   
    const [favorites,setFavorites]=useState([])
    useEffect(()=>{
        const storedFavorites=localStorage.getItem('favorites')

        if (storedFavorites) setFavorites(JSON.parse(storedFavorites)) 
    },[])

    const addToFavorites=(movie)=>{
        favorites.push()
        setFavorites(previous=>[...previous,movie]);
    }

    const removeFromFavorites=(movieId)=>{
        setFavorites(previous=>previous.filter(movie=>movie.id !==movieId))
    }

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])


    const isFavorite=(movieId)=>{
        return favorites.some(movie=> movie.id===movieId)
    }
    const value={
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
} 