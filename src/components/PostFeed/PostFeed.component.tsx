import { Link } from "react-router-dom"
import { Post } from "../../types/post.type"
import {
  getFeedPhotoURL,
  getUserPhotoURL,
} from "../../services/instagram.service"

interface PostFeedProps {
  post: Post
}

const PostFeed = ({ post }: PostFeedProps) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-full">
      <header className="flex items-center p-4 border-b border-gray-200">
        <Link to={`/${post.user.username}`}>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={getUserPhotoURL(post.user.username)}
            alt="Profile"
          />
          <p className="ml-3 font-semibold text-gray-800">
            {post.user.username}
          </p>
        </Link>
      </header>

      <figure>
        <img
          className="w-full h-64 object-cover"
          src={getFeedPhotoURL(post.id)}
          alt="Post"
        />
      </figure>

      {/* Legenda */}
      <div className="p-4">
        <p className="text-sm text-gray-600">{post.caption.text}</p>
      </div>

      {/* Interações */}
      <footer className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <button aria-label="Curtir">'❤️'</button>
          <button aria-label="Compartilhar">{"📤"}</button>
        </div>
      </footer>
    </div>
  )
}

export default PostFeed
