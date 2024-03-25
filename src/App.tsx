import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas, adidasArr} from "./components/pages/Adidas";
import {Puma, pumaArr} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Link} from 'react-router-dom';
import {S} from './components/pages/_styles';
import Model from "./components/pages/Model";


const PATH = {
    PATH1: '/adidas',
    PATH2: '/puma',
    PATH3: '/abibas',
    ERROR: '/error404'
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<div>*/}
                    {/*    <NavLink to='/page1' className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>*/}
                    {/*        Page1*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <NavLink to='/page2' className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>*/}
                    {/*        Page2*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <NavLink to='/page3' className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>*/}
                    {/*        Page3*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}

                    <S.NavWrapper>
                        <NavLink to={PATH.PATH1}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PATH2}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PATH3}>Abibas</NavLink>
                    </S.NavWrapper>

                    {/*<div><Link to={PATH.PATH3}>Page3</Link></div>*/}
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.PATH1}/>}></Route>

                        <Route path={PATH.PATH1} element={<Adidas/>}></Route>
                        <Route path={PATH.PATH2} element={<Puma/>}></Route>
                        <Route path={PATH.PATH3} element={<Abibas/>}></Route>
                        <Route path='/adidas/:id' element={<Model array={adidasArr}/>}></Route>
                        <Route path='/puma/:id' element={<Model array={pumaArr}/>}></Route>

                        {/*<Route path={PATH.ERROR} element={<Error404/>}></Route>*/}
                        {/*<Route path='/*' element={<Navigate to={PATH.ERROR}/>}></Route>*/}

                        <Route path={'/*'} element={<Error404/>}></Route>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
