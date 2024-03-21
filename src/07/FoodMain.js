
import fdata from './fooddata.json'
import FoodCard from './FoodCard' 
import Tailbutton from '../ui/Tailbutton';
import { useState } from 'react';

export default function FoodMain() {
    const [card, setCard] = useState();

    let c1 = fdata.map( (item) => item["운영주체 분류"])
  
    const handleList = (citem) => {

      const tm = fdata.filter(item => item["운영주체 분류"] === citem)
        .map(item => <FoodCard fobj = {item} key = {item.사업장명} />)
        
      setCard(tm)
      console.log(citem)
    }
    c1 = new Set(c1)
    c1 = [...c1] // 전개 연산자 => 집합을 array로 바뀜
    const btns = c1.map(item => <Tailbutton caption = {item} color="orange" key = {item} handleClick={() => handleList(item)} />)
    
    
  return (
    // grid 로 배열하기
    // 
    <div className='w-full h-full flex flex-col justify-start items-center'>
      
      <div className='w-full flex flex-row justify-center'>
            {btns}
      
      </div>
      <div className='grid grid-cols-1
                      md:grid-cols-2
                      xl:grid-cols-3
                      gap-4'>
      
          {card}
      </div>
    </div>
  );
}
