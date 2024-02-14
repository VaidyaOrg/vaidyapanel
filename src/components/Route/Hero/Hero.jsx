import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[60vh] w-[100vw] bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: "url(/hero_bg.jpeg)",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] flex flex-col justify-center items-end`}
      >
        <h1
          className={`pt-24 text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize text-right`}
        >
          Best Collection for <br /> pharmetuticals
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba] text-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Beatae,
          assumenda? Quisquam itaque exercitationem  <br />labore vel, dolore
          quidem  asperiores, laudantium  <br /> temporibus soluta optio consequatur aliquam  <br /> deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block mt-5">
          <div className={`${styles.button}`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
