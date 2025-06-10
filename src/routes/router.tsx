import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Navigate, RouteObject, Outlet,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";
import {Login} from "../components/pages/Login";


const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    ERROR404: '/404',
    MODEL: '/:model/:id',
    LOGIN: '/login'
} as const

const publicRoutes: RouteObject[] = [
    // {
    //     path: '/',
    //     element: <Adidas/>,
    // },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR404,
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/protected',
        element: (
            <ProtectedPage/>
        )
    },
]

export const PrivateRoutes = () => {
    const isAuth = true
    return isAuth ? <Outlet/> : <Navigate to={'/login'}/>
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR404}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes
        ]
    }
]);