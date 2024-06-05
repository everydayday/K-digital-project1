import listData from "./BoxOffice.json"; // 불러들이는 파일의 이름은 내가 원하는대로 해도 상관 x
import { useRef, useState, useEffect } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { MdExposureZero } from "react-icons/md";
import { queryByTestId } from "@testing-library/react";
import TailInput from "../ui/TailInput";
import RefInput from "./RefInput";
export default function BoxOffice() {
  const [boxList,setBoxList] = useState();
  const [trs, setTrs] = useState();
  // 영화목록 RESTfull 서비스로 가져오기
  const [stInfo, setStInfo] = useState("영화를 선택하세요.");
  const info = (mv) =>{
    console.log(mv)
    // 삼항 연산자 3개 가능하다
    let str = parseInt(mv.rankInten) === 0 ? "그대로입니다.😑" 
              : parseInt(mv.rankInten) > 0 ? "증가했습니다.😁" : "감소했습니다. 😥"
    // 할당연산자로 state 변수 변경 불가능 => 업데이트함수로 변경 가능
    setStInfo(`${mv.movieNm} 순위는 전날대비 ${str} ${mv.rankInten}`)
  }
  
  useEffect(()=>{
    if(!boxList) return
    const tm = boxList.map(item =>
      <tr onClick={() => {}} key = {item.movieCd} className="hover:bg-red-100" >
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
    
    setTrs(tm);


  },[boxList])

  // boxoffice 데이터 fetch
  const getData = (dt) => {
    let url = `	https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`
    console.log(url)

    fetch(url)  // url 던져넣고 값이 올 때까지 다른 거 함 : 비동기
    .then(resp => resp.json())
    .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
    .catch(err => console.log(err))
    
  }

  const boxRef = useRef();
  const handleSelDate = () => {
    getData(boxRef.current.value.replaceAll("-", ""));
  };



  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-end items-center">
        <div>
          <span>날짜 선택 :</span>
          <TailInput
            type="date"
            inputRef={boxRef}
            handleChange={handleSelDate}
            ph=""
          />
        </div>
        
      </div>
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
    {/* 테이블 부분 state 변수 */}
    {trs} 
  </tbody>
  <tfoot><tr><td colSpan="6" className="bg-amber-200 text-center"><span>{stInfo}</span></td></tr></tfoot>
</table>
    </div>
  );
}
