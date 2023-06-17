import { Link, useNavigate } from "react-router-dom"
import  {useState} from "react"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import   "./Navbar.scss"


export default function Nav() {
  const [search, setSearch] = useState<string | null>  ("")
  const navigate = useNavigate();

  const submit = (e:any) => {
    
      e.preventDefault();
      console.log(search)
      if(!search) return;

      navigate(`/search?q=${search}`)
      setSearch("")
  }
  
  return (
    <nav id="Navbar">

      
      <h2>
      <Link to="/"> <BiCameraMovie/>MovieLib</Link>
    </h2>
    <form  onSubmit={submit}>
      <input
       type="text"
        placeholder="Busque um filme" 
        onChange={(e)=>setSearch(e.target.value)}
      
        />
      <button type="submit">
        <BiSearchAlt2/>
      </button>
   
    </form>

    </nav>
        
  )
}