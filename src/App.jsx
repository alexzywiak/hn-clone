import React, { useState } from "react";
import "./App.css";
import useHnData from "./hooks/useHnData";
import Search from "./Search";
import Article from "./Article";

const baseUrl = "http://hn.algolia.com/api/v1/";

function App() {
  const [searchTerm, setSearchTerm] = useState("redux");

  const data = useHnData(`${baseUrl}search?query=${searchTerm}`);

  return (
    <div className="container">
      <header>
        <h1>Showing {data ? 0 : null} articles for redux</h1>
      </header>
      <section>
        <Search
          searchTerm={searchTerm}
          onSubmit={newSearchTerm => {
            setSearchTerm(newSearchTerm);
          }}
        />
      </section>
      <section className="articles">
        {data[0] ? (
          <Article title={data[0].title} author={data[0].title} />
        ) : null}
      </section>
    </div>
  );
}

export default App;
