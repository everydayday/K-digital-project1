import "./App.css";
import { Button, Tabs, Menu } from "antd";
import { Link,useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {ReactComponent as Logo} from './images/logo4.svg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import KoreaMap from "./kmap/KoreaMap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import G2chart from "./chart/G2chart";

import { Routes, Route } from "react-router-dom";

// image 경로
const images = [
  "/imgs/info1.jpg",
  "/imgs/info2.jpg",
  "/imgs/info3.jpg"
  
];
const imglength = images.length;
let imgIndex = 0;

// 재귀함수로 image n초마다 보여주기
// window.onload -> 함수 이름 나타내지 않아
// -> 재귀함수 어려움
function showImage() {
  let nextImage = document.getElementById("changeImage");
  //nextImage.src = images[imgIndex]
  //console.log("images[imgIndex] : ", images[imgIndex])
  //console.log("nextImage : " , nextImage)
  imgIndex = imgIndex + 1;
  //console.log("imgIndex:", imgIndex)

  if (imgIndex === imglength) {
    imgIndex = 0;
  }

  // 한번에 두 번 실행되는 오류 발생 (console 찍어보면 알 수 있음)
  setTimeout(showImage, 2000); // setTimeout안에 실행할 함수의 호출이 들어가 있음
}

window.onload = showImage(0);
// window 가 실행되었을 때 함수 실행

function MainPage() {
  const [index, setIndex] = useState(0);
  // const nextImage = () =>{
  //   //setIndex(index+1)
  //   console.log(index)
  // }

  

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const btn1 = () => {
    document.getElementById("kmap").style.display = "block";
    document.getElementById("chart").style.display = "none";
    
  }

  const btn2 = () => {
    document.getElementById("kmap").style.display = "none";
    document.getElementById("chart").style.display = "block";
    
  }

  const btn3 = () => {
    document.getElementById("kmap").style.display = "none";
    console.log("btn3");
  }

  return (
    <div>
      {/* 전체 적용 div */}
      <div
        className="flex flex-col w-full
                            max-w-screen-xl
                            h-screen
                            mx-auto
                            overscroll-y-auto bg-slate-50
                            "
      >
        <header
          className="flex justify-between
                                h-20  p-2 m-2
                                text-xl
                                items-center
                                shadow-md rounded-md"
        >
          
            <div className="flex text-5xl font-bold">
              {/* <AppstoreOutlined /> */}
              
              <Logo />
              
              <div className="text-blue-600 ml-1">ClearS</div>
              <div>ee</div>
            </div>
            <div className="flex flex-row">
              <div className="font-bold flex flex-row items-center ">
                <a className="m-3" href="#">
                  About
                </a>
                <a className="m-3" href="#">
                  Contact
                </a>
                <a className="m-3" href="#">
                  FAQ
                </a>
              </div>
              <div className="text-xl flex gap-5 font-bold justify-center items-center ml-1">
                <button className="bg-slate-300 p-2 rounded-md">
                  마이페이지
                </button>
                <button className="bg-slate-300 p-2 rounded-md">로그아웃</button>
              </div>
            </div>
          
        </header>

        {/* div가 load 되었을 때 */}
        <div className="flex justify-center mt-2">
          {/* <img
            className="rounded-lg w-4/5 h-[364px]"
            src={images[0]}
            alt="no image"
            id="changeImage"
          /> */}
          {/* swiper react */}
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="rounded-lg w-full h-[364px]" src={images[0]} alt="no image" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-full h-[364px]" src={images[1]} alt="no image" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg w-full h-[364px]" src={images[2]} alt="no image" /></SwiperSlide>
        
      </Swiper>
        </div>

        <div className="flex justify-center content-center h-40 ">
          <select className="m-2 rounded-lg">
            <option value="">1차 분류</option>
            <option value="1">건설·채굴</option>
          </select>
          <select className="m-2 rounded-lg" type="hidden">
            <option>2차 분류</option>
            <option>dd</option>
          </select>
          <select className="m-2">
            <option>3차 분류</option>
            <option>dddd</option>
          </select>
        </div>

        <div className="flex flex-row h-full">
          <div className="flex justify-center items-stretch h-full w-1/5">
            <div className="bg-blue-200 w-48 flex-grow  justify-center"></div>
            <div className="flex flex-col bg-blue-100">
              {/* https://ant.design/components/menu/ */}
              <div style={{width: 256}} className="flex flex-col justify-center" id="btns">
                <button className="bg-slate-300 rounded-md
                                      text-xl m-3 w-[200px] inline-flex 
                                      hover:bg-slate-400   items-center justify-center"
                        onClick={btn1} >지도로비교 </button>
                <button className="bg-slate-300 rounded-md
                                      hover:bg-slate-400 text-xl m-3 w-[200px] inline-flex items-center justify-center"
                        onClick={btn2} >표로비교</button>
                <button className="bg-slate-300 rounded-md
                                      hover:bg-slate-400 text-xl m-3 w-[200px] inline-flex items-center justify-center"
                        onClick={btn3} >상세보기</button>
                
                {/* <Button
                  type="primary"
                  onClick={toggleCollapsed}
                  style={{
                    marginBottom: 16,
                  }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button> */}
                {/* <Menu
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                  theme="none"
                  inlineCollapsed={collapsed}
                  items={items}
                /> */}
              </div>
              

              {/* https://ant.design/components/tabs */}
              {/* <Link to="/kmap">
                <Tabs
                  //defaultActiveKey="1"
                  id="tab1"
                  tabPosition={"left"}
                  style={{ height: 100 }}
                  items={tabitems}
                  handle={handleClick}
                />
              </Link>

              <Link to="/kmap">
                <Tabs
                  defaultActiveKey="1"
                  tabPosition={"left"}
                  style={{
                    height: 100,
                  }}
                  items={new Array(1).fill(null).map((_, i) => {
                    const id = String(i + 2);
                    return {
                      label: `Tab-${id}`,
                      key: id,
                      //disabled: i === 2,
                      //children: `Content of tab ${id}`,
                    };
                  })}
                />
              </Link>

              <Link to="/kmap">
                <Tabs
                  defaultActiveKey="1"
                  tabPosition={"left"}
                  style={{
                    height: 100,
                  }}
                  items={new Array(1).fill(null).map((_, i) => {
                    const id = String(i + 3);
                    return {
                      label: `Tab-${id}`,
                      key: id,
                      //disabled: i === 2,
                      //children: `Content of tab ${id}`,
                    };
                  })}
                />
              </Link> */}
            </div>
          </div>

          {/* 감췄다가 나타나게하기 */}
          <div className="hidden flex justify-center items-center w-full" id="kmap">
            {/* <Routes>
            <Route path="/kmap" element={<KoreaMap/>} />  
            </Routes> */}
             <KoreaMap/>
          </div>
          <div className="hidden flex justify-center items-center p-3 w-full h-full" id="chart">
              <G2chart />
          </div>
        </div>

        <div>
        
        </div>
        
        <footer className="flex justify-center items-center  inset-x-0 bottom-0 h-16  text-white bg-slate-800">
          @ 2024 Kim Dae Hee. All rights reserved
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
