import React from "react";

export default props => {
  return (
    <>
      <a href={props.url}>{props.url}</a>
      <p>{props.text}</p>
    </>
  );
};
