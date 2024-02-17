import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const {allProducts,isLoading} = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    setData(sortedData);
  }, [allProducts]);

  return (
   <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <div>
          <Header activeHeading={2} />
          <div style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }} className={`d-flex justify-content-center pt-20 ${styles.heading}`}>
            
          <h1 className="texthead leading-relaxed font-[600]">
          Best  {" "}
          <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
            Selling
          </span>
        </h1>
      </div>
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
    </div>
    )
   }
   </>
  );
};

export default BestSellingPage;
