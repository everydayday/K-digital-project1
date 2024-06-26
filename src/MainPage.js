import "./App.css";

import { Link } from "react-router-dom";

import Head from "./headfolder/Head"
import Classify from "./classifyFolder/Classify"
import Swiper1 from "./swiperFolder/SwiperFile"

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import KoreaMap from "./kmap/KoreaMap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import G2chart from "./chart/G2chart";
import Infotable from "./table/Infotable"
import { Routes, Route } from "react-router-dom";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import FootInfo from "./FooterFile/bottomNav"



//// ============================================= ////
// image 경로
const images = [
  "../imgs/info1.jpg",
  "../imgs/info2.jpg",
  "../imgs/info3.jpg",
  "../imgs/flower.jpg"
  
];



function MainPage() {  
  const [menu, setMenu] = useState(0);

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const btn1 = () => {
    document.getElementById("kmap").style.display = "block";
    document.getElementById("chart").style.display = "none";
    document.getElementById("table").style.display = "none";
    
    document.getElementById("btn1").style.backgroundColor = "rgb(148 163 184)";
    document.getElementById("btn2").style.backgroundColor = "rgb(203 213 225)";
    document.getElementById("btn3").style.backgroundColor = "rgb(203 213 225)";
    setMenu(1);
    
  }

  const btn2 = () => {
    document.getElementById("kmap").style.display = "none";
    document.getElementById("chart").style.display = "block";
    document.getElementById("table").style.display = "none";

    document.getElementById("btn1").style.backgroundColor = "rgb(203 213 225)";
    document.getElementById("btn2").style.backgroundColor = "rgb(148 163 184)";
    document.getElementById("btn3").style.backgroundColor = "rgb(203 213 225)";
    setMenu(2)
  }

  const btn3 = () => {
    document.getElementById("kmap").style.display = "none";
    document.getElementById("chart").style.display = "none";
    document.getElementById("table").style.display = "block";
    document.getElementById("classify").style.visibility = "visible";
    
    document.getElementById("btn1").style.backgroundColor = "rgb(203 213 225)";
    document.getElementById("btn2").style.backgroundColor = "rgb(203 213 225)";
    document.getElementById("btn3").style.backgroundColor = "rgb(148 163 184)";
    setMenu(3);
  } 

  // useEffect(()=>{
  //   fetch('http://localhost:5000/api/data')
  //       .then(response => {
  //         console.log(response)
  //         return response.text()})
  //       .then(data => console.log(data))
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       })


  // },[]);


  return (
    <div>
      {/* 전체 적용 div */}
      <div
        className="flex flex-col w-full
                            max-w-screen-xl
                            h-screen
                            mx-auto
                            overscroll-y-auto 
                            "
      >
        {/* header */}
        <Head />
        {/* 배너 */}
        <article className="flex justify-center mt-2">
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
          {/* <Swiper1 />  component실패*/}
        </article>

        

        {/* 800 */}
        <main className="flex flex-row h-[1500px] mt-5 ">
          {/* <div className="flex justify-center items-stretch h-[650px] w-1/5 bg-green-400"> */}
            {/* 지도 비교, 지도 포함 div */}
            <div className="flex flex-col  h-[900px] w-full">
              {/* https://ant.design/components/menu/ */}
              {/* width 256 -> x */}
              <div  className="flex flex-row justify-center font-bold w-full h-[70px] p-2 bg-blue-100 rounded-xl" id="btns">
              <button className="bg-slate-400 rounded-md
                                      hover:bg-slate-400 text-lg m-3 w-[200px] inline-flex items-center justify-center"
                        onClick={btn3} id="btn3">상세보기</button> 
                <button className="bg-slate-300 rounded-md
                                      text-lg m-3 w-[200px] inline-flex 
                                      hover:bg-slate-400   items-center justify-center"
                        onClick={btn1} id="btn1" >지도로 비교 </button>
                <button className="bg-slate-300 rounded-md
                                      hover:bg-slate-400 text-lg m-3 w-[200px] inline-flex items-center justify-center"
                        onClick={btn2} id="btn2" >표로 비교</button>
                
                {/* 분류 1,2,3차 분류*/}
                <div className="invisible" >
                 {/* state 변수로 값 나타났다 사라지게 하는 코드 / 추후 대,중,소 분류 적용 후 하기  */}
                { menu === 5 ? <Classify /> : ''}
                </div>


              </div>

              <div className="mt-3" id="classify">
                {/* 감췄다가 나타나게하기 */}
                          <figure className="hidden justify-center items-center w-full " id="kmap">
                             <KoreaMap/>
                          </figure>
                          <figure className="hidden justify-center items-center p-3 w-full h-full" id="chart">
                <G2chart />
                          </figure>
                          <figure className=" justify-center items-center p-3 pt-0 w-full h-[800px]" id="table">
                
                <Infotable />
                          </figure>
              </div>

              
            </div>
          {/* </div> */}

          
        </main>

        
        
        <footer className="flex flex-col justify-center items-center  inset-x-0 bottom-0 mt-3 p-1 text-white bg-slate-800">
          <FootInfo />
          <div className="bg-slate-900 w-full text-center">
            <p className="mt-1 ">@ 2024 Kim DaeHee. All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
