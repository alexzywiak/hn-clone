import { useState, useEffect } from "react";

export default url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
      } catch (e) {
        console.error("Error fetching data");
      }
    };
    fetchData();
  }, [url]);

  return data ? data.hits : [];
};
