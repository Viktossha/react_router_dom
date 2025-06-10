import * as React from "react";
import {type ReactElement} from 'react';
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactElement
}

export const ProtectedRoute = ({children}: Props): ReactElement => {
    const logged = false
    return logged ? children : <Navigate to={'/login'}/>
};