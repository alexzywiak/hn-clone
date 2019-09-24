import { useState, useEffect } from "react";

export default (url, id, expanded) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${url}/${id}`);
        const data = await result.json();
        setData(data);
      } catch (e) {
        console.error("Error fetching data");
      }
    };
    if (expanded) {
      fetchData();
    }
  }, [url, id, expanded]);

  return data;
};
