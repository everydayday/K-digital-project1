  import './App.css';
  import { FcHome } from "react-icons/fc";
  import { IoHome } from "react-icons/io5";
  import HelloCss from './02/HelloCss';
  import logo from './logo.svg';
  import icons from './icons';
  import MyDiv from './03_1/MyDiv';
  import MyList from './04/MyList';
  import MyListMain from './04/MyListMain';
  import BoxOfficeTb from './05_1/BoxOfficeTb';
import BoxOfficeTbody from './05_1/BoxOfficeTb';
import FoodCard from './07/FoodCard';
import FoodMain from './07/FoodMain';
import Lotto from './06/Lotto'
import MyClock from './08/MyClock';
import TrafficMain from './09/TrafficMain';
import RefVal from './10/RefVal';
import RefInput from './10/RefInput';
import BoxOffice from './10/BoxOffice';
import GalleryCard from './11/GalleryCard';
import GalleryMain from './11/GalleryMain';
  function App() {
    return (
      // JSX 문법 사용      
        <div className='flex flex-col w-full 
                        max-w-screen-xl
                        h-screen
                        mx-auto
                        overscroll-y-auto
                        '>
          <header className='flex justify-between
                            h-20 p-10
                            text-xl font-bold text-cyan-800
                            bg-green-400
                            items-center'>
            <div>리액트 실습</div>
            <div><IoHome /></div>
          </header>
          <main className='grow flex flex-col justify-center items-center'>
          {/* <BoxOfficeTb/> */}
            {/* <Lotto /> */}
             {/* <img src={logo} className="App-logo" alt="logo" />  */}
            <GalleryMain />
            
          </main>
          
        <footer className='flex justify-center items-center  inset-x-0 bottom-0 h-16  text-white bg-slate-800'>
            @ 2024 Kim Dae Hee. All rights reserved
        </footer>

        </div>
        

        
      
      
    );
  }

  export default App;


