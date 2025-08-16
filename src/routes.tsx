import { lazy } from "react";
import { Routes, Route } from "react-router";

const HomePage = lazy(() => import("./pages/Home"));

export default function CustomRoutes() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
        </Routes>
    );
}

/* <Route path="dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />
    <Route path="settings" element={<Settings />} />
</Route> */
