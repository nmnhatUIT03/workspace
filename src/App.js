import React, { useState } from "react";
import CatList from "./CatList";
import CatForm from "./CatForm";

import "./styles.css";

const App = () => {
  const [cats, setCats] = useState([
    {
      name: "Byron",
      stage: "Kitten",
      breed: "American Short Hair",
      avatar:
        "https://www.dailypaws.com/thmb/NpYhELvHgCvcbWlm8yFD70HIz9M=/264x350/filters:no_upscale():max_bytes(150000):strip_icc()/gray-tabby-american-shorthair_757090435-1-2000-3cdd3f48d0484c81a72fab47e9bff0f4.jpg"
    },
    {
      name: "Missy",
      stage: "Young",
      breed: "Domestic Short Hair",
      avatar:
        "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2022/02-11/domestic+shorthair+tabby+cat+hiding+behind+a+cat+tower-min.jpg"
    }
  ]);
  // TODO: Update this function
  const handleCatSubmit = (name, stage, breed, gender, avatar) => {
    // TODO: This should be changed when we have new props
    const newCat = {
      name,
      stage,
      breed,
      gender,
      avatar
    };

    setCats((prevCats) => [newCat, ...prevCats]);
  };

  return (
    <div>
      <h1>Meowville: A Cat Lover's Paradise</h1>
      <CatForm handleCatSubmit={handleCatSubmit} />
      <CatList cats={cats} />
    </div>
  );
};

export default App;
