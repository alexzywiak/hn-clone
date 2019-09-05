import React, { useState } from "react";
import "./App.css";
import useHnData from "./hooks/useHnData";
import Search from "./Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("redux");

  const data = useHnData(searchTerm);

  return (
    <div className="container">
      <header>
        <h1>Showing {data ? 0 : null} articles for redux</h1>
      </header>
      <section>
        <Search />
      </section>
      <section className="articles"></section>
    </div>
  );
}

export default App;
