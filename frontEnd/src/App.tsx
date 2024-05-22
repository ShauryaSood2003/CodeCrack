import { BrowserRouter as Router, Routes,Route } from "react-router-dom"

import CodePage from "./pages/CodePage"
import ProblemsList from "./pages/ProblemsList"
import AddProblem from "./pages/AddProblem"
import AdminSignIn from "./components/signin/AdminSignIn"
import AdminSignUp from "./components/signup/AdminSignUp"
import UserSignIn from "./components/signin/UserSignIn"
import UserSignUp from "./components/signup/UserSignUp"
import Home from "./pages/Home"

function App() {
  return(
    
      <Router>
        <Routes>
          <Route path="/code/:id" element={<CodePage/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/problemlist" element={<ProblemsList/>}></Route>
          <Route path="admin/test" element={<AddProblem/>}></Route>
          <Route path="/admin/signin" element={<AdminSignIn/>}></Route>
          <Route path="/admin/signup" element={<AdminSignUp/>}></Route>
          <Route path="/signin" element={<UserSignIn/>}></Route>
          <Route path="/signup" element={<UserSignUp/>}></Route>
        </Routes>
      </Router>

  )
}

export default App
