import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import "./movies.css"

const Movies = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const[movieTitle, setMovieTitle] = useState("")
    const[minAge, setMinAge] = useState(null)
    const [yearRelase, setYearRelase] = useState(null)


    useEffect( () => {
      const unsubscribe = projectFirestore.collection("movies").orderBy("title", "asc").onSnapshot( (snapshot) => {
          

          if (snapshot.empty) {
            setError("Žádnej film")
            setData([])
          } else {
            let result = []
            snapshot.docs.forEach( (oneMovie) => {
              result.push( {id: oneMovie.id, ...oneMovie.data()} )
            })
            console.log(result);
            setData(result)
            setError(false)
          }

      },(err)=>{
        setError(err.message)
      })

      return () => {unsubscribe()}
    }, [])



    const deleteMovie = (id) => {
      projectFirestore.collection("movies").doc(id).delete()
    }

    const submitForm = async (e) => {
      e.preventDefault()

      const newMovie = {title: movieTitle, minage: minAge, relase: yearRelase}


      try {

      await projectFirestore.collection("movies").add(newMovie)
        setMinAge("")
        setMovieTitle("")
        setYearRelase("")
          } catch (err) {
            setError("Smůla!")
          }
    }

  return (<div className="all-movies">

    <h2>Přidej svůj oblíbený film</h2>
    
    <form className="add-form" onSubmit={submitForm}>
      <input type="text" 
             placeholder="Název filmu" 
             onChange={(e) => setMovieTitle(e.target.value) } 
             required 
             value={movieTitle}/>
      <input type="number" 
             placeholder="Minimální věk" 
             min="0" onChange={(e) => setMinAge(e.target.value)} 
             required
             value={minAge}/>
      <input type="number" 
             placeholder="Rok vydání" 
             min="1900" 
             onChange={(e) => setYearRelase(e.target.value)} 
             required
             value={yearRelase}/>
      <input type="submit" value="Přidej" />
    </form>


      {error && <p>{error}</p>}
      


      {data.map( (oneMovie, index) => {
        const {id, title, minage, relase} = oneMovie
       

        
          
        return <div key={index} className="one-movie">
         {<p> {title}  {minage} {relase}</p>}
          <button className="delete" onClick={() => deleteMovie(id)}>Smazat</button>
          </div>

      })}
    </div>
  )
}

export default Movies
