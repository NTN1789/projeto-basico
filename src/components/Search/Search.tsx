import {useEffect,useState} from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../Movie/MovieCard"


const searchUrl = import.meta.env.VITE_SEARCH ;
const apiKey = import.meta.env.VITE_API_KEY;

import "../Movie/MovieCard.scss"
export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [movies, setMovies] = useState ([])


  const getSearch = async (url) => {
  

    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  
  }
  
  
  useEffect (() => {
    const searchquery = `${searchUrl}?${apiKey}&query=${query}`
      getSearch(searchquery)
     
   },[query])
  
  
  return (
    <div className="container" >
    <h2 className="title">Resultados pesquisados: <span className="query-text">{query}</span> </h2>
   
   <div className="movies-container">

    {
      (movies.length === 0) ? <p>not found</p> : movies.map((movie, id) => {
        return (  
            <div key={id}>
              <MovieCard movie={movie} />
        
            </div>   
        )       
      })
    }
    </div>

  </div>
  )
}