import React from "react";
import "./Featured.css";
import { useState } from "react";
const Featured = () => {
  const [rmv, setrmv] = useState(false);
  return (
    <div
      className={rmv ? "featured rmv" : "featured "}
      onMouseEnter={() => setrmv(() => true)}
      onMouseLeave={() => setrmv(() => false)}
    >
      <div className="featureditem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className="featuredim"
        />
        <div className="featuredtitles">
          <h1>New Delhi</h1>
          <h1>145 Properties</h1>
        </div>
      </div>

      <div className="featureditem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
          alt=""
          className="featuredim"
        />
        <div className="featuredtitles">
          <h1>Bangalore</h1>
          <h1>255 Properties</h1>
        </div>
      </div>

      <div className="featureditem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
          className="featuredim"
        />
        <div className="featuredtitles">
          <h1>Mumbai</h1>
          <h1>155 Properties</h1>
        </div>
      </div>
      <div className="featureditem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
          className="featuredim"
        />
        <div className="featuredtitles">
          <h1>Mumbai</h1>
          <h1>155 Properties</h1>
        </div>
      </div>
      <div className="featureditem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
          className="featuredim"
        />
        <div className="featuredtitles">
          <h1>Mumbai</h1>
          <h1>155 Properties</h1>
        </div>
      </div>
      <div className="featureditem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
          className="featuredim"
        />
        <div className="featuredtitles">
          <h1>Mumbai</h1>
          <h1>155 Properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
