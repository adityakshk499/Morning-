import { useState } from "react";

const Home = function () {
  var [likes, setLikes] = useState(0);

  var likeFunction = function () {
    setLikes(likes + 1);
    console.log(likes);
  };

  return (
    <div>
      <button onClick={likeFunction}>Like</button>
      <h2>{likes}</h2>
    </div>
  );
};

export default Home; // Exporting the component for use in other files.
