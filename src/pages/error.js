

import {Link} from 'react-router-dom'

const error = () => {
  return (
    <div>
      Error 404 
      <p>stránka nenalezena</p>

      <Link to="/" >Home</Link>
    </div>
  )
}

export default error
