import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
// import About from "../pages/About";
import Home from "../pages/Home";

const AppRoutes=()=>{
    return(

        <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/* <Route exact path="/about" element={<About/>}/> */}
            </Routes>
        </Router>
        
        </>
    )
}

export default AppRoutes;