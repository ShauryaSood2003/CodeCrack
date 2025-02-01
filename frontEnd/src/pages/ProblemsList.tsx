"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Filter } from "lucide-react"
import Problem from "@/components/problemlist/Problem"

interface ProblemInterface {
  id: number
  title: string
  content: string
  tag: string
  difficulty: "Easy" | "Medium" | "Hard"
}


export default function ProblemsList() {
  const [list, setList] = useState<ProblemInterface[]>([])
  const [filteredList, setFilteredList] = useState<ProblemInterface[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getList() {
      try {
        setIsLoading(true)
        const response = await axios({
          method: "POST",
          url: "http://localhost:4000/problemlist",
          withCredentials: true,
        })
        setList(response.data)
        setFilteredList(response.data)
      } catch (e) {
        console.log("Failed to get Data!")
      } finally {
        setIsLoading(false)
      }
    }
    getList()
  }, [])

  useEffect(() => {
    const filtered = list.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = selectedTag === "All" || item.tag === selectedTag
      const matchesDifficulty = selectedDifficulty === "All" || item.difficulty === selectedDifficulty
      return matchesSearch && matchesTag && matchesDifficulty
    })
    setFilteredList(filtered)
  }, [searchTerm, selectedTag, selectedDifficulty, list])

  const tags = ["All", ...new Set(list.map((item) => item.tag))]
  const difficulties = ["All", "Easy", "Medium", "Hard"]

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Problems List</h1>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-4 w-2/3" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Problems List</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedTag} onValueChange={setSelectedTag}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select tag" />
          </SelectTrigger>
          <SelectContent>
            {tags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((difficulty) => (
              <SelectItem key={difficulty} value={difficulty}>
                {difficulty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {filteredList.map((item: ProblemInterface) => (
          <Problem key={item.id} item={item} />
        ))}
      </div>
      {filteredList.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          <Filter className="mx-auto h-12 w-12 mb-4" />
          <p className="text-lg">No problems found. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}

