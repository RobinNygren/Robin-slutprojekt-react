import React, { useState } from "react";
import { StarRatingProps } from "../../types/types";

const StarRating: React.FC<StarRatingProps> = ({
  count,
  value = 0,
  onChange,
}) => {
  const [hovered, setHovered] = useState(0);

  const handleMouseEnter = (star: number) => {
    if (onChange) {
      setHovered(star);
    }
  };

  const handleMouseLeave = () => {
    if (onChange) {
      setHovered(0);
    }
  };

  const handleClick = (star: number) => {
    if (onChange) {
      onChange(star);
    }
  };
  return (
    <div className="flex">
      {Array.from({ length: count }, (_, i) => i + 1).map((star) => (
        <Star
          key={star}
          filled={star <= (hovered || value)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
};
const Star: React.FC<{
  filled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}> = ({ filled, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`cursor-pointer text-xl ${
        filled ? "text-yellow-400" : "text-gray-300"
      }`}
    >
      ★
    </span>
  );
};
export default StarRating;
