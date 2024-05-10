import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import App from "../App";
import UpdatePassword from "../components/UpdatePassword/UpdatePassword";
import NotFoundPage from "../components/NotFound/NotFoundPage";
import ScreenRegister from "../components/Register/ScreenRegister";

const RoutesView = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/esqueci-minha-senha" element={<ForgetPassword />} />
                <Route exact path="/recuperar-senha" element={<UpdatePassword />} />
                <Route path="/register" element={<ScreenRegister />} />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default RoutesView;