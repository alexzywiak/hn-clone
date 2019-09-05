import { useState, useEffect } from "react";

export default query => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `http://hn.algolia.com/api/v1/search?query=${query}`
        );
        const data = await result.json();
        setData(data);
      } catch (e) {
        console.error("Error fetching data");
      }
    };
    fetchData();
  }, [query]);

  return data ? data.hits : [];
};
