import { useState } from "react"
import "./mobilbar.css"
import {FaHamburger} from "react-icons/fa"


const Mobilbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="mobile"><FaHamburger onClick={() => setShowMenu(!showMenu)}
    className="hamburger-icon"/>
    <nav className={`${showMenu ? "mobile-nav-show" : "mobile-nav-hide"} `}>
      
    <ul>
        <li>
            <a href="/">Home</a>
            <a href="/movies">Filmy</a>
            <a href="/serials">Seriály</a>
        </li>
    </ul>
</nav>
</div>
  )
}

export default Mobilbar
