import {useState ,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import {ReactComponent as Logo} from './images/logo4.svg'
import LoginPage from "./firstfolder/LoginPage"
import SignupPage from "./firstfolder/SignupPage"
import codeJsonData from './sido_code_data.json'

const generateCodeForName = (name) => {
  const sidoCode = codeJsonData[name];
  const sidoCodeStr = sidoCode.toString();
  return sidoCodeStr
}


export default function FirstPage() {
  // storage 저장 함수
  const [jsonData,setJsonData] = useState('');


  // 교수님 코드 .. 비동기처리패턴
  const getData =  async () => {
    // 서버 꺼져있을 시 예외처리
    try{
      const response = await fetch('http://10.125.121.225:5000/api/mapdata') ;
      const data = await response.json() ;
      console.log("koreamapdata after response", data);
      setJsonData(data) ;
    }
    catch(Exception ){
      
    }
    
    
  }
  useEffect(()=>{
    getData();
  },[])

  const input_data = {
    sido : [],
    sigungu : [],
    emd : [],
  };

  // jsonData가 변경되었을 때
  useEffect(() =>{
    if(jsonData !== ''){
      Object.keys(jsonData).forEach(key => {
        const plccount = jsonData[key];
        const parts = key.split(" ");
        // 대분류 값도 합계로 넣어줘야 해
        //input_data.sido.push({code : generateCodeForName(parts[0]), name : parts[0], count : plccount})
        // if(plccount === 0 ) {} // count 없는건 넣지말고 넘어가기 // 이상하게 전북이 안 됌
        if(plccount === 0 || parts[0] === "전북") {} // count 없는건 넣지말고 넘어가기 // 이상하게 전북이 안 됌
        else {
          if(parts.length === 1){
            input_data.sido.push({code : generateCodeForName(parts[0]), name : parts[0], count : plccount})
          } 
          else if (parts.length === 2){
        
            input_data.sigungu.push({code : generateCodeForName(parts.join(' ')), name : parts.join(' '), count : plccount})
          }
          
          
        }  
      });
    
      const sidoresult = {};
      
    // sido 넣기 위해 시도 값 합산 추출
      Object.keys(jsonData).forEach(key =>{
      const parts = key.split(" ");
      const mainKey = parts[0];
      if (!sidoresult[mainKey]){
        sidoresult[mainKey] = 0;
      }
      sidoresult[mainKey] += jsonData[key];
      });
    // sido 값 넣는 함수
      Object.keys(sidoresult).forEach(key =>{
      if(key !== "전북"){
        const plcName = key;
        const plcNum = sidoresult[key];
        input_data.sido.push({code : generateCodeForName(plcName), name : key ,count : plcNum });
        
      }
      
    })

    const json = JSON.stringify(input_data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    
    console.log("before localstorage setItem")
    window.sessionStorage.setItem('koreadata', json)
    window.localStorage.setItem('koreadata', json);
    // FileSaver.js를 사용하여 파일 저장
    // saveAs(blob, 'saved_korea_map_data.json');

  }


  },[jsonData])








  // 페이지용 함수
  const [isLoginPage, setIsLoginPage] = useState(true);
  const togglePage = () =>{
    setIsLoginPage(!isLoginPage)
  }

  


  return (
    // ../imgs/flower.jpg
    // div 안에 bg로 읽기 실패 (img 태그로는 읽을 수 있음)
    <div className="h-screen flex flex-col justify-center  "> 
      {/* <img src='../imgs/info1.jpg' alt="no image"/> */}
      <div className="w-full  flex justify-center items-center ">
        
          <div className = 'bg-[rgb(240,248,255)] w-[380px] h-[380px] flex justify-center items-center rounded-md   '>
            <div className=' bg-blue-100  flex flex-col justify-between items-center w-[95%] h-[95%]
                              text-3xl  border-2 rounded-md p-4 '>
                
                {isLoginPage ? <LoginPage togglePage={togglePage}/> : <SignupPage togglePage={togglePage} />}
            </div>
          </div>
                   
      </div>
    </div>
  )
}
