import React from "react";

export default class Search extends React.Component {
  render() {
    const { searchTerm, onSubmit } = this.props;
    return (
      <form onSubmit={evt => onSubmit(evt)}>
        <input data-testid="search-input" value={searchTerm}></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}
