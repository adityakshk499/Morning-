import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API FETCH LOGIC
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data.length === 0) {
    return <h1 className="text-4xl h-[90vh] font-semibold">Loading...</h1>;
  } else {
    return (
      <div>
        <Cards data={data} />
      </div>
    );
  }
};

export default Trending;
