import {
  faBed,
  faCalendar,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

// import React, { useState } from "react";

import { addDays } from "date-fns";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({ type, openoptions, handleOp }) => {
  //   const [date, setDate] = useState({
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   });
  const [destination, setDestination] = useState("");

  const [opendate, setOpendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();
  const Handlesearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? option[name] + 1
            : option[name] > 0
            ? option[name] - 1
            : 1,
      };
    });
  };
  return (
    <div className="header">
      <div className={type === "list" ? "headercon listmode" : "headercon"}>
        <div className="headerlist">
          <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerlistitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerlistitem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rental</span>
          </div>

          <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="headerlistitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxies</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {" "}
            <h1 className="headertitle">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="headerdiscription">
              Get rewarderd for your travels- unlock instant saving of 10%
              orwith a free V-booking account
            </p>
            <button className="headerbtn">Sign in/Register</button>
            <div className="headersearch">
              <div className="headersearchitem">
                <FontAwesomeIcon
                  icon={faBed}
                  className="headericon"
                ></FontAwesomeIcon>
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className="headersearchinput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headersearchitem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headericon"
                ></FontAwesomeIcon>
                <span
                  onClick={() => setOpendate(() => !opendate)}
                  className="headersearchtext"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")}  to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}{" "}
                </span>
                {/* <DateRangePicker
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={date}
              onChange={(item) => setDate([item.selection])}
            ></DateRangePicker> */}
                {opendate ? (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    // months={2}
                    minDate={new Date()}
                    ranges={date}
                    direction="horizontal"
                    className="date"
                  />
                ) : null}
              </div>
              <div className="headersearchitem">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headericon"
                ></FontAwesomeIcon>
                <span
                  className={
                    openoptions ? "headersearchtext light" : "headersearchtext"
                  }
                  onClick={() => handleOp()}
                >
                  {" "}
                  {`${option.adult}`} adults {`${option.children}`} child{" "}
                  {`${option.room}`} room
                </span>
                {openoptions ? (
                  <div className="options">
                    <div className="optionsitem">
                      <span className="optiontext">Adult</span>

                      <div className="optioncounter">
                        <button
                          className="optioncounterbtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                        <span className="optioncounternumber">
                          {" "}
                          {`${option.adult}`}{" "}
                        </span>
                        <button
                          disabled={option.adult <= 1}
                          className="optioncounterbtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionsitem">
                      <span className="optiontext">Children</span>
                      <div className="optioncounter">
                        <button
                          className="optioncounterbtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                        <span className="optioncounternumber">{`${option.children}`}</span>
                        <button
                          className="optioncounterbtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="optionsitem">
                      <span className="optiontext">Rooms</span>
                      <div className="optioncounter">
                        <button
                          className="optioncounterbtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                        <span className="optioncounternumber">{`${option.room}`}</span>
                        <button
                          disabled={option.room <= 1}
                          className="optioncounterbtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="headersearchitem">
                <button className="headerbtn1" onClick={Handlesearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
