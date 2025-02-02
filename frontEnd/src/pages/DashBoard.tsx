"use client"

import { useState, useEffect, useRef } from "react"
import { User, Award, BarChart2, Calendar, MessageSquare, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Header from "@/components/header/Header"

const DashBoardPage = () => {
  const [userStats, setUserStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    contestRating: 0,
    ranking: 0,
    submissions: 456,
    activeDays: 159,
    maxStreak: 27,
  })

  const [communityStats, setCommunityStats] = useState({
    discussions: 45,
    replies: 156,
    contestsParticipated: 12,
    reputation: 1250,
  })

  // Mock data for the submission calendar
  const getDaysInMonth = (monthIndex: number) => {
    const year = new Date().getFullYear()
    return new Date(year, monthIndex + 1, 0).getDate()
  }

  const submissionData = Array.from({ length: 12 }, (_, monthIndex) =>
    Array.from({ length: getDaysInMonth(monthIndex) }, () => Math.floor(Math.random() * 5)),
  )

  const badges = [
    { name: "Problem Solver", icon: "🎯", color: "bg-green-500", description: "Solved 100+ problems" },
    { name: "Contest Master", icon: "🏆", color: "bg-yellow-500", description: "Top 10 in contests" },
    { name: "Helper", icon: "🤝", color: "bg-blue-500", description: "100+ helpful replies" },
    { name: "Early Bird", icon: "🌟", color: "bg-purple-500", description: "Member since 2023" },
  ]

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const badgesRef = useRef<HTMLDivElement>(null)
  const pointRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch user stats here
    setUserStats({
      totalSolved: 235,
      easySolved: 100,
      mediumSolved: 100,
      hardSolved: 35,
      contestRating: 1650,
      ranking: 45678,
      submissions: 456,
      activeDays: 159,
      maxStreak: 27,
    })
  }, [])

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="md:col-span-1 space-y-5">
                {/* User Profile Card */}
                <Card >
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                    <User className="h-6 w-6" />
                    User Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-bold mb-2">John Doe</h2>
                    <p className="text-muted-foreground mb-4">@johndoe</p>
                    <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span>Gold Medal</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-blue-500" />
                    <span>Top 10% this month</span>
                    </div>
                </CardContent>
                </Card>

                {/* Community Stats Card */}
                <Card >
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6" />
                    Community Stats
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                    <div>
                        <p className="text-sm text-muted-foreground">Discussions Started</p>
                        <p className="text-2xl font-bold">{communityStats.discussions}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Helpful Replies</p>
                        <p className="text-2xl font-bold">{communityStats.replies}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Contests Participated</p>
                        <p className="text-2xl font-bold">{communityStats.contestsParticipated}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Reputation</p>
                        <p className="text-2xl font-bold">{communityStats.reputation}</p>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </div>

            <div className="md:col-span-2 space-y-5">
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Problem Solving Statistics */}
                    <Card >
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                        <BarChart2 className="h-6 w-6" />
                        Problem Solving Statistics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <p className="text-muted-foreground">Easy</p>
                            <p className="text-2xl font-bold">{userStats.easySolved} / 592</p>
                            <Progress value={(userStats.easySolved / 592) * 100} className="mt-2" />
                        </div>
                        <div>
                            <p className="text-muted-foreground">Medium</p>
                            <p className="text-2xl font-bold">{userStats.mediumSolved} / 1231</p>
                            <Progress value={(userStats.mediumSolved / 1231) * 100} className="mt-2" />
                        </div>
                        <div>
                            <p className="text-muted-foreground">Hard</p>
                            <p className="text-2xl font-bold">{userStats.hardSolved} / 501</p>
                            <Progress value={(userStats.hardSolved / 501) * 100} className="mt-2" />
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    {/* Badges Card */}
                    <Card >
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                        <Star className="h-6 w-6" />
                        Badges
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                        
                        <div ref={badgesRef} className="flex overflow-x-auto space-x-4 pb-4 px-4 scrollbar-hide">
                        {badges.map((badge, index) => (
                            <div
                            key={index}
                            className="flex-shrink-0 flex flex-col items-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
                            style={{ width: "150px" }}
                            >
                            <div
                                className={`w-12 h-12 rounded-full ${badge.color} flex items-center justify-center text-2xl mb-2`}
                            >
                                {badge.icon}
                            </div>
                            <h3 className="font-semibold text-sm text-center">{badge.name}</h3>
                            <p className="text-xs text-muted-foreground text-center mt-1">{badge.description}</p>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                    </Card>

                </div>


                {/* Submission Calendar Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-6 w-6" />
                            <span>{userStats.submissions} submissions in the past year</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div>Total active days: {userStats.activeDays}</div>
                            <div>Max streak: {userStats.maxStreak}</div>
                        </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                        {/* Horizontal Scroll Wrapper */}
                        <div
                        ref={pointRef}
                        className="flex overflow-x-auto space-x-4 pb-4 px-4 scrollbar-hide snap-x snap-mandatory"
                        >
                        <TooltipProvider>
                            <div className="flex gap-6">
                            {months.map((month, monthIndex) => (
                                <div key={month} className="space-y-2 m-3 snap-start">
                                <div className="text-xs text-muted-foreground text-center">{month}</div>
                                {/* Calendar Grid (7 columns for weeks) */}
                                <div className="grid grid-cols-7 gap-4">
                                    {Array.from({ length: 31 }).map((_, dayIndex) => (
                                    <Tooltip key={dayIndex}>
                                        <TooltipTrigger>
                                        <div
                                            className={`w-3 h-3 rounded-sm ${
                                            submissionData[monthIndex][dayIndex] === 0
                                                ? "bg-muted"
                                                : submissionData[monthIndex][dayIndex] === 1
                                                ? "bg-green-900"
                                                : submissionData[monthIndex][dayIndex] === 2
                                                ? "bg-green-700"
                                                : submissionData[monthIndex][dayIndex] === 3
                                                ? "bg-green-500"
                                                : "bg-green-300"
                                            }`}
                                        />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        {submissionData[monthIndex][dayIndex]} submissions on {month} {dayIndex + 1}
                                        </TooltipContent>
                                    </Tooltip>
                                    ))}
                                </div>
                                </div>
                            ))}
                            </div>
                        </TooltipProvider>
                        </div>
                    </CardContent>
                    </Card>


        
       
            </div>
        </div>
    </div>
    </>
  )
}

export default DashBoardPage

