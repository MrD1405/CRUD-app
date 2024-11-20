
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Books from './Books'
import Add from './Add'
import Update from './Update'
import './style.css'
function App() {
 

  return (
    <>
      <BrowserRouter>
      {/* <Routes> ------ need to study more */}
      <Routes>
        <Route path="/" element={<Books />}/>
       <Route path="/add" element ={<Add />}/>
        <Route path="/update" element={<Update />}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
