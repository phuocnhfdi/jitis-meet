import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import {Home} from "./Home"
import LoginSuccessPage from "../customer-dashboard/Home"
import Notfound from './Notfound'
import { App } from '../app/components/App.web';
import Login from './Login'

function AppCustom() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/">
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/l" element={<LoginSuccessPage />}></Route>

                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>

    );
}

export default AppCustom;
