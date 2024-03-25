import TailInput from "../ui/TailInput"
import Tailbutton from "../ui/Tailbutton"
import { useRef,useEffect,useState } from "react"

export default function RefInput() {
    const inputRef = useRef();
    const [bts, setBts] = useState([]);
    const [tags, setTags] = useState([]);

    const handleAdd = () =>{
        if(inputRef.current.value === ''){
            alert("값을 입력하세요.");
            inputRef.current.focus();
            return;
        }
        console.log(inputRef.current.value)
        setBts([...bts, inputRef.current.value])
    }
    const handleDel = () => {
        setBts([])
        inputRef.current.value = ''
        inputRef.current.focus()

    }
    useEffect(() =>{
        inputRef.current.value = '';
        inputRef.current.focus();
        let tm = bts.map((item, idx) =>
        <Tailbutton caption={item}
                    key = {`bt${idx}`}
                    color = "orange"    />
        )
        setTags(tm)
    },[bts])
  return (
    <div>
      <div className="w-full flex flex-row items-baseline bg-slate-300">
          <div className="w-1/2">

            <input className="bg-gray-200 
            appearance-none border-2 border-gray-200 
            rounded w-full py-2 px-4 
             text-gray-700 leading-tight 
            focus:outline-none focus:bg-white
             focus:border-purple-500 "  
            type="date" 
            placeholder="값을 입력하세요" ref = {inputRef}/>
          
          </div>
          <div className="flex flex-row">
              <div>
                <Tailbutton caption="등록"
                            color = "blue"
                            handleClick={handleAdd} />
          
              </div>
              <div>
                <Tailbutton caption="삭제"
                            color = "red"
                            handleClick={handleDel} />
          
              </div>
          </div>

      </div>
      <div className="w-full border p-5 bg-slate-100">
        {tags}
      </div>
    </div>
    
  )
}
