import "./App.css";
import { FcHome } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

// import HelloCss from "./02/HelloCss";
// import logo from "./logo.svg";
// import icons from "./icons";
// import MyDiv from "./03_1/MyDiv";
// import MyList from "./04/MyList";
// import MyListMain from "./04/MyListMain";
// import BoxOfficeTb from "./05_1/BoxOfficeTb";
// import BoxOfficeTbody from "./05_1/BoxOfficeTb";
// import FoodCard from "./07/FoodCard";
import FoodMain from "./07/FoodMain";
 import Lotto from "./06/Lotto";
 import MyClock from "./08/MyClock";
// import TrafficMain from "./09/TrafficMain";
// import RefVal from "./10/RefVal";
// import RefInput from "./10/RefInput";
import BoxOffice from "./10/BoxOffice";
// import GalleryCard from "./11/GalleryCard";
import GalleryMain from "./11/GalleryMain";
// import EventMain from "./12/EventMain";
// import RouteMain from "./13/RouteMain";
import Frcst from "./14/Frcst";
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

            <div className="mx-2 hover:text-blue-300"><Link to='/frcst'>예보</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to='/food'>음식점</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to='/gallerymain'>관광지</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to = '/boxoffice'>박스오피스</Link></div>
            <div className="mx-2 hover:text-blue-300"><Link to ='/Lotto'>로또</Link></div> 
            
            
            <div><Link to = '/'><IoHome className="hover:fill-blue-400"/></Link></div>
            
          </div>
        </header>

        <main className="grow flex flex-col justify-center items-center">
         
          
          <Routes>
         
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/boxOffice" element={<BoxOffice />}/>
            {/* <Route path="/gallerycard" element={<GalleryCard/> } /> */}
            <Route path="/gallerymain" element={<GalleryMain/> } />
            <Route path="/food" element={<FoodMain/>} />
            <Route path="/frcst" element={<Frcst/>} />
          </Routes>
        </main>

        <footer className="flex justify-center items-center  inset-x-0 bottom-0 h-16  text-white bg-slate-800">
          @ 2024 Kim Dae Hee. All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
