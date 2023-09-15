import React from "react";
import "./Loveguest.css";
import useFetch from "../../hooks/useFetch";
const Loveguest = () => {
  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:8000/hotels?featured=true"
  );
  console.log(data);
  return (
    <div className="fp">
      {loading ? (
        "loadind"
      ) : (
        <>
          {data.map((e) => (
            <div className="fpitem">
              <img className="fpimg" alt="" src={e.photos[0]} />
              <span className="fpname"> {e.name} </span>
              <span className="fpcity">{e.city}</span>
              <span className="fpprice">
                {" "}
                Starting From <b>${e.chepestprice}</b>
              </span>
              <div className="fprating">
                <button>{e.rating}</button>
                <span>Excellent</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Loveguest;
