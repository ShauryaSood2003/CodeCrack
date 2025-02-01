"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, TrendingUp, Award } from "lucide-react"
import Header from "@/components/header/Header"

const leaderboardData = [
  { rank: 1, name: "Alex Johnson", username: "alexj", score: 9850, solved: 412, streak: 65, country: "US" },
  { rank: 2, name: "Emma Chen", username: "emmac", score: 9720, solved: 405, streak: 78, country: "CN" },
  { rank: 3, name: "Carlos Rodriguez", username: "carlosr", score: 9680, solved: 398, streak: 52, country: "ES" },
  { rank: 4, name: "Priya Patel", username: "priyap", score: 9590, solved: 389, streak: 60, country: "IN" },
  { rank: 5, name: "Yuki Tanaka", username: "yukit", score: 9510, solved: 382, streak: 45, country: "JP" },
  { rank: 6, name: "Mohammed Al-Fayed", username: "mohammedf", score: 9450, solved: 375, streak: 58, country: "EG" },
  { rank: 7, name: "Sophie Dubois", username: "sophied", score: 9380, solved: 370, streak: 42, country: "FR" },
  { rank: 8, name: "Raj Sharma", username: "rajs", score: 9320, solved: 365, streak: 50, country: "IN" },
  { rank: 9, name: "Olivia Brown", username: "oliviab", score: 9260, solved: 361, streak: 39, country: "GB" },
  { rank: 10, name: "Kim Min-joon", username: "kimm", score: 9190, solved: 357, streak: 55, country: "KR" },
]

export default function LeaderboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [timeRange, setTimeRange] = useState("all-time")

  const filteredData = leaderboardData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
        <Header/>
        <div className="container py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">CodeCrack Leaderboard</h1>
            <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all-time">All Time</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Rank</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Problems Solved</TableHead>
                    <TableHead className="text-right">Streak</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((user) => (
                    <TableRow key={user.rank}>
                        <TableCell className="font-medium">
                        {user.rank === 1 && <Award className="inline mr-2 text-yellow-500" />}
                        {user.rank === 2 && <Award className="inline mr-2 text-gray-400" />}
                        {user.rank === 3 && <Award className="inline mr-2 text-amber-600" />}
                        {user.rank}
                        </TableCell>
                        <TableCell className="flex items-center space-x-2">
                        <Avatar>
                            <AvatarImage src={`https://avatars.dicebear.com/api/initials/${user.username}.svg`} />
                            <AvatarFallback>
                            {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-sm text-muted-foreground">@{user.username}</div>
                        </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold">{user.score.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{user.solved}</TableCell>
                        <TableCell className="text-right">
                        <Badge variant="secondary" className="ml-2">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {user.streak}
                        </Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
            </div>
    </div>
    
  )
}

