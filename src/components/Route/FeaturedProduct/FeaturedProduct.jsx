import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  // Limiting the number of products to be displayed to 4
  const featuredProducts = allProducts ? allProducts.slice(0, 4) : [];

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1 className="mt-[20px]">Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {featuredProducts.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
