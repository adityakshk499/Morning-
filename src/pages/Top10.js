import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Top10 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/search/trending/?precision=3";

    fetch(url).then((response) =>
      response.json().then((data) => setData(data))
    );
  }, []);

  return data.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Cards data={data.coins} checker={"top10"} />
    </div>
  );
};

export default Top10;
