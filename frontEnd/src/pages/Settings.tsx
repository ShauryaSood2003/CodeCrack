import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins } from "lucide-react"

interface InfoField {
  label: string
  value: string
  points?: number
  editable?: boolean
}

export default function SettingsPage() {
  const userInfo: InfoField[] = [
    {
      label: "Name",
      value: "Shaurya Sood",
      editable: true,
    },
    {
      label: "Gender",
      value: "Male",
      editable: true,
    },
    {
      label: "Location",
      value: "India",
      editable: true,
    },
    {
      label: "Birthday",
      value: "Your birthday",
      points: 2,
      editable: true,
    },
    {
      label: "Summary",
      value: "Tell us about yourself (interests, experience, etc.)",
      points: 2,
      editable: true,
    },
    {
      label: "Website",
      value: "Your blog, portfolio, etc.",
      points: 2,
      editable: true,
    },
    {
      label: "Github",
      value: "https://github.com/ShauryaSood2003",
      editable: true,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {userInfo.map((field, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{field.label}</p>
              <p className="text-sm text-muted-foreground">{field.value}</p>
            </div>
            <div className="flex items-center gap-4">
              {field.points && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Coins className="h-4 w-4" />
                  <span>+{field.points}</span>
                </div>
              )}
              {field.editable && (
                <Button variant="link" className="text-blue-500">
                  Edit
                </Button>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

