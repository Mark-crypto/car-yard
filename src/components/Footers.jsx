import React, { useState } from "react";
import { GrInstagram } from "react-icons/gr";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";

import "./components.css";

export const Footers = () => {
  const [text, setText] = useState();
  return (
    <>
      <div className="footers">
        <div className="footers-1">
          <h5 style={{ color: "blue" }}>Important Links</h5>
          <ul>
            <li>
              <a href="/">Home Page</a>
            </li>
            <li>
              <a href="/products">Available vehicles</a>
            </li>
            <li>
              <a href="#">Feedback Form</a>
            </li>
          </ul>
        </div>
        <div className="footers-2">
          <h5 style={{ color: "blue" }}>Register your email</h5>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="footers-3">
          <h5 style={{ color: "blue" }}>Social media</h5>
          <ul>
            <li>
              <a href="https://instagram.com">
                <GrInstagram style={{ color: "blue" }} />{" "}
                <span> Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <FaSquareTwitter style={{ color: "blue" }} />{" "}
                <span> Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://tiktok.com">
                <RiTiktokLine style={{ color: "blue" }} /> <span> TikTok</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
