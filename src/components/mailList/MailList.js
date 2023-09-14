import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailtitle">Save Time Save Money</h1>
      <span className="maildesc">
        Sign up and we'll send the best deal for you
      </span>
      <div className="mailinputcont">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
