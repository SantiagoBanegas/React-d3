import React from "react";
import "./card.css";

function Card(props) {
    return(
        <div className="card">
            <div className="card-img">
                <img src= {props.img} alt="card img" />
            </div>
            <div className="card-detail">
                <h2> {props.title} </h2>
                <p> {props.detail} </p>
                <h4>$ {props.price} </h4>
            </div>
            <a href="#">Ver mas</a>
        </div>
    )

}

export default Card;