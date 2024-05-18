import React, { useState } from "react";
import { StarRatingProps } from "../../types/types";

const StarRating: React.FC<StarRatingProps> = ({ count, value, onChange }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex">
      {Array.from({ length: count }, (_, i) => i + 1).map((star) => (
        <Star
          key={star}
          filled={star <= (hovered || value)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
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
