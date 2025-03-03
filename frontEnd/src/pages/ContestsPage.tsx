"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  Users,
  Search,
  Trophy,
  SquareChartGantt,
} from "lucide-react";
import Header from "@/components/header/Header";
import { useNavigate } from "react-router-dom";

const contests = [
  {
    id: 1,
    title: "Weekly Challenge #42",
    description: "Solve 5 algorithmic problems in 2 hours",
    startDate: "2025-02-15T18:00:00Z",
    duration: "2 hours",
    participants: 1200,
    difficulty: "Medium",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "CodeCrack Cup 2025",
    description: "Annual flagship contest with challenging problems",
    startDate: "2025-03-01T14:00:00Z",
    duration: "4 hours",
    participants: 5000,
    difficulty: "Hard",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Beginner's Blitz",
    description: "Fun and easy problems for newcomers",
    startDate: "2025-02-10T20:00:00Z",
    duration: "1.5 hours",
    participants: 800,
    difficulty: "Easy",
    status: "Ongoing",
  },
  {
    id: 4,
    title: "Data Structures Duel",
    description: "Test your knowledge of advanced data structures",
    startDate: "2025-02-20T16:00:00Z",
    duration: "3 hours",
    participants: 2500,
    difficulty: "Hard",
    status: "Upcoming",
  },
  {
    id: 5,
    title: "Dynamic Programming Derby",
    description: "Master the art of dynamic programming",
    startDate: "2025-02-05T19:00:00Z",
    duration: "2.5 hours",
    participants: 1800,
    difficulty: "Medium",
    status: "Ended",
  },
];

const difficultyColors: any = {
  Easy: "bg-green-500",
  Medium: "bg-yellow-500",
  Hard: "bg-red-500",
};

export default function ContestsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const filteredContests = contests.filter(
    (contest) =>
      contest.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeTab === "all" || contest.status.toLowerCase() === activeTab)
  );

  return (
    <div>
      <Header />
      <div className="container py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Coding Contests</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search contests..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-6 flex-wrap space-y-4 md:space-y-0">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All Contests</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="ended">Ended</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button onClick={() => navigate("/admin/createContest")}>
            <SquareChartGantt className="mr-2 h-4 w-4" />
            Create Contest
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredContests.map((contest) => (
            <Card key={contest.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl mb-2">
                    {contest.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className={`${
                      difficultyColors[contest.difficulty]
                    } text-white`}
                  >
                    {contest.difficulty}
                  </Badge>
                </div>
                <CardDescription>{contest.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(contest.startDate).toLocaleString()}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4" />
                    {contest.duration}
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="mr-2 h-4 w-4" />
                    {contest.participants} participants
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {contest.status === "Ongoing"
                    ? "Join Now"
                    : contest.status === "Upcoming"
                    ? "Set Reminder"
                    : "View Results"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredContests.length === 0 && (
          <div className="text-center text-muted-foreground mt-8">
            <Trophy className="mx-auto h-12 w-12 mb-4" />
            <p className="text-lg">
              No contests found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
