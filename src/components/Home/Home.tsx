import { useState, useEffect } from "react"
import MovieCard from "../Movie/MovieCard"

  ;
const movieUrl = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY
import "../Movie/MovieCard.scss"

export default function Home() {
  const [movies, setMovies] = useState<string | null>([])


  const getMovies = async (url: any) => {


    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)

  }


  useEffect(() => {
    const moviesUrl = `${movieUrl}popular?${apikey}`
    getMovies(moviesUrl)

  }, [])



  return (
    <div className="container" >
      <h2 className="title">Filmes populares: </h2>

      <div className="movies-container">


        { movies &&
           movies.map((movie: any) => {
            return (
              <>
                <MovieCard key={movie.id} movie={movie} />
              </>
            )
          })
       
        }
      </div>

    </div>

  )
}