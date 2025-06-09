import * as React from "react";
import {type ReactElement} from 'react';
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactElement
}

export const ProtectedRoute = ({children}: Props): ReactElement => {
    const logged = true
    return logged ? children : <Navigate to={'/404'}/>
};