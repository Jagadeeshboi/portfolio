import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Applayout from "./pages/components/Applayout"
import Home from "./pages/components/Home"
import ContaxtApi from "./Contaxt/contaxt"



function App() {
  return (
    <ContaxtApi>  
    <BrowserRouter>
        <Routes>
          <Route element={<Applayout/>}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </ContaxtApi>
  )
}

export default App
