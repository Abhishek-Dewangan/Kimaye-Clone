import React from "react";
import styled from "styled-components";
import Calender from "./Calender";
import Index from "./Carousel11";
// import {ControlledCarousel} from "../components/ControlledCarousel"
import pic1 from "../components/last_img/pic1.jpg";
import pic2 from "../components/last_img/pic2.jpg";
import pic3 from "../components/last_img/pic3.jpg";
import pic4 from "../components/last_img/pic4.jpg";
import { useNavigate } from "react-router-dom";

const Div1 = styled.div`
  // *, *:before, *:after {
  //   background: brown;
  // }
  text-align: center;
  background-image: url(https://cdn.shopify.com/s/files/1/0449/5225/6667/files/jazz-bg-texture-min_1.jpg?v=1616673456);
  background-repeat: no-repeat;
  background-position: center top;
  background-color: transparent;
  background-size: cover;
  background-repeat: repeat-y;
  top: 0;
  height: 100%;
  opacity: 1;
  z-index: 1;
  color: rgb(171, 171, 59);
  overflow: hiden;

  img {
    cursor: pointer;
  }
`;

const Div2 = styled.div`
  width: 85%;
  height: 1300px;
  // position: absolute;
  // top: 950px;
  // left: 7.8%;
  display: grid;
  margin: auto;
  margin-top: 100px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 620px);
  gap: 50px;

  img {
    width: 100%;
    height: 72%;
    border-radius: 30px;
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  button {
    height: 40px;
    width: 130px;
    border: none;
    background: red;
    color: #fff;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 20px;
  }
`;
const P1 = styled.p`
  color: #1b1919;
  font-size: 30px;
  font-weight: 950;
  letter-spacing: 0.6px;
  margin-top: 12px;
  line-height: 35px;
`;

const P2 = styled.p`
  color: #1b1919;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin-top: -17px;
`;
const Div3 = styled.div`
  height: 820px;
  width: 100%;
  background: rgb(37, 75, 48);
  opacity: 0.8;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;

  div {
    width: 45%;
    height: 92%;
    margin-top: 50px;
    text-align: left;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 96%;
  }
`;
const Div4 = styled.div`
  p:nth-child(1) {
    color: white;
    font-size: 37px;
    font-weight: 950;
    letter-spacing: 0.6px;
    margin-top: 110px;
    line-height: 35px;
  }
  p:nth-child(2) {
    color: white;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.6px;
    margin-top: 30px;
  }
  p:nth-child(3) {
    color: white;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.6px;
    margin-top: 30px;
  }
  p:nth-child(4) {
    color: white;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.6px;
    margin-top: 30px;
  }
  p:nth-child(5) {
    color: black;
    background: white;
    height: 50px;
    width: 390px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 0.6px;
    margin-top: 30px;
  }
  button {
    color: black;
    background: white;
    border-radius: 30px;
    font-size: 15px;
    height: 50px;
    width: 150px;
    border: none;
    font-weight: 400;
    letter-spacing: 0.6px;
    margin-top: 30px;
    align-items: center;
  }
`;
const P3 = styled.p`
  color: #1b1919;
  font-size: 30px;
  font-weight: 950;
  letter-spacing: 0.6px;
  margin-top: 80px;
  line-height: 35px;
  font-family: Bitterbrush;
  text-transform: uppercase;
`;

const P4 = styled.p`
  color: #1b1919;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin-top: -17px;
`;

const JazzItUp = styled.div`
  height: 590px;
  width: 100%;
  margin-top: 100px;
  background: rgb(171, 171, 59);
`;
const P5 = styled.p`
  color: #1b1919;
  font-size: 30px;
  font-weight: 950;
  letter-spacing: 0.6px;
  padding-top: 70px;
  line-height: 35px;
`;
// const Div5 = styled.div`
//   display: flex;
//   justify-content: space-around;

//   img {
//     margin-top: 20px;
//     width: 520px;
//     height: 350px;
//     border-radius: 33px;
//   }
// `;
const Div6 = styled.div`
  height: 280px;
  width: 94%;
  margin: auto;
  display: flex;
  margin-top: 60px;
  margin-bottom: 60px;
  justify-content: space-between;

  img {
    width: 270px;
    height: 100%;
    cursor: pointer;
    border-radius: 20px;
  }
`;

