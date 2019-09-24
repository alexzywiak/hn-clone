import React, { useCallback, useState } from "react";
import Comments from "./Comments";
import Content from "./Content";
import getSingleHnData from "./hooks/getSingleHnData";

const baseUrl = "http://hn.algolia.com/api/v1/items";

export default ({ author, title, objectID }) => {
  const [expanded, setExpanded] = useState(false);
  const data = getSingleHnData(baseUrl, objectID, expanded);

  const toggleExpanded = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{author}</p>
      <button onClick={toggleExpanded}>{expanded ? "Less" : "More"}</button>
      {expanded && data ? (
        <>
          <Content {...data} />
          <Comments {...data} />
        </>
      ) : null}
    </div>
  );
};
