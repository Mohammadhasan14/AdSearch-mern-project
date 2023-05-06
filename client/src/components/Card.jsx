import React from 'react'

export default function Card(props) {
    return (
        <div className="card shadow-lg mx-3 my-5" style={{ width: "18rem", marginTop: "8rem" }}>
            <img src={props.adsImage} className="card-img-top" alt="..." />


            <ul className="list-group list-group-flush">
                <div className="card-body">
                    <h4 className="card-title text-center">{props.companyName}</h4>
                </div>
                <li className="list-group-item">
                    <h5 className="card-title text-danger">Headline:</h5>
                    <p className="card-text ">{props.headline}</p>
                    <h5 className="card-title text-danger">Description:</h5>
                    <p className="card-text">{props.description}</p>
                    <h5 className="card-title text-danger">Primary Text:</h5>
                    <p className="card-text">{props.primaryText}</p>

                </li>
            </ul>
        </div>
    )
}
