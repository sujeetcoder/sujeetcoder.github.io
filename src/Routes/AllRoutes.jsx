import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import PagenotFound from "../Pages/PageNotFound"



const AllRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="*" element={<PagenotFound/>} ></Route>
    </Routes>
    )
}


export default AllRoutes;