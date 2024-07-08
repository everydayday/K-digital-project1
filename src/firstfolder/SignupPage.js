import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Logo} from '../images/logo4.svg'
export default function SignupPage({togglePage}) {

  const [userName, setUserName] = useState('');
  const [userLoginId, setUserLoginId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userPurpose, setUserPurpose] = useState('none');
 
  const navigate = useNavigate();

  const handleSignup = async () => {
    const options = {
      method : 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      // body : JSON.stringify({userLoginId, userPw})
      body : JSON.stringify({userName,userLoginId,userPw,userPurpose})
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
                  <table className="text-2xl">
                  <tr>
                    {/* <td className="text-center">
                          <p>아이디 :</p>
                        </td> */}
                        <td className="text-xl">이름</td>
                        
                        <td width="70%"><input type="text"  name="userName"
                                  placeholder="이름을 입력하세요"   className='border-2 w-full rounded-lg' 
                                  onChange={(e) => setUserName(e.target.value)} required></input></td>
                    </tr>
                    <tr>
                    {/* <td className="text-center">
                          <p>아이디 :</p>
                        </td> */}
                        <td className="text-xl">아이디</td>
                        <td><input type="text" id="username" name="userLoginId"
                                  placeholder="아이디를 입력하세요"   className='border-2 w-full rounded-lg' 
                                  onChange={(e) => setUserLoginId(e.target.value)} required></input></td>
                    </tr>
                      <tr>
                      <td className="text-xl">비밀번호</td>
                        <td><input type="password" id="password" name="userPw"
                                  placeholder="비밀번호를 입력하세요" className='border-2 w-full rounded-lg ' 
                                  onChange={(e) => setUserPw(e.target.value)} required></input></td>
                      </tr>
                      <tr>
                  
                      </tr>
                  </table>
                  <select className="w-full text-xl text-center" name="purpose" onClick={e => setUserPurpose(e.target.value)} >
                          <option value="none">=== 가입목적 ===</option>
                          <option value="visit">방문</option>
                          <option value="info">정보수집</option>
                          <option value="findjob">구직</option>
                          <option value="etc">기타</option>
                        </select>
                  <div className="flex flex-col justify-center mt-3">
                    <button className='bg-slate-400 ' onClick={handleSignup}>등록하기</button>
                  </div>
                  <div className="flex flex-col justify-center mt-1">
                    <button className='bg-slate-500  ' onClick={togglePage}>뒤로가기</button>
                  </div>
               
    </div>
  )
}
