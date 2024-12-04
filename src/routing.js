import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/section/section";

export function Routing({state,dispatch}){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}