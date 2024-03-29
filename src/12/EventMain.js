import GalleryCard from "../11/GalleryCard"
import TailInput from "../ui/TailInput"
import Tailbutton from "../ui/Tailbutton"
import { useState, useEffect, useRef } from "react"

export default function EventMain() {
  const [tags, setTags] = useState()
  const [guname, setGuname] = useState()

  const [tdata,setTdata] = useState()
  const [opTags, setOpTags] = useState()
  const keyword = useRef()

  // select 값
  const selRef = useRef();

  
  // 따로 호출하지 않아도 실행 됨
  useEffect(()=>{
    let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
    url = url + `&pageNo=1&numOfRows=50&resultType=json`
    getData(url)
  },[])

  // select 선택
  const handleSelGu = () =>{
    let tg = tdata.filter(item => item.GUGUN_NM == selRef.current.value)
    tg = tg.map(item =>
      <GalleryCard imgUrl = {item.MAIN_IMG_THUMB} 
                  title = {item.TITLE}
                  ptitle = {item.SUBTITLE}
                  ktag  = {selRef.current.value} />
      )

    setTags(tg)
  }

  const getData = (url) =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.getFestivalKr.item))
    .catch(e => console.log(e))
  }

  //구 데이터
  useEffect(()=>{
    if(!guname) return
    let tm = guname.map((item)=>
      <option value={item} key={item}>
        {item}
      </option>
    )
    setOpTags(tm)

  },[guname])

  

  // 구정보 만들기
  useEffect(()=>{
    if(!tdata) return
    console.log(tdata)
    let gues = tdata.map(item=>item.GUGUN_NM)
    gues = new Set(gues)
    gues =[...gues].sort()
    

    setGuname(gues)
  },[tdata])

  


  return (
    <div className='w-11/12 flex flex-col
                    mt-5
                    h-full justify-start items-center'>
      <div className='w-full bg-slate-200   items-center   rounded-lg'>
      


    <form className="w-full flex  bg-blue-200  items-center pt-3 pb-3 mb-3">
    <label htmlFor="countries" className="block mb-2 mr-2 rounded-md bg-cyan-100 ml-3 font-bold  text-lg  text-gray-900 dark:text-white">부산 축제 정보선택</label>
    <select onChange={handleSelGu} ref = {selRef} id="countries" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>구선택</option>
    {opTags}
    </select>    
    </form>




  


      <div className='w-full bg-slate-200 grid grid-cols-1 
                        md:grid-cols-2 lg:grid-cols-3  gap-4'>
        {tags}
      </div>

    </div>

    </div>
  )
}
