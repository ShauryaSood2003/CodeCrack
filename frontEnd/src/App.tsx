import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

import CodePage from "./pages/CodePage"
import ProblemsList from "./pages/ProblemsList"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/code" element={<CodePage/>}></Route>
        <Route path="/" element={<ProblemsList/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
