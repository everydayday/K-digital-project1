import TailInput from "../ui/TailInput"
import TailSelect from "../ui/TailSelect"
import Tailbutton from "../ui/Tailbutton"
import { useState, useEffect,useRef } from "react"
import opdata from "./getxy.json"

export default function Frcst() {
    const ops = opdata.map(item => item["1단계"]) ;
    const [x, setX] = useState();
    const [y, setY] = useState();
    const dRef = useRef()
    const sRef = useRef()   

    const handleDate = () =>{
        console.log(dRef.current.value);
    }

    const handleArea = () =>{
        console.log(sRef.current.value);
        let tm = opdata.filter(item => item["1단계"] === sRef.current.value)
        console.log("herererer")
        setX(tm[0]["격자 X"])
        setY(tm[0]["격자 Y"])
    }

    useEffect(()=>{
        console.log("here")
        console.log(x)
        console.log(y)
    },[x,y])

    

    
  return (
    <div className='w-full bg-slate-200 grid grid-cols-1 
    md:grid-cols-3 items-center  gap-4 p-1 rounded-lg'>
        <div>
            <TailInput type = "date"
                       inputRef = {dRef}
                       ph = "날짜선택"
                       handleChange = {handleDate} />
        </div>
        <div>
            <TailSelect ops = {ops}
                        opDefault="---지역선택---"
                        selRef={sRef}   // ref 변수 넘어가서 선택 된 값 ref에 들어가게 되네
                        handleSel = {handleArea}   />
        </div>
        <div>
            <Tailbutton caption="초단기예보" color="blue" />
            <Tailbutton caption="단기예보" color="blue" />      
            
            </div>
    </div>
  )
}
