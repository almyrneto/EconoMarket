import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "../page/home"
import { Login } from "../page/login"
import { Register } from "../page/register"
import { LoggedSeller } from "../page/loggedSeller"
import { RegisterAnnouncement } from "../page/registerAnnouncement"
import { PrivateRoute } from "./privateRoute"


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/seller" element={<PrivateRoute element={<LoggedSeller />} />} />
                <Route path="/registerAnnouncement" element={<RegisterAnnouncement />} />
            </Routes>
        </Router>
    )
}