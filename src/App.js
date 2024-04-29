import React from "react";
import {Outlet, Route, Routes} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
    return (<div style={{"backgroundColor": "black"}}>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>);
};
export default function App  ()   {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index="index" element={<MainPage/>}/>
                    <Route path=":movieId" element={<DetailPage/>}/>
                    <Route path="search" element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
} 