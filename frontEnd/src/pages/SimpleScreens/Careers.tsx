import { Button } from '@/components/ui/button'

const openings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Technical Content Writer",
    department: "Content",
    location: "Remote",
    type: "Part-time",
  },
]

export default function CareersPage() {
  return (
    <div className="container py-12 px-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Join Our Team</h1>
      <p className="text-lg text-center mb-12">
        We're always looking for talented individuals to help us build the future of coding education.
      </p>
      <div className="grid gap-6">
        {openings.map((job, index) => (
          <div key={index} className="border rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <p className="text-muted-foreground mb-2">{job.department} • {job.location} • {job.type}</p>
            </div>
            <Button>Apply Now</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
