import listdata from "./BoxOffice.json"; // 불러들이는 파일의 이름은 내가 원하는대로 해도 상관 x
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeTinfo from "./BoxOfficeTinfo";
export default function BoxOfficeTb() {
  // const myItems = listData.boxOfficeResult.dailyBoxOfficeList.map(Item =>    //return문 하나 {} 필요 없다
  //     <Mytable rnum= {Item.rnum}
  //             movieNm={Item.movieNm}
  //             salesAmt = {Item.salesAmt}
  //             audiCnt = {Item.audiCnt}
  //             audiChange = {Item.audiChange}/>
  // );

  // info로 매개변수 전달받음
  const [stInfo,setStInfo ] = useState("영화를 선택하세요.");

  const boxlist = listdata.boxOfficeResult.dailyBoxOfficeList;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className=" w-4/5 ">
        <BoxOfficeThead />

        <BoxOfficeTbody boxlist={boxlist} setStInfo ={setStInfo} />

        <BoxOfficeTinfo stInfo = {stInfo}/>
        
      </table>
    </div>
  ); 
}
