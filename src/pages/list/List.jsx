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
import useFetch from "../../hooks/useFetch";
const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);

  const [date, setDate] = useState(location.state.date);
  const [editdate, setEditdate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8000/hotels?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );
  const handleclick = () => {
    reFetch();
  };

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
              <input
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                placeholder={destination}
              />
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
                <input
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                  className="lsoptioninput"
                />
              </div>

              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Max price <small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                  className="lsoptioninput"
                />
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
            <button className="lsearch" onClick={handleclick}>
              Search
            </button>
          </div>
          <div className="listresult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <Searchitem key={item._id} item={item}></Searchitem>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default List;
