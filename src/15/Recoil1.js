import Tailbutton from "../ui/Tailbutton";
import { useState, useEffect } from "react";
import Recoil2 from "./Recoil2";
import { useRecoilValue } from "recoil";
import { rcnt } from "./RecoilAtom";

export default function Recoil1() {
  const cnt = useRecoilValue(rcnt);
  return (
    <div className="w-1/5 h-full flex flex-col
                    text-2 font-bold
                    justify-center items-center ">
      Recoil1 : {cnt}
        {/* 변수랑 함수 props 로 보내주기 */}
        <Recoil2/>
    
    
    </div>
  )
}
