import React from "react";
import "./Home.css";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Loveguest from "../../components/Loveproperties/Loveguest";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
const Home = () => {
  const [openoptions, setOpenoptions] = useState(false);
  function handleop() {
    setOpenoptions(() => !openoptions);
  }
  return (
    <div className={openoptions ? "dark" : "light"}>
      <Navbar></Navbar>
      <Header openoptions={openoptions} handleOp={handleop}></Header>
      <div className="homeContainer">
        <Featured></Featured>
        <div className="hometitle"> Browse by property type</div>

        <PropertyList />
        <div className="hometitle"> Homes guests Love</div>
        <Loveguest />
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
