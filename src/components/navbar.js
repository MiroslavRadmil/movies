import { NavLink} from "react-router-dom"
import "./navbar.css"

import Mobilbar from "./mobilbar"





const Navbar = () => {

  
  
  
  return ( 
  <header>
    <nav className="navigation">
        
        <NavLink to="/" className={ ({isActive}) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      }
>Home</NavLink>
        <NavLink to="/movies"className={ ({isActive}) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      }
>Filmy</NavLink>
        <NavLink to="/serials"className={ ({isActive}) =>
        isActive ? "activeLink link" : "nonactiveLink link"
      }
>Seriály</NavLink>
<Mobilbar/>
    </nav>
    
  </header>
  )
}

export default Navbar
