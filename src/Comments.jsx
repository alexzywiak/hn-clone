import React from "react";

export default props => {
  return props.children.map(comment => (
    <div dangerouslySetInnerHTML={{ __html: comment.text }} />
  ));
};
