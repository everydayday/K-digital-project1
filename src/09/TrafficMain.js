import { useState,useEffect } from "react";
import TrafficNav from "./TrafficNav";
export default function TrafficMain() {
    const [tdata,setTdata] = useState() // 전체 fetch 데이터(17개배열)
    const [c1, setC1] = useState(); // 대분류(중복제거)
    const [c2, setC2] = useState();
    const [selC1, setSelC1] =useState();
    const [selC2, setSelC2] =useState();

    const [detail, setDetail] = useState();
    const [selDetail, setSelDetail] =useState();

    const [info, setInfo] =useState();
    
    // url 가져와서 tdata에 값 넣어주기
    const getDataFetch = (url) => {
        fetch(url) // fetch해서 값 가져옴 // 비동기식 실행 : 데이터 올 때 까지 다른 일 하고 있음
        .then(resp => resp.json())   //던져서 갔다가 왔다(.then) // 내가 원하는 형식인 json으로 바꿔줘
        .then(data => setTdata(data.data))
        .catch(err => console.log(err)) // 오류 발생 시 잡는다
        // then chaining 위에거 끝나야 아래거 시작한다
    }
  
  // 처음 렌더링 될 때 url getDataFetch 호출하기
  useEffect(()=>{
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
    url = `${url}page=1&perPage=20&`
    url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`
    console.log(url)
    getDataFetch(url)

    },[]);

   // 전체 데이터 : tdata
   useEffect(()=>{
    if(!tdata) return; // 시작할 때 데이터 없으면 반환
    let tm = tdata.map(item => item.사고유형_대분류) // ?!map..
    tm = new Set(tm)
    tm = [...tm]    
    setC1(tm)     
    //  let newdata = new Set(tdata)
    //  newdata = [...newdata]
     
   },[tdata])   // 초기값 지정되서 1번, fetch 지정되서 1번 실행됨
  
   // C1 선택 시, 선택된 C1에 대해 C2 구하기
   useEffect(()=>{
    if(!tdata) return;
    let tm = tdata.filter(item => item.사고유형_대분류 === selC1)
                  .map(item => item.사고유형_중분류);
    setC2(tm);
    setDetail("")
    setInfo("");
    setSelC2(""); // c2의 색깔 원래대로 돌아오게
    
   },[selC1])
   
   // C2선택 시 detail값 지정
   useEffect(() =>{
    if(!tdata) return;  // 선택 안 됐을 시 취소
    // 두 개 클릭 됐을 시 filter, map으로 반환
    // filter만 하면 obj 의 arr로 모임.각 요소에 대해 map하면 str접근됨
    let tm = tdata.filter(item => item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2)

    setDetail(tm[0]);
    },[selC2])

    // detail 값 활용하여 넣어주는 info 정보 넣어주기
    useEffect(()=>{
        if(!detail) return;
        console.log(detail)
        const keyArr = ['사고건수', '사망자수','중상자수','경상자수','부상신고자수']
        // 변수로 html이 들어가기도 하구나
        let tm = keyArr.map( k =>
          <div className="flex justify-center items-center mt-1" key={k}>
            <div className="w-4/6 h-10  flex justify-end items-center bg-indigo-300">
                {k}
            </div>
            <div className="flex justify-end items-center h-10 bg-gray-200 w-8/12 mr-0 ">
                {detail[k]}
            </div>
          </div>  
        );
        setInfo(tm)
    },[detail])
   

    return (
    <div className=" w-full h-full mt-5 flex-col justify-start items-center">
      
      {c1 && <TrafficNav title = "대분류"
                  category = {c1}
                  sel = {selC1}
                  setSel = {setSelC1} /> 
      }
      {c2 && <TrafficNav title = "중분류"
                  category = {c2}
                  sel = {selC2}
                  setSel = {setSelC2} /> 
      }
    <div className="w-10/12 grid grid-cols-2 
                    sm:grid-cols-3
                    md:grid-cols-5 gap-4">
        {info}
    </div>
    
      

    </div>
  )
}