const MainHome = () => {
  const navigate= useNavigate();
  return (
    <Div1>
      {/* 1st Part--------------------------------------------------------> */}
      {/* <ControlledCarousel/> */}
      {/* 2nd Part--------------------------------------------------------> */}
      <img
        style={{
          marginTop: "100px",
          // paddingLeft: "37.3%",
          display: "flex",
          alignItems: "flex-start",
          marginLeft: "600px",
          width: "50px",
        }}
        src="https://cdn.shopify.com/s/files/1/0449/5225/6667/t/25/assets/recom-leaf.png"
        alt=""
      />
      <p
        style={{
          color: "#1b1919",
          fontSize: "30px",
          fontWeight: "950",
          letterSpacing: ".6px",
          marginTop: "-4px",
          lineHeight: "35px",
        }}
      >
        KIMAYE RECOMMENDS
      </p>
      <p
        style={{
          // position: "absolute",
          // top: "860px",
          // left: "34.8%",
          color: "#1b1919",
          fontSize: "24px",
          fontWeight: "400",
          letterSpacing: ".6px",
          marginTop: "-20px",
        }}
      >
        A Handpicked and Curated Fruit offering
      </p>
      {/* 3rd Part--------------------------------------------------------> */}
      <Div2>
        <div>
          <div onClick={()=>navigate(`/collections/allfruits`)} style={{ overflow: "hidden", borderRadius: "30px" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_720x.png?v=1614338437"
              alt=""
            />
          </div>
          <P1>ALL FRUITS</P1>
          <P2>Pick and choose from a wide range of delicious fruits</P2>
          <button onClick={()=>navigate(`/collections/allfruits`)}>Shop Now</button>
        </div>
        <div>
          <div onClick={()=>navigate(`/collections/cut-fruits`)}style={{ overflow: "hidden", borderRadius: "30px" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_720x.png?v=1614338730"
              alt=""
            />
          </div>
          <P1>FRESH CUTS</P1>
          <P2>We want to spoon-feed you… quite literally</P2>
          <button onClick={()=>navigate(`/collections/cut-fruits`)}>Shop Now</button>
        </div>
        <div>
          <div onClick={()=>navigate(`/collections/combo-fruits`)}style={{ overflow: "hidden", borderRadius: "30px" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_720x.jpg?v=1614339080"
              alt=""
            />
          </div>
          <P1>FRUIT COMBOS</P1>
          <P2>Indulge in fruit combinations created by us</P2>
          <button onClick={()=>navigate(`/collections/combo-fruits`)}>Shop Now</button>
        </div>
        <div>
          <div onClick={()=>navigate(`/collections/gifts`)} style={{ overflow: "hidden", borderRadius: "30px" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Untitled_design_6_720x.png?v=1634808861"
              alt=""
            />
          </div>
          <P1>GIFTS BY KIMAYE</P1>
          <P2>Healthy & memorable gifts for your loved ones</P2>
          <button onClick={()=>navigate(`/collections/gifts`)}>Shop Now</button>
        </div>
      </Div2>
      {/* 4th Part--------------------------------------------------------> */}
      <Div3>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_670x.png?v=1622009438"
            alt=""
          />
        </div>
        <Div4>
          <p>WE’D LIKE TO SAY KIMAHI…</p>
          <p>Many of us share common safety concerns about the food we eat.</p>
          <p>
            When it comes to fruits, these concerns are even more serious in
            terms of the way they are grown and handled throughout their
            farm-to-home journey. We make eating fruits a worry-free and
            enjoyable experience for you.
          </p>
          <p>
            Since 2009, we have set the benchmark for fruit safety and quality
            in 35 countries. Kimaye is now expanding its footprint in India,
            bringing you multiple varieties of fruit that are grown, packaged,
            and delivered in the safest and most socially responsible manner.
          </p>
          <p>Kimaye is #allSafe#allGood</p>
          <button>KNOW MORE</button>
        </Div4>
      </Div3>
      {/* 5th Part--------------------------------------------------------> */}
      <P3>THE SECRET’S OUT: WE’RE SUPER SAFE</P3>

      <P4>Witness Our Journey</P4>
      {/* 6th Part--------------------------------------------------------> */}
      <Calender />
      {/* 7th Part--------------------------------------------------------> */}
      <JazzItUp>
        <P5>JAZZ IT UP WITH FRUITS</P5>
        <Index />
      </JazzItUp>
      {/* 8th Part--------------------------------------------------------> */}
      <P5>PSST… LOOKIN’ FOR US?</P5>
      <P4>We are here</P4>
      {/* 9th Part--------------------------------------------------------> */}
      <Div6>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </Div6>
    </Div1>
  );
};

export default MainHome;
