import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
    return (
        <div className='App'>
            <Header></Header>
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={<Home></Home>}
                    ></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
};
