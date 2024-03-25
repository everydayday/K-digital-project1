import Tailbutton from "../ui/Tailbutton"
import { useState, useEffect, useRef } from "react";

export default function RefVal() {
    let cnt = 0;    // 컴포넌트 변수
    const [stCnt, setStCnt] = useState(0);    // state변수
    const refCnt = useRef(0);                  // ref 변수


    const handleLocal = () => {
        cnt += 1;
        console.log("cnt =" + cnt);        
    }
    const handleState = () => {
        setStCnt(stCnt + 1);
        
    }
    const handleRef = () => {
        refCnt.current += 1;
        console.log("refCnt.current : " + refCnt.current)
    }   // 실시간 반영 안 되나 state 변수 호출해주면 새롭게
    // 화면 렌더링 해줘서 값 반영 됨

    useEffect(()=>{
        console.log("stCnt = ", stCnt)

    },[stCnt])
  return (
    <div className="w-10/12 grid grid-cols-3
                    gap-4 text-center">
        <div>
            컴포넌트 변수(지역변수) : {cnt}
        </div>
        <div>
            State 변수 : {stCnt}
        </div>
        <div>
            Ref 변수 : {refCnt.current} 
        </div>
        <div>
            <Tailbutton caption="컴포넌트 변수"
                        color= "blue"
                        handleClick={handleLocal} />
        </div>
        <div>
            <Tailbutton caption="State 변수"
                        color= "blue"
                        handleClick={handleState} />
        </div>
        <div>
            <Tailbutton caption="Ref 변수"
                        color= "blue"
                        handleClick={handleRef} />
        </div>
      
    </div>
  )
}
