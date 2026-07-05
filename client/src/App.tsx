import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Scheduler from "./pages/Scheduler";
import AiComposer from "./pages/AiComposer";
import Layout from "./components/Layout";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route element = {<Layout/>}>
                <Route path="/dashboard" element ={<Dashboard/>}/>
                <Route path="/account" element ={<Account/>}/>
                <Route path="/scheduler" element ={<Scheduler/>}/>
                <Route path="/dashboard" element ={<Dashboard/>}/>
                <Route path="/ai-compose" element ={<AiComposer/>}/>


                </Route>
            </Routes>
        </>
    );
}
