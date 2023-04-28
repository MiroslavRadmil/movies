import { useState } from "react"




const Serials = () => {

  const [data, setData] = useState([])

  const [serialTitle, setSerialTitle] = useState("")
  const [score, setScore] = useState(5)



  const submitSerialsForm = (e) => {
    e.preventDefault()

    const newSerial = {serialTitle: serialTitle, score: score} 
    
    if (serialTitle !== "") {
    
    data.push({...newSerial.data()})
    setScore("5")
    setSerialTitle("")}
    else {
      setData([])
    }
  }
  



  return (
   <div className="all-serials">
   <h2>Přidej a ohodnoť svůj oblíbený seriál</h2>

   <form className="add-serials-form" onSubmit={submitSerialsForm}>
      <input type="text" 
             placeholder="Název seriálu" 
             onChange={(e) => setSerialTitle(e.target.value) } 
             required 
             value={serialTitle}/>
      <input type="number"
             placeholder="Oblíbenost 1-10"
             onChange={(e) => setScore(e.target.value)}
             min="1"
             max="10"
             value={score}>
      </input>

      <input type="submit" value="Přidej" />
    </form>

    {data.map( (oneSerial, index) => {
        const {serialTitle, score} = oneSerial
       
          
        return <div key={index} className="one-serial">
         {<p> {serialTitle}</p>}
        
                 

      <input type="number" value={score}></input>
      </div>

    })}
     
  </div>
  )
}

export default Serials
