import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "../page/home"
import { Login } from "../page/login"
import { Register } from "../page/register"


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}