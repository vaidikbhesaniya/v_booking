import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";

import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowLeft,
  faArrowRight,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import useFetch from "../../hooks/useFetch";
const Hotel = () => {
  const [on, seton] = useState(false);
  const [index, setindex] = useState(0);
  const [open, setopen] = useState(false);
  const handleopen = (i) => {
    setopen(() => true);
    setindex(i);
  };

  // const { data, loading, error, reFetch } = useFetch(
  //   `http://localhost:8000/hotels/find/}`
  // );
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/334195759.jpg?k=cd98c4b6ef6a3de760e1dbe37113e5a2c7502f3131996e15c8482a99ce0e19be&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271472362.jpg?k=9decc3510fec6786f151455c3150fff66dcc14e9ed8d08ae2255035cd5f6a5c2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/334194333.jpg?k=e4e792d326fa12d2f01ee49bdaeaa59f1243d88c88be3f14f1d60cf07ae1693a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/334195800.jpg?k=32bf6536dad0df527415ff1fcdaac1bde71062c263a01d811633943d24bf7e87&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/340574435.jpg?k=4ddf8cbd5c0ea10e01017448f55e3f01f0e5c435accee987e7d4dc1558cb4e00&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271471742.jpg?k=562a48129ed131c97fbd4f5c0eb514a4efb4950206dec3d2332f2bc11a523a24&o=&hp=1",
    },
  ];

  const handlemove = (direction) => {
    let newindex;

    if (direction === "l") {
      newindex = index === 0 ? 5 : index - 1;
    } else {
      newindex = index === 5 ? 0 : index + 1;
    }
    setindex(() => newindex);
  };
  return (
    <div>
      <Navbar></Navbar>

      <Header type="list"></Header>

      <div className="hotelcon">
        {open ? (
          <div className="slider">
            <div className="close" onClick={() => setopen(() => false)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>

            <div
              className="left"
              onClick={() => handlemove("l")}
              // onClick={() => setindex(() => (index > 0 ? index + 1 : null))}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div className="sliderwraper">
              <img src={photos[index].src} alt="" className="sliderimg" />
            </div>

            <div
              className="right"
              onClick={() => handlemove("r")}
              // onClick={() =>
              //   setindex(() => (photos.length != index ? index - 1 : null))
              // }
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        ) : null}
        <div className="hotelwraper">
          <button className="booknov">Reserve or book nov</button>
          <h1 className="hoteltitle">Grand</h1>
          <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New York</span>
          </div>
          <span className="hoteldistance">
            Excellent location -500 m from ccenter
          </span>
          <span className="hotelpricehighlight">
            Book a stay over $144 at this property and get free airport texi
          </span>
          <div className="hotelimgs">
            {photos.map((photo, i) => (
              <div className="hotelimgwraper">
                <img
                  onClick={() => handleopen(i)}
                  className="hotelimg"
                  src={photo.src}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="hoteldetail">
            <div className="hoteldetailstext">
              <p className="hoteldes">
                You're eligible for a Genius discount at Hotel Łaziska! To save
                at this property, all you have to do is sign in. Located in
                Czchów, 18 miles from Nowy Wiśnicz Castle, Hotel Łaziska has
                accommodations with free bikes, free private parking, a seasonal
                outdoor swimming pool and a garden. With a shared lounge, the
                3-star hotel has air-conditioned rooms with free WiFi, each with
                a private bathroom. Some units at the property have a balcony
                with a mountain view. At the hotel, every room has a closet.
                Every room includes a desk and a flat-screen TV, and some
                accommodations at Hotel Łaziska have a terrace. At the
                accommodation the rooms include bed linen and towels. Hotel
                Łaziska offers a continental or vegetarian breakfast. The
                restaurant at the hotel specializes in Polish cuisine. Hotel
                Łaziska has a playground. Guests at the accommodation will be
                able to enjoy activities in and around Czchów, like hiking and
                cycling. Salt Mine in Bochnia is 24 miles from Hotel Łaziska.
                The nearest airport is John Paul II International Kraków–Balice
                Airport, 58 miles from the hotel.
              </p>
            </div>
            <div
              className={on ? "hoteldetailprice upside" : "hoteldetailprice"}
            >
              <h1>Perfect for a 9 night stay</h1>

              <span>
                Located in the real heart of krakow ,this property has an
                excellent locaion score of 9.8
              </span>

              <h2>
                <b>$875</b>(9 nights)
              </h2>
              <button onClick={() => seton(() => !on)}>
                reserve or book now
              </button>
            </div>
          </div>
        </div>
      </div>
      <MailList></MailList>
      <Footer></Footer>
    </div>
  );
};

export default Hotel;
