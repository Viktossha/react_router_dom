import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";
import {ProtectedPage} from "./components/pages/ProtectedPage";

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PRICES: '/prices',
    ERROR404: '/404'
} as const

function App() {

    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to='protected'>ProtectedPage</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <NavLink to={'/'} className={styles.LinkLikeButton}>Main page</NavLink>
                        <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Back</button>
                    </div>
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}

                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}

                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}

                    {/*    /!*<Route path={PATH.ERROR404} element={<Error404/>}/>*!/*/}
                    {/*    /!*<Route path="/*" element={<Navigate to={PATH.ERROR404}/>}/>*!/*/}
                    {/*    <Route path="/*" element={<Error404/>}/>*/}
                    {/*</Routes>*/}
                    <Outlet/>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
