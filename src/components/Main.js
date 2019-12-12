import React, { createRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import "../css/Main.css";

/* page1_imgs*/
import intro from "../css/img/gif_intro.gif";
import walk from "../css/img/walk.png";
/* page2_imgs*/
import mission_map from "../css/img/mission_map.jpg";
import mission_list from "../css/img/mission_list.jpg";
/* page3_imgs */
import stamp_ui from "../css/img/Stamp_UI.jpg";
import low_cost from "../css/img/low_cost.png";
import money from "../css/img/money.png";

const Page = ({
  offset,
  page1_caption,
  first,
  page1_text,
  page1_text2,
  page1_img,
  page1_img2,
  page2_caption,
  page2_text,
  page2_text2,
  page2_img,
  page2_img2,
  page3_caption,
  page3_text,
  page3_text2,
  page3_img,
  page3_img2,
  last_caption,
  last_first,
  last_img,
  last_img2,
  last_img3,

  gradient,
  onClick
}) => (
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

    <ParallaxLayer className="text page1_caption" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 40 }}>{page1_caption}</p>
        <div className={`stripe ${gradient}`} />
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text content" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{first}</p>
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page1_text" offset={offset} speed={0.4}>
      <span>
        <p>{page1_text}</p>
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page1_text2" offset={offset} speed={0.4}>
      <span>
        <p>{page1_text2}</p>
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page1_img" offset={offset} speed={0.4}>
      <span>
        <p>{page1_img}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text page1_img2" offset={offset} speed={0.4}>
      <span>
        <p>{page1_img2}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text page2_caption" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 40 }}>{page2_caption}</p>
        <div className={`stripe ${gradient}`} />
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page2_text" offset={offset} speed={0.4}>
      <span>
        <p>{page2_text}</p>
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page2_text2" offset={offset} speed={0.4}>
      <span>
        <p>{page2_text2}</p>
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page2_img" offset={offset} speed={0.4}>
      <span>
        <p>{page2_img}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text page2_img2" offset={offset} speed={0.4}>
      <span>
        <p>{page2_img2}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text page3_caption" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 40 }}>{page3_caption}</p>
        <div className={`stripe ${gradient}`} />
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text page3_text" offset={offset} speed={0.4}>
      <span>
        <p>{page3_text}</p>
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page3_text2" offset={offset} speed={0.4}>
      <span>
        <p>{page3_text2}</p>
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="text page3_img" offset={offset} speed={0.4}>
      <span>
        <p>{page3_img}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text page3_img2" offset={offset} speed={0.4}>
      <span>
        <p>{page3_img2}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text last_caption" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 40 }}>{last_caption}</p>
        <div className={`stripe ${gradient}`} />
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text last_content" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{last_first}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text last_img" offset={offset} speed={0.4}>
      <span>
        <p>{last_img}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text last_img2" offset={offset} speed={0.4}>
      <span>
        <p>{last_img2}</p>
      </span>
    </ParallaxLayer>
    <ParallaxLayer className="text last_img3" offset={offset} speed={0.4}>
      <span>
        <p>{last_img3}</p>
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
          pages={4}
        >
          <Page
            offset={0}
            gradient="pink"
            page1_caption="세계 어디서든 STAMP!"
            first="소비자 위치주변 할인, 이벤트가 모두 여기에"
            page1_text="Drugstore platform"
            // text2="유연한 광고관리"
            // text3=""
            // text4=""
            page1_img={<img src={walk} />}
            page1_img2={<img src={intro} />}
            onClick={() => scroll(1)}
          />
          <Page
            offset={1}
            gradient="teal"
            page2_caption="smart marketing STAMP"
            first="소비자 위치기반 매장과 인접한 소비자에게 즉각적인 홍보를 통하여 전략적인 마케팅을 펼쳐보세요. "
            page2_text="Benchmarking ＆ Variety Event"
            page2_img={<img src={mission_list} />}
            page2_img2={<img src={mission_map} />}
            onClick={() => scroll(2)}
          />
          <Page
            offset={2}
            gradient="tomato"
            page3_caption="헤매지 말고 STAMP!"
            first="Easy Registration ＆＆ Low Cost ＆＆ Effective Performance = STAMP "
            page3_text="Game App? Commerce App?"
            page3_text2="게임같은 구성의 신개념 모바일 커머스 앱"
            page3_img={<img src={money} />}
            page3_img2={<img src={stamp_ui} />}
            onClick={() => scroll(3)}
          />
          <Page
            offset={3}
            gradient="green"
            last_caption="할인,이벤트 정보의 모든것"
            last_first="위치기반 주변매장, 할인＆이벤트정보, 신제품 벤치마킹 등 여기에 다 있어요"
            last_img={<img src={intro} />}
            last_img2={<img src={mission_map} />}
            last_img3={<img src={mission_list} />}
            onClick={() => scroll(0)}
          />
        </Parallax>
      </BrowserRouter>
    </>
  );
}
