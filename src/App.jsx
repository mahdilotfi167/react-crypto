import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";


export function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search/*" element={<Search/>}/>
            </Routes>
        </div>
    );
}
