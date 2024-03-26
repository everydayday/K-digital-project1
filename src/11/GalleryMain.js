import gdata from './GalleryCard.json'
import GalleryCard from './GalleryCard'
import Tailbutton from '../ui/Tailbutton'
import TailInput from '../ui/TailInput'
import { useRef, useState, useEffect} from 'react'

export default function GalleryMain() {

    const [tags, setTags] = useState()
    const [tdata, setTdata] = useState()

    const keyword = useRef();

    const imgUrl = gdata.galWebImageUrl    
    const title = gdata.galTitle
    const ptitle = gdata.galPhotographyLocation
    let ktag = gdata.galSearchKeyword;

    /*
    https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json
    */

    /*
    https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=&_type=json
    */
    // <GalleryCard imgUrl={imgUrl} title={title} ptitle={ptitle} ktag={ktag}/>
    const getData = (w) => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
        url = url + `&keyword=${w}&_type=json`
        
        fetch(url)  // url 던져넣고 값이 올 때까지 다른 거 함 : 비동기
        .then(resp => resp.json())
        .then(data => setTdata(data.response.body.items.item))
        .catch(err => console.log(err))
        
    }

    useEffect(()=>{
        if(!tdata) return        
        const tr = tdata.map(item=>
            <GalleryCard 
                        key = {item.galContentId}
                        imgUrl={item.galWebImageUrl.replace('http://','https://')} 
                        title={item.galTitle} 
                        ptitle={item.galPhotographyLocation}
                        ktag={item.galSearchKeyword}/>
        )
        setTags(tr)
    },[tdata])
    

    const handleFetch = () => {
        if(keyword.current.value ==''){
            alert("키워드를 입력하세요")
            keyword.current.focus()
            return
        }        
        let w = encodeURI(keyword.current.value)
        getData(w)
        
    }
    const handleClear = () => {
        setTags('')
        setTdata('')
        keyword.current.value = ''
        keyword.current.focus()

    }

    // const getDataFetch = (url) => {
    //     fetch(url) // fetch해서 값 가져옴 // 비동기식 실행 : 데이터 올 때 까지 다른 일 하고 있음
    //     .then(resp => resp.json())   //던져서 갔다가 왔다(.then) // 내가 원하는 형식인 json으로 바꿔줘
    //     .then(data => setTdata(data.data))
    //     .catch(err => console.log(err)) // 오류 발생 시 잡는다
    //     // then chaining 위에거 끝나야 아래거 시작한다
    // }
    
  return (
    <div className='w-11/12 flex flex-col
                    mt-5
                    h-full justify-start items-center'>
        <div className='w-full bg-slate-200 grid grid-cols-1 
                        md:grid-cols-3 items-center  gap-4 p-1 rounded-lg'>
          <div>
            <TailInput type = "text"
                        inputRef = {keyword}
                        ph  = "키워드 입력" />
          </div>
          <div>
            <Tailbutton caption = "조회"
                        color ="blue"
                        handleClick = {handleFetch}/>
          </div>
          <div>
            <Tailbutton caption = "취소"
                        color ="blue"
                        handleClick = {handleClear}/>
          </div>
          
        
        </div>
        <div className='w-full bg-slate-200 grid grid-cols-1 
                        md:grid-cols-2 lg:grid-cols-3  gap-4'>
            {tags}
          </div>
    </div>
  )
}
