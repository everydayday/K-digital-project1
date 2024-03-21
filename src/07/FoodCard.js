import bank from "./img/bank.png";
import market from "./img/market.png";
import busan from "./img/busan.png";
import { useState } from "react";
// public 폴더에 있으면 바로 가져올 수 있음
export default function FoodCard({fobj}) {
    const [stInfo,setStInfo ] = useState(false); 

  // 공백이 있으면 .연산자로 접근 x
  // 그럴땐 대괄호 연산자로 접근

  // 삼항 연산자를 변수로 선언해서 사용
  const a = fobj["구분"] === "기초푸드뱅크" ? bank :
            fobj["구분"] === "기초푸드마켓" ? market: busan
  
  
  
  const handleIsClick = () =>{
    setStInfo(!stInfo)  // 원래거 바뀌면 다른 값 출력
  }

  return (
    <div className="flex flex-row items-center justify-center border w-11/12 " onClick={handleIsClick}>
      <div className="w-1/5 lg:w-30 max-w-3/5 mx-3">
        <img className="w-full"
          src={a}
          alt="사업장 구분 이미지"
        />
      </div>
      <div className="flex flex-col h-full justify-between w-4/5" >
        <div>
            <h1 className="font-bold text-4xl  ">{fobj["사업장명"]}</h1>
            <h2 className="font-bold text-xl">{fobj["운영주체명"]}</h2>
        </div>
        <div>
            <h3 className="truncate">{fobj["사업장 소재지"]}</h3>
            <h4 className="bg-cyan-700 w-full h-8 text-white mt-2 p-2 ">
              {stInfo == false ? "" : fobj["연락처(대표번호)"] }
            </h4>
        </div>
      </div>
    </div>
  );
}
