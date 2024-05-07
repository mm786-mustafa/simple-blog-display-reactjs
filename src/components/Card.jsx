import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="userId">
          User ID #{props.userID}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.body}</dd>
    </div>
  );
}

export default Card;