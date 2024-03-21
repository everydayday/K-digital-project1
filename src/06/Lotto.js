
import Tailbutton from "../ui/Tailbutton"
import Tailball from "../ui/Tailball"
import { useState } from "react";
export default function Lotto() {
  const [stInfo,setStInfo] = useState();
  // const [stInfo2,setStInfo2] = useState();
  // const [stInfo3,setStInfo3] = useState();
  // const [stInfo4,setStInfo4] = useState();
  // const [stInfo5,setStInfo5] = useState();
  
    const handleLottoClick = () => {     
      // let num1 = Math.floor(Math.random()*45 + 1)
      // let num2 = Math.floor(Math.random()*45 + 1)
      // let num3 = Math.floor(Math.random()*45 + 1)
      // let num4 = Math.floor(Math.random()*45 + 1)
      // let num5 = Math.floor(Math.random()*45 + 1) 

      let nums = [];

      while(nums.length < 7){
        let n = Math.floor(Math.random()*45 + 1)
        if(!nums.includes(n)) nums.push(n)
      }
      console.log(nums)
      nums.splice(6,0,'+')

      const tm = nums.map((item,idx) =>{
        if(idx === 5 ) 
              return <div className="flex flex-row bg-red-400 ">
                      <Tailball n={item} key = {`ball${item}`}/>
                      <div className="font-bold text-2xl mx-1">+</div>
                    </div>
                  
        else 
          return <Tailball  n={item} key={`ball${item}`} />
      })

        setStInfo(tm)

      {/* // setStInfo1(num1)      
      // setStInfo2(num2)      
      // setStInfo3(num3)      
      // setStInfo4(num4)      
      // setStInfo5(num5)       */}   
      

}
    const handleLottoClick2 = () => {
      console.log('handleLottoClick2')
  }
  return (
    <div>
      <div className="flex justify-center item-center  ">
        {stInfo}
      </div>
      <Tailbutton caption = "로또번호생성"  
                  color = 'red'
                  handleLottoClick = {handleLottoClick}/>
      <Tailbutton caption = "로또번호생성2"  
                  color = 'blue'
                  handleLottoClick = {handleLottoClick2}/>
      


    </div>
  )
}
