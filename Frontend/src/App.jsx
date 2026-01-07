import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import FolderView from './pages/FolderView'
import NavbarComp from './components/NavbarComp'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/folder/:id" element={<PrivateRoute><FolderView /></PrivateRoute>} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
