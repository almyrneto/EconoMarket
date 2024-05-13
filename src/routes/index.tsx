import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "../page/home"
import { Login } from "../page/login"
import { Register } from "../page/register"
import { LoggedSeller } from "../page/loggedSeller"
import { RegisterAnnouncement } from "../page/registerAnnouncement"
import { PrivateRoute } from "./privateRoute"
import { LoggedBuyer } from "../page/loggedBuyer"
import { LoginBuyer } from "../page/loginBuyer"
import { RegisterBuyer } from "../page/RegisterBuyer"


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/seller" element={<PrivateRoute element={<LoggedSeller />} />} />
                <Route path="/buyer" element={<PrivateRoute element={<LoggedBuyer />} />} />
                <Route path="/registerAnnouncement" element={<RegisterAnnouncement />} />
                {/* <Route path="/buyer" element={<LoggedBuyer />} /> */}
                <Route path="/loginBuyer" element={<LoginBuyer />} />
                <Route path="/registerBuyer" element={<RegisterBuyer />} />
            </Routes>
        </Router>
    )
}