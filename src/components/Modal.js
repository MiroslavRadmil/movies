import "./Modal.css"
import { useEffect } from "react"


const Modal = ({notContenet, closeNotif}) => {

  useEffect( () => {
    setTimeout( () => {
        closeNotif()
    }, 2000)
  })

  
  return (
    <div>{notContenet}</div>
  )
}

export default Modal