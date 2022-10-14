import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import PagenotFound from "../Pages/PageNotFound"


const AllRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="*" element={<PagenotFound/>} ></Route>
    </Routes>
    )
}


export default AllRoutes;