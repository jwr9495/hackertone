import React, { createRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import "../css/Main.css";
import stamp from "../css/img/stamp.png";
import ad from "../css/img/ad.png";
import walk from "../css/img/walk.png";

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      {/* <span>0{offset + 1}</span> */}
      <span>0{offset + 1}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </ParallaxLayer>
  </>
);

export default function Main() {
  let DOMnode = null;
  const scroll = to => DOMnode.scrollTo(to);
  const getRef = node => (DOMnode = node);

  return (
    <>
      <BrowserRouter>
        <Parallax
          className="container2"
          horizontal={true}
          scrolling={false}
          ref={getRef}
          pages={3}
        >
          <Page
            offset={0}
            gradient="pink"
            caption="Let's start STAMP!"
            first=""
            second={<img src={walk} />}
            onClick={() => scroll(1)}
          />
          <Page
            offset={1}
            gradient="teal"
            caption="insert your ad!"
            first=""
            second={<img src={ad} />}
            onClick={() => scroll(2)}
          />
          <Page
            offset={2}
            gradient="tomato"
            caption="testing"
            first=""
            second=""
            onClick={() => scroll(0)}
          />
        </Parallax>
      </BrowserRouter>
    </>
  );
}
