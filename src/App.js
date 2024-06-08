import "./App.css";
import { FcHome } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, Tabs } from "antd";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import KoreaMap from "./kmap/KoreaMap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
// ================================ //
- image 전환 

*/



// image 경로 
const images = [
  '/imgs/purple1.jpg',
  '/imgs/purple2.jpg',
  '/imgs/purple3.jpg',
  '/imgs/purple4.jpg'
]
var imglength = images.length
var imgIndex = 0


// 재귀함수로 image n초마다 보여주기
// window.onload -> 함수 이름 나타내지 않아
// -> 재귀함수 어려움
function showImage(){
  var nextImage = document.getElementById("changeImage")
  nextImage.src = images[imgIndex]
  imgIndex = imgIndex + 1
  console.log("show Image", imgIndex)
  console.log("imglength:", imglength)
  if(imgIndex === imglength){
    imgIndex = 0
  } 
    
  
  setTimeout(showImage, 2000) // setTimeout안에 실행할 함수의 호출이 들어가 있음
}

//window.onload = showImage(0)





function App() {
  const [index, setIndex] = useState(0);
  const nextImage = () =>{
    setIndex(index+1)
    console.log(index)
  }


  return (
    <BrowserRouter>
      

      {/* 전체 적용 div */}
      <div
        className="flex flex-col w-full
                          max-w-screen-xl
                          h-screen
                          mx-auto
                          overscroll-y-auto
                          "
      >
        <header
          className="flex justify-between 
                              h-20  p-2 m-2
                              text-xl                             
                              items-center
                              shadow-md rounded-md"
        >
          <div className="flex justify-start items-center    ">
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
        </header>
        <hr></hr>

        <div className=" h-20 flex mb-3  p-2 text-5xl font-bold  justify-between ">
          <FontAwesomeIcon icon="fa-thin fa-binoculars" />
          <div className="flex">
            <div className="text-blue-600">ClearS</div>
            <div>ee</div>
          </div>
          <div className="text-2xl flex gap-5">
          <button className="bg-slate-300 p-2 rounded-md">마이페이지</button>
          <button className="bg-slate-300 p-2 rounded-md">로그아웃</button>
          </div>
        </div>
        <hr className="mb-3 shadow-blue-500"></hr>

        {/* div가 load 되었을 때 */}
        <div className="flex justify-center" > 
          <img className="rounded-lg w-4/5"    src={images[0]} alt="no image" id = "changeImage"/>
        </div>

  

        

        
        
        <div className="bg-blue-300 shadow-md mt-1"><p>입력하세요</p></div>
        <div className="flex justify-center content-center h-40 ">
          <select className="m-2">
            <option value="">1차 분류</option>
            <option value="1">건설·채굴</option>
          </select>
          <select className="m-2" type="hidden">
            <option >2차 분류</option>
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
              {/* https://ant.design/components/tabs */}
              <Link to ="/koreamap">
              <Tabs 
                //defaultActiveKey="1"
                tabPosition={"left"}
                style={{
                  height: 100,
                }}
                items={new Array(1).fill(null).map((_, i) => {
                  const id = String(i+1);
                  return {
                    label: `Tab-${id}`,
                    key: id,
                    //disabled: i === 2,
                    //children: `Content of tab ${id}`,
                  };
                })}
              />
              </Link>
              
              <Link to ="/koreamap">
              <Tabs
                defaultActiveKey="1"
                tabPosition={"left"}
                style={{
                  height: 100,
                }}
                items={new Array(1).fill(null).map((_, i) => {
                  const id = String(i+2);
                  return {
                    label: `Tab-${id}`,
                    key: id,
                    //disabled: i === 2,
                    //children: `Content of tab ${id}`,
                  };
                })}              
              />
              </Link>
                
              <Link to ="/koreamap">
                <Tabs
                defaultActiveKey="1"
                tabPosition={"left"}
                style={{
                  height: 100,
                }}
                items={new Array(1).fill(null).map((_, i) => {
                  const id = String(i+3);
                  return {
                    label: `Tab-${id}`,
                    key: id,
                    //disabled: i === 2,
                    //children: `Content of tab ${id}`,
                  };
                })}              
              />
              </Link>
            </div>
              



          </div>

          
          <div className="flex  ">
            <Routes>
              <Route path="/koreamap" element={<KoreaMap/>} />
          
          
          </Routes>
        </div>




        </div>

        
        <footer className="flex justify-center items-center  inset-x-0 bottom-0 h-16  text-white bg-slate-800">
          @ 2024 Kim Dae Hee. All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
