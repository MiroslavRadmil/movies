import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home.js"
import Movies from "./pages/movies.js"
import Serials from "./pages/serials.js"
import Error from "./pages/error.js"
import SharedLayout from "./pages/SharedLayout.js"





const App = () => {
  return  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<SharedLayout />}>  
      <Route index element={ <Home /> }></Route> 
      
      
      <Route path="/movies" element={<Movies />}>  </Route> 
      <Route path="/serials" element={<Serials />}>  </Route> 
      <Route path="*" element={<Error />}> </Route>
      
      
      
      </Route> 
      
      </Routes>  
  
    
  </BrowserRouter> 
}

export default App
