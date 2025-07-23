import './App.css'
import { Dashboard } from './pages/Dashboard'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Optional: Create a simple NotFound component
function NotFound() {
  return (
    <div className="text-center text-white mt-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-xl">Page not found</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Default route */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
