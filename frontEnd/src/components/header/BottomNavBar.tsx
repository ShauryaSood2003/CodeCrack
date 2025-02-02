"use client"


import { List, Trophy, MessageSquare } from "lucide-react"
import { useEffect, useState } from "react";
import { useLocation  } from "react-router-dom"

const BottomNav = () => {

    const pathname = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <div className="mt-10 md:mt-0">
        {
            isMobile && 
                (<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t">
                    <div className="flex justify-around">
                        <a
                        href="/problemlist"
                        className={`flex flex-col items-center p-2 ${pathname.pathname === "/problemlist" ? "text-primary" : "text-foreground/60"}`}
                        >
                        <List className="h-6 w-6" />
                        <span className="text-xs">Problems</span>
                        </a>
                        <a
                        href="/contests"
                        className={`flex flex-col items-center p-2 ${pathname.pathname === "/contests" ? "text-primary" : "text-foreground/60"}`}
                        >
                        <Trophy className="h-6 w-6" />
                        <span className="text-xs">Contests</span>
                        </a>
                        <a
                        href="/discuss"
                        className={`flex flex-col items-center p-2 ${pathname.pathname === "/discuss" ? "text-primary" : "text-foreground/60"}`}
                        >
                        <MessageSquare className="h-6 w-6" />
                        <span className="text-xs">Discuss</span>
                        </a>
                    </div>
                </nav>
            )
        }
    </div>
  )
}

export default BottomNav

