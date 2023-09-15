import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Searchitem.css";
const Searchitem = ({ item }) => {
  const [on, seton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      seton(() => true);
    }, 3000);
    seton(() => false);
  }, []);

  return (
    <div className="SearchItem">
      <img className="siimg" src={item.photos[0]} alt="" />
      <div className="sidesc">
        <h1 className="sititle">{item.name}</h1>
        <span className="sidistance">{item.distancce}m from center</span>
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
              <i class="fa-solid fa-dollar-sign fa-shake"></i>
              {item.chepestprice}
            </span>
            <span className="sitaxop">Inludes taxes and fees</span>
            <Link to={`/hotels/api/${item._id}`}>
              <button className="sicheckbtn">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchitem;
