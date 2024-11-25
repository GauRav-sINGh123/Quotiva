import Image from 'next/image'
import { Eye } from 'lucide-react'

interface Author {
  _id: number
}

interface Post {
  _id: number
  _createdAt: string
  views: string
  author: Author
  description: string
  image: string
}

interface StartupCardProps {
  post: Post
}

export default function StartupCard({ post }: StartupCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative h-48">
        <Image
          src={post.image}
          alt="Startup image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-400 text-sm mb-2">
          {post._createdAt}
        </p>
        <p className="text-gray-200 text-base mb-4">{post.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Eye className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-gray-400 text-sm">{post.views} views</span>
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

