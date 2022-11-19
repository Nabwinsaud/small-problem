import { useState } from "react";
const Rating = () => {
  const [activeStar, setActiveUser] = useState(-1);
  const totalStar: number = 5;
  const activeStars: number = 3;
  const handleClick = (index: number) => {
    setActiveUser(index);
  };
  return (
    <div>
      {[...new Array(totalStar)].map((arr, index): "⭐" | "⭐" => {
        return index < activeStar ? "⭐" : "⭐";
      })}
    </div>
  );
};

export default Rating;
