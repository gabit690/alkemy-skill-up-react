import { Route, Routes } from "react-router-dom";
import Users from "../pages/Users";
import User from "../components/User";
import UserLayout from "../components/UserLayout";

function UserRoutes() {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route index element={<Users />} />
                <Route path=":name" element={<User />} />
            </Route>
        </Routes>
    );
}

export default UserRoutes;