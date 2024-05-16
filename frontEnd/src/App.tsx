import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

import CodePage from "./pages/CodePage"
import ProblemsList from "./pages/ProblemsList"
import AddProblem from "./pages/AddProblem"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/code" element={<CodePage/>}></Route>
        <Route path="/" element={<ProblemsList/>}></Route>
        <Route path="admin/test" element={<AddProblem/>}></Route>
      </Routes>
    </Router>

    
  )
}

export default App
