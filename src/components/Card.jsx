import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.data.imageUrl} className="card--img"></img>
            <div className="card--information">
                <FontAwesomeIcon icon={faLocationDot} className="card--icon" />
                <p className="card--location">{props.data.location}</p>
                <a className="card--link" href={props.data.googleMapsUrl}>
                    View on Google Maps
                </a>
                <h1 className="card--title">{props.data.title}</h1>
                <p className="card--date">
                    {props.data.startDate} - {props.data.endDate}
                </p>
                <p className="card--description">{props.data.description}</p>
            </div>
        </div>
    );
}
