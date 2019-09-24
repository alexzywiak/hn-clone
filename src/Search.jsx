import React, { useState } from "react";

export default props => {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("redux");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(searchTerm);
      }}
    >
      <input
        data-testid="search-input"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
