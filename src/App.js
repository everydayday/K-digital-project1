import "./App.css";
import { FcHome } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import {Button, Tabs} from 'antd';

import KoreaMap from "./Map/KoreaMap";

import { ComposableMap, Geographies, Geography } from "react-simple-maps"


import FoodMain from "./07/FoodMain";
import Lotto from "./06/Lotto";
import MyClock from "./08/MyClock";

import BoxOffice from "./10/BoxOffice";

import GalleryMain from "./11/GalleryMain";
import Frcst from "./14/Frcst";
import UltraSrtFcst from "./14/UltraSrtFcst";
import VilageFcst from "./14/VilageFcst";
import FrcsList from "./14/FrcsList";
import Recoil1 from "./15/Recoil1";
import RecoilMain from "./15/RecoilMain";




function App() {
  return (
    <BrowserRouter>
      {/* // JSX 문법 사용 */}

      
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
                              h-20 p-10
                              text-xl font-bold text-cyan-800
                              bg-green-400
                              items-center"
        >
          <div>리액트 실습</div>

          <div className="flex justify-end items-center">

            <div className="mx-2 hover:text-blue-300"><Link to='/recoil1'>Recoil</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to='/frcst'>예보</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to='/food'>음식점</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to='/gallerymain'>관광지</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to = '/boxoffice'>박스오피스</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to ='/Lotto'>로또</Link></div> 
            <div><Link to = '/'><IoHome className="hover:fill-blue-400"/></Link></div>
            
          </div>
        </header>

        <div className="bg-purple-400">
        <div>준비된 당신이 도착할 지역을</div>
        <div>한 눈에 보세요</div>
        </div>
        <Button type="primary">PRESS ME</Button>
        
        


        <div className="bg-red-300">직종코드입력창</div>
        <div className="flex flex-row h-full">
        <div className="flex justify-center items-stretch h-full w-1/5">
        <div className="bg-blue-200 w-48 flex-grow">
          세로로 긴 영역
        </div>

        {/* https://ant.design/components/tabs */}

        <Tabs defaultActiveKey="1"
        tabPosition={'left'}
        style={{
          height: 220,
        }}
        items={new Array(5).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            //children: `Content of tab ${id}`,
          };
        })}              
              
        />
        </div>

        <div>
          <select>
            <option value="A">A</option>
          </select>
        </div>
        
        <main className="grow flex flex-col justify-end items-center w-4/5">
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/boxOffice" element={<BoxOffice />}/>
            {/* <Route path="/gallerycard" element={<GalleryCard/> } /> */}
            <Route path="/gallerymain" element={<GalleryMain/> } />
            <Route path="/food" element={<FoodMain/>} />
            <Route path="/frcst" element={<Frcst/>} />
            <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtFcst/>} />
            <Route path="/village/:dt/:area/:x/:y" element={<VilageFcst/>} />
            <Route path="/flist" element = {<FrcsList/>}/>
            <Route path="/recoil1" element = {<RecoilMain/>}/>
          </Routes>
        </main>
        </div>


        <div>
          <h1>한반도 지도</h1>
          {/* <KoreaMap /> */}
        </div>
        <footer className="flex justify-center items-center  inset-x-0 bottom-0 h-16  text-white bg-slate-800">
          @ 2024 Kim Dae Hee. All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
