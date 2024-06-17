import React from 'react'
import {ReactComponent as Logo} from '../images/logo4.svg'
const pageDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // 부드럽게 스크롤하려면 이 줄을 추가
  });
  }

export default function Head() {
  return (
    <div>
      <header className="flex justify-between h-20  p-2 m-2 text-xl items-center shadow-md rounded-md">
              <div className="flex text-5xl font-bold cursor-pointer" onClick={()=> window.location.href="/main"}>              
              <Logo />
              <div className="text-blue-600 ml-1">ClearS</div>
              <div>ee</div>
              </div>
              {/* about, contact, FAQ */}
            <nav className="flex flex-row">
              <div className="font-bold flex flex-row items-center ">
                <a className="m-3" href="#" onClick={pageDown}>
                  About
                </a>
                <a className="m-3" href="#" onClick={pageDown}>
                  Contact
                </a>
                <a className="m-3" href="#" onClick={pageDown}>
                  Subscribe 
                </a>
              </div>
              <div className="text-xl flex gap-5 font-bold justify-center items-center ml-1">
                <button className="bg-slate-300 p-2 rounded-md " onClick={()=> window.location.href="/mypage"}>
                  마이페이지
                </button>
                <button className="bg-slate-300 p-2 rounded-md" onClick={()=> window.location.href="/"}>로그아웃</button>
              </div>
            </nav>            
        </header>
    </div>
  )
}
