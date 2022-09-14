import React from "react";
import data from "../data";

export default function Card(props) {
  return (
    <section>
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}${props.item.imageUrl}`}
          className="card--photo"
        />

        <div className="card--details">
          <div className="card--location">
            <img
              src={process.env.PUBLIC_URL + "/images/location.png"}
              className="card--location--logo"
            />
            <p className="card--location--country">{props.item.location}</p>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>

          <h1 className="card--title">{props.item.title}</h1>
          <span className="date">
            {`${props.item.startDate} - ${props.item.endDate}`}
          </span>

          <p className="card--desc">{props.item.description}</p>
        </div>
      </div>

      <hr />
    </section>
  );
}
