import React from "react";

const StarRating = ({ name, value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  const Star = ({ filled, onClick }) => (
    <span
      className={`cursor-pointer text-3xl ${
        filled ? "text-yellow-400" : "text-gray-400"
      } transition-transform duration-200 transform hover:scale-110`}
      onClick={onClick}
    >
      ★
    </span>
  );

  return (
    <div className="flex">
      {stars.map((star) => (
        <Star
          key={star}
          filled={star <= value}
          onClick={() => onChange(name, star)}
        />
      ))}
    </div>
  );
};

export default StarRating;