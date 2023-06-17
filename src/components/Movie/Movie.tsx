import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard";


const movieUrls = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;
export default function Movie() {
    const {id} = useParams();
    const [movie,setMovie] = useState<any | null>(null);
  

    const getMovie = async(url:any) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
    }

    const formatCurrency = (num: number) => { 
     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')      
    }

    const minuto = (num: number) => { 
        if (num < 60) return `${num}min`;
        return `${Math.trunc(num / 60)}h ${num % 60}min`;
    }

    

    useEffect(() => {
        const movieUrl = `${movieUrls}${id}?${apikey}`  
         getMovie(movieUrl)
    }, [])

  return (
    <div>
        
        {movie && 
         <>

            <MovieCard movie={movie} showLink={false} />
            <p>{movie.tagline}</p>
            <p>{formatCurrency(movie.budget)}</p>

            <p> {formatCurrency(movie.revenue)}</p>

            
            <p>{minuto(movie.runtime)} minutos</p>

            
            <p>{movie.overview}</p>
        </>
            }
    </div>
  )
}