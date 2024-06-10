import "./App.css";
import { Button, Tabs, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';



import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import KoreaMap from "./kmap/KoreaMap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const imglength = images.length
let imgIndex = 0


// 재귀함수로 image n초마다 보여주기
// window.onload -> 함수 이름 나타내지 않아
// -> 재귀함수 어려움
function showImage(){
  let nextImage = document.getElementById("changeImage")
  //nextImage.src = images[imgIndex]
  console.log("images[imgIndex] : ", images[imgIndex])
  console.log("nextImage : " , nextImage)
  imgIndex = imgIndex + 1
  console.log("imgIndex:", imgIndex)
  
  if(imgIndex === imglength){
    imgIndex = 0
  } 
    
  // 한번에 두 번 실행되는 오류 발생 (console 찍어보면 알 수 있음)
  setTimeout(showImage, 2000) // setTimeout안에 실행할 함수의 호출이 들어가 있음
}

window.onload = showImage(0)
// window 가 실행되었을 때 함수 실행




function MainPage() {
  const [index, setIndex] = useState(0);
  // const nextImage = () =>{
  //   //setIndex(index+1)
  //   console.log(index)
  // }

  const [comp, setComp] = useState()

  // menu part
  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Option 1',
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Option 2',
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Option 3',
    },
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: '7',
          label: 'Option 7',
        },
        {
          key: '8',
          label: 'Option 8',
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
            },
            {
              key: '12',
              label: 'Option 12',
            },
          ],
        },
      ],
    },
  ];

  // tab
  const [activeKey, setActiveKey] = useState('1');

  // const handleTabChange = (key) => {
  //   setActiveKey(key);
  //   console.log('Active tab key:', key);
  // };



  // tab items
  const tabitems = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab-${id}`,
      key: id
    };
  });


  // tab click event
  const handleClick = (key) =>{
    let component = <></>
    console.log("key : ", key)
    if(key === 1){
      component = <KoreaMap/>
      
    }
    // else

    setComp(component);
  }

  


  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
            <img className="rounded-lg w-4/5 h-[364px]"    src={images[0]} alt="no image" id = "changeImage"/>
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
              
              {/* https://ant.design/components/menu/ */}
              <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="none"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
                
                
                {/* https://ant.design/components/tabs */}
                <Link to ="/koreamap">
                <Tabs
                  //defaultActiveKey="1"
                  id = "tab1"
                  tabPosition={"left"}
                  style={{height: 100}}
                  items={tabitems}                  
                  handle={handleClick}
                  

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

            {comp}
      
            <div className="flex  ">
              
          </div>
          </div>
      
          <footer className="flex justify-center items-center  inset-x-0 bottom-0 h-16  text-white bg-slate-800">
            @ 2024 Kim Dae Hee. All rights reserved
          </footer>
        </div> 
    </div>
  );
}

export default MainPage;
