import Header from "@/components/header/Header"

const blogPosts = [
  {
    title: "10 Essential Data Structures Every Programmer Should Know",
    excerpt: "Explore the fundamental data structures that form the backbone of efficient programming and algorithm design.",
    date: "2023-05-15",
    author: "Jane Doe",
    slug: "essential-data-structures",
  },
  {
    title: "Mastering Big O Notation: A Beginner's Guide",
    excerpt: "Understand the basics of Big O notation and why it's crucial for writing efficient and scalable code.",
    date: "2023-06-02",
    author: "John Smith",
    slug: "mastering-big-o-notation",
  },
  {
    title: "5 Tips to Ace Your Next Coding Interview",
    excerpt: "Prepare for your upcoming coding interview with these proven strategies and insider tips.",
    date: "2023-06-20",
    author: "Alice Johnson",
    slug: "coding-interview-tips",
  },
]

export default function BlogPage() {
  return (
    <div>
        <Header/>
        <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">CodeCrack Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
            <a key={index} href={`/blog/${post.slug}`} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img
                src="/placeholder.svg"
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
                />
                <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                </div>
                </div>
            </a>
            ))}
        </div>
        </div>
    </div>
  )
}
