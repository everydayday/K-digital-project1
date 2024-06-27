import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Logo} from '../images/logo4.svg'
export default function SignupPage({togglePage}) {

  const [userLoginId, setUserLoginId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const options = {
      method : 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      // body : JSON.stringify({userLoginId, userPw})
      body : JSON.stringify({userLoginId,userPw})
    }
    
    const response = await fetch("http://10.125.121.225:8080/signup", options);
    console.log("response :", response)

    const data = await response.json()
    console.log(" data.status " , data.status)

    if(data.status === 'success'){
      console.log("here")
      alert("회원가입이 완료되었습니다.")
      // navigate('/main') // 안 가짐 => 그 페이지가 /여서 그대로였음
      togglePage();
    } else{
        alert("이미 존재하는 ID입니다. 다른 ID를 지정해주세요.");
    }

  }
  
  
  return (
    <div>
                <div className="flex text-5xl font-bold justify-center m-4">
                  <p>회원가입</p>
                  </div>
                  {/* <input className="rounded-lg w-full font-mono " type="text" value="로그인 :" /> */}
                  <table>
                    <tr>
                    {/* <td className="text-center">
                          <p>아이디 :</p>
                        </td> */}
                        <td><input type="text" id="username" name="userLoginId"
                                  placeholder="아이디를 입력하세요"   className='border-2 w-full rounded-lg' 
                                  onChange={(e) => setUserLoginId(e.target.value)} required></input></td>
                    </tr>
                      <tr>
  
                        <td><input type="password" id="password" name="userPw"
                                  placeholder="비밀번호를 입력하세요" className='border-2 w-full rounded-lg ' 
                                  onChange={(e) => setUserPw(e.target.value)} required></input></td>
                      </tr>
                  </table>
                  <div className="flex flex-col justify-center mt-8">
                    <button className='bg-slate-400 m-1' onClick={handleSignup}>등록하기</button>
                  </div>
                  <div className="flex flex-col justify-center mt-2">
                    <button className='bg-slate-500 m-1' onClick={togglePage}>뒤로가기</button>
                  </div>
               
    </div>
  )
}
