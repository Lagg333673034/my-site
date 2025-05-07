import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {notAuthRoutes} from "./routes";


const AppRouter = () => {
    return (
        <Routes>
            {notAuthRoutes && notAuthRoutes.map((route, index) =>
                <Route
                    key={index}
                    path={route.path}
                    element={route.component}>
                </Route>
            )}
        </Routes>
    );
};

export default AppRouter;
