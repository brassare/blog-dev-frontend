import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import ProtectedRoute from "./components/ProtectedRoute"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import EditPost from "./pages/EditPost"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NewPost from "./pages/NewPost"
import NotFound from "./pages/NotFound"
import PostDetail from "./pages/PostDetail"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="about" element={<About />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/new" element={<NewPost />} />
            <Route path="dashboard/edit/:id" element={<EditPost />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
