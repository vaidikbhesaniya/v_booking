import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./List.css";
import { useLocation } from "react-router-dom";
import { addDays } from "date-fns";
import format from "date-fns/format";
import { DateRange } from "react-date-range";
import Searchitem from "../../components/searchitem/Searchitem";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);

  const [date, setDate] = useState(location.state.date);
  const [editdate, setEditdate] = useState(false);
  const [option, setOption] = useState(location.state.option);

  return (
    <div>
      <Navbar />

      <Header type="list" />

      <div className="listcon">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className="lstitle">Search</h1>

            <div className="lsitem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsitem">
              <label>check in date</label>
              <span
                className="datespan"
                onClick={() => setEditdate(() => !editdate)}
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")}  to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {editdate ? (
                <DateRange
                  className="datetgl"
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                ></DateRange>
              ) : null}
            </div>

            <div className="lsitem">
              <label className="lsitemlb">Options</label>

              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>

              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>

              <div className="lsoptionitem">
                <span className="lsoptiontext">Adult</span>
                <input
                  min={1}
                  type="number"
                  className="lsoptioninput"
                  placeholder={option.adult}
                />
              </div>

              <div className="lsoptionitem">
                <span className="lsoptiontext">Children</span>
                <input
                  min={0}
                  type="number"
                  className="lsoptioninput"
                  placeholder={option.children}
                />
              </div>

              <div className="lsoptionitem">
                <span className="lsoptiontext">Room</span>
                <input
                  min={1}
                  type="number"
                  className="lsoptioninput"
                  placeholder={option.room}
                />
              </div>
            </div>
            <button className="lsearch">Search</button>
          </div>
          <div className="listresult">
            <Searchitem></Searchitem>
            <Searchitem></Searchitem>
            <Searchitem></Searchitem>
            <Searchitem></Searchitem>
            <Searchitem></Searchitem>
            <Searchitem></Searchitem>
            <Searchitem></Searchitem>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default List;
