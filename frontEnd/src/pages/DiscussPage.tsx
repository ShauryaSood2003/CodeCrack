"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Search, PlusCircle, ThumbsUp, Eye } from "lucide-react"
import Header from "@/components/header/Header"

const discussionTopics = [
  {
    id: 1,
    title: "Tips for optimizing dynamic programming solutions",
    author: "AlexJ",
    category: "Algorithms",
    tags: ["dynamic-programming", "optimization"],
    replies: 23,
    views: 1200,
    likes: 45,
    lastActivity: "2025-02-01T10:30:00Z",
  },
  {
    id: 2,
    title: "Best practices for coding interviews",
    author: "EmmaChen",
    category: "Career",
    tags: ["interviews", "preparation"],
    replies: 56,
    views: 3500,
    likes: 120,
    lastActivity: "2025-02-02T14:15:00Z",
  },
  {
    id: 3,
    title: "Understanding time complexity in sorting algorithms",
    author: "CarlosR",
    category: "Algorithms",
    tags: ["sorting", "time-complexity"],
    replies: 18,
    views: 950,
    likes: 32,
    lastActivity: "2025-02-03T09:45:00Z",
  },
  {
    id: 4,
    title: "Python vs JavaScript for competitive programming",
    author: "PriyaP",
    category: "Languages",
    tags: ["python", "javascript", "competitive-programming"],
    replies: 89,
    views: 4200,
    likes: 76,
    lastActivity: "2025-02-04T16:20:00Z",
  },
  {
    id: 5,
    title: "How to approach system design questions",
    author: "YukiT",
    category: "System Design",
    tags: ["system-design", "interviews"],
    replies: 42,
    views: 2800,
    likes: 95,
    lastActivity: "2025-02-05T11:10:00Z",
  },
]

const categories = ["All", "Algorithms", "Career", "Languages", "System Design", "Data Structures"]

export default function DiscussPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTopics = discussionTopics.filter(
    (topic) =>
      (topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || topic.category === selectedCategory),
  )

  return (
    <div>
        <Header/>
    
        <div className="container py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Discuss</h1>
            <div className="flex space-x-4">
            <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                type="text"
                placeholder="Search discussions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                    {category}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            </div>
        </div>

        <div className="flex justify-between items-center mb-6">
            <Tabs defaultValue="latest">
            <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="top">Top</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>
            </Tabs>
            <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Topic
            </Button>
        </div>

        <div className="space-y-4">
            {filteredTopics.map((topic) => (
            <Card key={topic.id}>
                <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                    <CardTitle className="text-xl mb-2">{topic.title}</CardTitle>
                    <CardDescription>
                        Started by {topic.author} • {new Date(topic.lastActivity).toLocaleString()}
                    </CardDescription>
                    </div>
                    <Badge variant="secondary">{topic.category}</Badge>
                </div>
                </CardHeader>
                <CardContent>
                <div className="flex flex-wrap gap-2">
                    {topic.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                        {tag}
                    </Badge>
                    ))}
                </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                    <MessageSquare className="mr-1 h-4 w-4" /> {topic.replies} replies
                    </span>
                    <span className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" /> {topic.views} views
                    </span>
                    <span className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" /> {topic.likes} likes
                    </span>
                </div>
                <Button variant="outline">View Discussion</Button>
                </CardFooter>
            </Card>
            ))}
        </div>

        {filteredTopics.length === 0 && (
            <div className="text-center text-muted-foreground mt-8">
            <MessageSquare className="mx-auto h-12 w-12 mb-4" />
            <p className="text-lg">No discussions found. Try adjusting your search or filters.</p>
            </div>
        )}
        </div>
    </div>
  )
}

