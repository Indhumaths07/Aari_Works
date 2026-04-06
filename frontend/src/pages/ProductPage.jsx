import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductPage = () => {
  const { category } = useParams();
  const items = products[category];

  return (
    <div className="product-page">
      <h1>{category.toUpperCase()}</h1>

      <div className="product-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;