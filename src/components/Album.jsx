import React from "react";

function Album(props) {
  return (
    <ul className="album">
      <li>{props.sr_no}.</li>
      <li>
        {props.name}
        <br />
        Artist : {props.artist}
        <br />
        Category : {props.category}
      </li>
      <li>
        Total Songs : {props.totalSongs}
        <br />
        Release Date : {props.r_date}
        <br />
        {props.rights}
      </li>
      <li>
        Price : {props.price}
        <br />
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Click to buy
        </a>
      </li>
    </ul>
  );
}

export default Album;
