
import { FaHeart } from "react-icons/fa";

import { useState } from "react";
export default function MyList({ title, imgUrl, content }) {
  // 지역 변수
  let cnt = 0;

  // state 변수
  // 변수명 , set변수명
  // 초기 값 0
  const [stCnt, setStCnt] = useState(0);
  
  const handleLike = (t) =>{
    console.log("handleLike" + t);    
    cnt = cnt + 1;
    console.log(`cnt = ${cnt}`)
    // 할당 연산자로 값 바꿔야 한다
    setStCnt(stCnt + 1);
  }
  return (
    <div className="w-full flex  border-black  border rounded hover:bg-orange-100">
      <div className="w-2/5">
        <img className="rounded-md" src={imgUrl} alt="html" />
      </div>
      <div className=" w-3/5 m-1 h-full flex flex-col justify-between px-1 py-1">
        <h1 className="font-bold text-xl text-gray-700">{title}</h1>
        <p>{content}</p>
        <p className="w-full flex flex-row  justify-end items-center mt-5 font-bold">
          <span className="text-base" onClick={handleLike}><FaHeart className="hover:cursor-pointer text-red-400 text-lg"/></span>
          <span className="mx-2 mr-1">좋아요</span>
          <span onClick={() => {handleLike(title)}} >{stCnt}</span>
        </p>
      </div>
    </div>
  );
}
