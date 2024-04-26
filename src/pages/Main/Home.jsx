import React, { useState } from "react";
import Header from "../../components/Layout/Main/Header";
import Footer from "../../components/Layout/Main/Footer";
import styles from "../../styles/styles";
import ProfileSideBar from "../../components/Profile/ProfileSidebar";
import ProfileContent from "../../components/Profile/ProfileContent";
const Home = () => {

  const [active, setActive] = useState(1);
  return (
    <div>
      <Header activeHeading={1} />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
        {/* Add the sidebar on the right side */}
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
