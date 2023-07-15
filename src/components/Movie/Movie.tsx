import { useState, useEffect } from "react"
import { useParams, } from "react-router-dom"
import MovieCard from "./MovieCard";




const movieUrls = import.meta.env.VITE_API;

const apikey = import.meta.env.VITE_API_KEY;


export default function Movie() {
    const { id } = useParams();
    const videosapi = `https://api.themoviedb.org/3/movie/${id}?api_key=971f03eef96c481fd72b934bef826ce4&language=pt-br&append_to_response=videos`
    
    const [movie, setMovie] = useState<any | null>(null);
   
    

    const getMovie = async (url: any) => {
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

console.log(videosapi)



    useEffect(() => {
        const movieUrl = `${movieUrls}${id}?${apikey}`
   
        getMovie    (movieUrl)
    }, [])


 


    return (
        <div>

            { movie &&
                <>
    <MovieCard movie={movie} showLink={false} />
                 
                  
                
                
                    <p>{formatCurrency(movie.budget)}</p>
                    <p>{movie.release_date.slice(0,4)}</p>
                    <p>{movie.genres.map((genre: any) => genre.name).join(', ')}</p>

                    <p> {formatCurrency(movie.revenue)}</p>


                    <p>{minuto(movie.runtime)} minutos</p>
                    <p>{movie.overview}</p>

                    <p>{   ` filme produzido : ${movie.production_countries[0].name} `}</p>

                 <p>{`disponivel nas linguagens : ${movie.spoken_languages.map((lang: any) => lang.name).join(', ')} `}</p>





                    
                 
                </>
            }

         
                 
        </div>
    )
}