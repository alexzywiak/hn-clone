import React, { useState } from "react";
import "./App.css";
import useHnData from "./hooks/useHnData";
import Search from "./Search";
import Article from "./Article";

const baseUrl = "http://hn.algolia.com/api/v1/";

function App() {
  const [query, setQuery] = useState("redux");

  const data = useHnData(`${baseUrl}search?query=${query}`);

  return (
    <div className="container">
      <header>
        <h1>Showing {data ? 0 : null} articles for redux</h1>
      </header>
      <section>
        <Search
          onSubmit={query => {
            setQuery(query);
          }}
        />
      </section>
      <section className="articles">
        {data[0]
          ? data.map(article => (
              <Article
                key={article.objectID}
                title={article.title}
                author={article.author}
                objectID={article.objectID}
              />
            ))
          : null}
      </section>
    </div>
  );
}

export default App;
