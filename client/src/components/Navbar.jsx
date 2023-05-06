import React from 'react'

export default function Navbar() {
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
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
