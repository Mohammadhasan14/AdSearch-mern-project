import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {

    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    function handleLogin (e){
        e.preventDefault()
        loginWithRedirect()
    }

    function handleLogOut (e){
        e.preventDefault()
        logout({ logoutParams: { returnTo: window.location.origin } })
    }

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded mb-5" aria-label="Thirteenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                    <a className="navbar-brand col-lg-3 me-0" href="/">🔎</a>
                    <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                        {isAuthenticated ? (<div class="btn-group" role="group">
                            <button type="button" class="btn me-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </button>
                            <ul class="dropdown-menu">
                                <li className='p-2'>Hi, {user.nickname}</li>
                                <li className='p-2'><button className="btn btn-primary" onClick={handleLogOut}>Log out</button></li>
                            </ul>
                        </div>) : (<button className="btn btn-primary" onClick={handleLogin}>Sign in</button>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}


