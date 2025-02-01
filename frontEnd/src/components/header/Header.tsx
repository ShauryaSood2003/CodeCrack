import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const [ theme, setTheme ] = useState("")

  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5">
    <div className="container flex h-16 items-center justify-between">
      <a href="/" className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        <span className="font-bold">CodeCrack</span>
      </a>
      <nav className="hidden md:flex space-x-4">
        <a href="/problemlist" className="text-foreground/60 hover:text-foreground">
          Problems
        </a>
        <a href="/contests" className="text-foreground/60 hover:text-foreground">
          Contests
        </a>
        <a href="/leaderboard" className="text-foreground/60 hover:text-foreground">
          Leaderboard
        </a>
        <a href="/discuss" className="text-foreground/60 hover:text-foreground">
          Discuss
        </a>
      </nav>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        {!userInfo ? (
          <>
            <Button variant="outline"  onClick={() => navigate('/signin')}>Log in</Button>
            <Button  onClick={() => navigate('/signup')}>Sign up</Button>
          </>
        ):(
          <></>
        )
        }
      </div>
    </div>
  </header>
  )
}

export default Header

