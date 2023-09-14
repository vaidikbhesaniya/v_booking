import React, { useEffect, useState } from "react";
import "./Searchitem.css";
const Searchitem = () => {
  const [on, seton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      seton(() => true);
    }, 3000);
    seton(() => false);
  }, []);

  return (
    <div className="SearchItem">
      <img
        className="siimg"
        src="https://cf.bstatic.com/xdata/images/hotel/square200/334195759.webp?k=1fdb140815c670982f43d23ebc9951b25264724547c604358caabadb092c1384&o="
        alt=""
      />
      <div className="sidesc">
        <h1 className="sititle">Tower street apartment</h1>
        <span className="sidistance">500m from center</span>
        <span className="sitexiop">Free airport taxi</span>
        <span className="sisubtitle">
          Studio Apartment with air conditioningg
        </span>

        <span className="sifeatures">
          Entrie studio * 1 bathroom *21m 1 full bed
        </span>

        <span className="sicancelop">Free cancelation</span>
        <span className="sicancelopsubtitle">
          You can cancel later,so lock in this great priec today!
        </span>
      </div>
      <div className="sidetails">
        <div className="sirating">
          <span>Excellent</span>

          <button>
            {on ? (
              <i class="fa-regular fa-star"></i>
            ) : (
              <i class="fa-regular fa-star fa-bounce"> </i>
            )}
            8.9
          </button>

          <div className="detailtext">
            <span className="siprice">
              <i class="fa-solid fa-dollar-sign fa-shake"></i>1122
            </span>
            <span className="sitaxop">Inludes taxes and fees</span>
            <button className="sicheckbtn">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchitem;
