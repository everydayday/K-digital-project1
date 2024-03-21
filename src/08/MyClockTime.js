import "./MyClockTime.css"
import { useState, useEffect } from "react";

function MyClockTime(){
    const [currentTime, setCurrentTime] = useState();
    const[tm , setTm] = useState(0)
   
    // 컴포넌트 생성시 최초 1번 실행
    useEffect(() =>{    
    setInterval(() =>{
        setCurrentTime(new Date())
    }, 1000)
    
   },[]) 

   // useEffect : []이 바뀌었을 때 하고 싶다
   // 초기화 됐을 때도 바뀐 것으로 인식한다
   // tm 변수가 바뀔 때 마다 실행
   // tm 변수 변경시켜주면 이 함수 실행됨
    useEffect(() => {
        console.log("[tm] =>", currentTime, tm)
    }, [tm])

    // 랜더링이 일어날 때 마다 ... setCurrentTime 돌아가서 랜더링 계속 일어나
    useEffect(() => {
        
        
    })


    return(
        <>
        <h1>현재 시각 : {currentTime.toLocaleTimeString()}</h1>
        
        </>
    );


}


export default MyClockTime