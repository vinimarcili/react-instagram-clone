import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/Home/Home.page"
import NotFoundPage from "./pages/NotFound/NotFound.page"
import UserPage from "./pages/User/User.page"
import PostPage from "./pages/Post/Post.page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:username" element={<UserPage />} />
        <Route path="/p/:id" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
