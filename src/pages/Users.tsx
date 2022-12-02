import {NavLink, Outlet} from "react-router-dom";
import {Suspense} from "react";

const Users = () => {

    return (
        <>
            <h1>Users</h1>
            <p>Cette page est protégée</p>
            <p>
                <NavLink to='add'>Ajouter</NavLink>
                <NavLink to='dashboard'>Dashboard</NavLink>
            </p>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </>
    )
}
export default Users;