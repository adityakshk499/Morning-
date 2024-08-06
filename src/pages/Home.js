import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { clear } from "@testing-library/user-event/dist/clear";

const Home = function () {
  const [example, setExample] = useState(0);
  console.log("Hello from function");

  return (
    <div>
      {console.log("inside return")}

      <button onClick={() => setExample(example + 1)}>
        Example : {example}
      </button>
    </div>
  );
};

export default Home; // Exporting the component for use in other files.
