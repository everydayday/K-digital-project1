import TailInput from "../ui/TailInput"
import TailSelect from "../ui/TailSelect"
import Tailbutton from "../ui/Tailbutton"
import { useState, useEffect,useRef } from "react"
import { useNavigate } from "react-router-dom"
import getxy from "./getxy.json"

export default function Frcst() {
    const ops = getxy.map(item => item["1단계"]) ;
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] = useState();
    const [dt, setDt] = useState();
    const dRef = useRef()
    const sRef = useRef()   
    const locRef = useRef()

    const navigator = useNavigate()


    const handleFrcst = (srvil) => {
        if(dt === '' || dt === undefined){
            alert("날짜를 선택하세요.");
            dRef.current.focus()
            return;
        }
        if(area === '' || area === undefined){
            alert("지역을 선택하세요.");
            sRef.current.focus()
            return;
        }
        

        let gubun = '';
        if (srvil === 'UltraSrt') gubun = '초단기예보';
        else gubun = '단기예보';

        // navigator(`/${g}}/${dt}/${area}/${x}/${y}`)
        navigator(`/flist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`)
    
    }


    const handleDate = () =>{
        setDt(dRef.current.value.replaceAll('-',''));
    }

    const handleArea = () =>{
        if (sRef.current.value === '' || sRef.current.value === undefined) return ; 
        let tm = getxy.filter(item => item["1단계"] === sRef.current.value)
        console.log("herererer")
        setArea(sRef.current.value)
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
                        handleSelGu = {handleArea}   />
        </div>
        <div>
            <Tailbutton caption="초단기예보" color="blue" handleClick  = {()=>handleFrcst('UltraSrt')} />
            <Tailbutton caption="단기예보" color="blue" handleClick = {() => handleFrcst('Village')} />      
            
            </div>
    </div>
  )
}
