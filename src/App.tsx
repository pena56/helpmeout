import { Route, Routes } from "react-router-dom"

import Index from "./pages"
import Login from "./pages/login"
import FileDetail from "./pages/file-detail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/file/:id" element={<FileDetail />} />
    </Routes>
  )
}

export default App
