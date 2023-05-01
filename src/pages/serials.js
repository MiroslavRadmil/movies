import Modal from "../components/Modal"

import { useState, useReducer } from "react"





const reducer = (state, action) => {
  


  if (action.type === "ADD_MOVIE"){
    const newMovies = [...state.movies, action.payload]
    console.log(state.movies);
      return {
        ...state,
        movies: newMovies,
        showNotification: true,
        notificationContent: "Seriál byl přidán"
      }
  }

  if (action.type === "EMPTY_MOVIE"){
    return {
      ...state,
      showNotification: true,
      notificationContent: "Zadej seriál"
    }
  }

  if (action.type === "CLOSE_NOTIFICATION"){
    return {
      ...state,
      showNotification: false
    }
  }

  if (action.type === "REMOVE"){
    const filteredMovies = state.movies.filter( (oneMovie) => {
      return oneMovie.id !== action.payload
    })
 
    return {
      ...state,
      movies: filteredMovies
    }
  }



  return new Error()
}


const defaultState = {
    movies: [],
    showNotification: false,
    notificationContent: "",
    classN: ""
}




const Serials = () => {
  
  const [movieName, setMovieName] = useState("")
  const [serialScore, setScore] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)


 



  const submitForm = (e) => {
    e.preventDefault()


    if (movieName) {
      const newMovie = {id: new Date().getTime(), name: movieName, score: serialScore}
      dispatch({type: "ADD_MOVIE", payload: newMovie})
    } else {
      dispatch ( {type: "EMPTY_MOVIE"})
    }

    setMovieName("")

    
}



  const closeNotification = () => {
    dispatch ({type: "CLOSE_NOTIFICATION"})
  }



  return <section>
    {state.showNotification && <Modal notContenet={state.notificationContent} closeNotif={closeNotification}/>}
    <form onSubmit={submitForm}>
      <input type="text" 
             onChange={ (e) => setMovieName(e.target.value) } 
             value={movieName}
             placeholder="Seriál"/>
      <input type="number"
             onChange={ (e) => setScore(e.target.value)} 
             value={serialScore} 
             min="1" 
             max="10" 
             placeholder="Oblíbenost od 1 do 10"/>
      <input type="submit" value="Přidat" />
    </form>
    <div>
      {state.movies.map( (oneMovie) => {
        return <div key={oneMovie.id}>
          <p>{oneMovie.name}</p>
          <p>{oneMovie.score}</p>
          <button onClick={() => dispatch ({type: "REMOVE", payload: oneMovie.id })}>
            Smaž
          </button>




           
          
         

        </div>
      } )}
    </div>
  </section>
}


export default Serials
