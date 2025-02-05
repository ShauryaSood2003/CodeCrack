import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import CodePage from "./pages/CodePage"
import ProblemsList from "./pages/ProblemsList"
import AddProblem from "./pages/AddProblem"
import AdminSignIn from "./components/signin/AdminSignIn"
import AdminSignUp from "./components/signup/AdminSignUp"
import UserSignIn from "./components/signin/UserSignIn"
import UserSignUp from "./components/signup/UserSignUp"
import Home from "./pages/Home"
import FeaturesPage from "./pages/SimpleScreens/Features"
import PricingPage from "./pages/SimpleScreens/Pricing"
import FAQPage from "./pages/SimpleScreens/Faq"
import AboutPage from "./pages/SimpleScreens/AboutUs"
import CareersPage from "./pages/SimpleScreens/Careers"
import ContactPage from "./pages/SimpleScreens/Contact"
import BlogPage from "./pages/SimpleScreens/Blog"
import TutorialsPage from "./pages/SimpleScreens/Tutorial"
import DocumentationPage from "./pages/SimpleScreens/Documentation"
import PrivacyPolicyPage from "./pages/SimpleScreens/PrivacyPolicy"
import TermsOfServicePage from "./pages/SimpleScreens/TermsOfService"
import CookiePolicyPage from "./pages/SimpleScreens/CookiePolicy"
import LeaderboardPage from "./pages/LeaderBoard"
import ContestsPage from "./pages/ContestsPage"
import DiscussPage from "./pages/DiscussPage"
import DashBoardPage from "./pages/DashBoard"
import SettingsPage from "./pages/Settings"
// import { clientId } from "./constants/data"

function App() {
  return(
    <GoogleOAuthProvider clientId={"clientId"}>
      <Router>
        <Routes>
          <Route path="/code/:id" element={<CodePage/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/problemlist" element={<ProblemsList/>}></Route>
          <Route path="/admin/addProblem" element={<AddProblem/>}></Route>
          <Route path="/admin/signin" element={<AdminSignIn/>}></Route>
          <Route path="/admin/signup" element={<AdminSignUp/>}></Route>
          <Route path="/signin" element={<UserSignIn/>}></Route>
          <Route path="/signup" element={<UserSignUp/>}></Route>
          <Route path="/dashboard" element={<DashBoardPage/>}></Route>
          <Route path="/settings" element={<SettingsPage/>}></Route>
          
          <Route path="/features" element={<FeaturesPage/>}></Route>
          <Route path="/pricing" element={<PricingPage/>}></Route>
          <Route path="/faq" element={<FAQPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/careers" element={<CareersPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/blog" element={<BlogPage/>}></Route>
          <Route path="/tutorials" element={<TutorialsPage/>}></Route>
          <Route path="/docs" element={<DocumentationPage/>}></Route>
          <Route path="/privacy" element={<PrivacyPolicyPage/>}></Route>
          <Route path="/terms" element={<TermsOfServicePage/>}></Route>
          <Route path="/cookies" element={<CookiePolicyPage/>}></Route>    
          <Route path="/leaderboard" element={<LeaderboardPage/>}></Route>    
          <Route path="/contests" element={<ContestsPage/>}></Route>   
          <Route path="/discuss" element={<DiscussPage/>}></Route>    
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App
