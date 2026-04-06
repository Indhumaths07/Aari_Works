import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      onClick={() => navigate(data.link)}
    >
      <img src={data.image} alt={data.title} />

      <div className="category-overlay">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default CategoryCard;