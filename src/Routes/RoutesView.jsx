import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import App from "../App";
import NotFoundPage from "../components/NotFound/NotFoundPage";

const RoutesView = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/esqueci-minha-senha" element={<ForgetPassword />} />
                <Route path="/404" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default RoutesView;