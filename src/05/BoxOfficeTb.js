import Mytable from "./Mytable";
import listData from "./BoxOffice.json" // 불러들이는 파일의 이름은 내가 원하는대로 해도 상관 x
import { useState } from 'react';
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { MdExposureZero } from "react-icons/md";
import { queryByTestId } from "@testing-library/react";
export default function BoxOfficeTb() {
    
    // const myItems = listData.boxOfficeResult.dailyBoxOfficeList.map(Item =>    //return문 하나 {} 필요 없다
    //     <Mytable rnum= {Item.rnum} 
    //             movieNm={Item.movieNm} 
    //             salesAmt = {Item.salesAmt}
    //             audiCnt = {Item.audiCnt}
    //             audiChange = {Item.audiChange}/>
    // );    
    const [stInfo, setStInfo] = useState("영화를 선택하세요.");
    // info로 매개변수 전달받음
    const info = (mv) =>{
      console.log(mv)
      // 삼항 연산자 3개 가능하다
      let str = parseInt(mv.rankInten) === 0 ? "그대로입니다.😑" 
                : parseInt(mv.rankInten) > 0 ? "증가했습니다.😁" : "감소했습니다. 😥"
      setStInfo(`${mv.movieNm} 관객수는 ${str} ${mv.rankInten}`)
    }
    // . : object 접근법
    const trs = listData.boxOfficeResult.dailyBoxOfficeList.map(item =>
                // key를 줌으로 구분해서 10개를 동적으로 관리하기 위해서.. 빨간 오류 나는거 방지
                // 매개변수로 전달하여 영화 정보 info 줌
                <tr onClick={() => {info(item)}} key = {item.movieCd} className="hover:bg-red-100" >
                  <td className="text-violet-700 text-base bg-red-200 h-1/4 rounded-lg">{item.rnum}</td>
                  <td>{item.movieNm}</td>
                  <td>{parseInt(item.salesAmt).toLocaleString()}</td>
                  <td>{parseInt(item.audiCnt).toLocaleString()}</td>
                  <td>{item.audiChange}</td>
                  <td>{parseInt(item.rankInten) === 0 ? <MdExposureZero />:
                        parseInt(item.rankInten) > 0 ? <FaLongArrowAltUp />
                                    : <FaLongArrowAltDown />}
                    </td>
                </tr>
      )
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <table className=" w-4/5 ">
  <thead>
    <tr className=" h-16  border bg-amber-200 ">
      <th className="w-10">순위</th>
      <th>영화명</th>
      <th>매출액</th>
      <th>관객수</th>
      <th className="w-30">증감율</th>
      <th className="w-30">증감여부</th>
    </tr>
  </thead>
  <tbody>
    {trs}
  </tbody>
  <tfoot><tr><td colSpan="6" className="bg-amber-200 text-center"><span>{stInfo}</span></td></tr></tfoot>
</table>
    
      
    </div>
  )
}
