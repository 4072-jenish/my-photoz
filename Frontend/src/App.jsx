import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import FolderView from './pages/FolderView'
import NavbarComp from './components/NavbarComp'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/folder/:id" element={<FolderView />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
