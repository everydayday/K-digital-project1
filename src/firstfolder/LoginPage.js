import React, {useState} from 'react'
import {ReactComponent as Logo} from '../images/logo4.svg'
import {useNavigate} from 'react-router-dom';
export default function LoginPage({togglePage}) {
  const navigate = useNavigate() ;
  const [userLoginId, setUserLoginId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleLogin = async () => {
    const options = {
      method : 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      // body : JSON.stringify({userLoginId, userPw})
      body : JSON.stringify({userLoginId,userPw})
    }

    const response = await fetch("http://localhost:8080/userlogin", options);
    console.log("response in loginpage", response)
    const data = await response.json()
    console.log(" data in loginpage : " , data)
    if(data.status === 'success'){
      navigate('/main')
      
    } else{
        alert("로그인 정보를 확인해주세요.");
    }

  }



  return (
    <div>
                 <div className="flex text-5xl font-bold justify-center m-4">
                  <Logo />
                  <div className="text-blue-600 ml-1">ClearS</div>
                  <div>ee</div>
                  </div>
                  {/* <input className="rounded-lg w-full font-mono " type="text" value="로그인 :" /> */}
                  <table>
                    <tr>
                    {/* <td className="text-center">
                          <p>아이디 :</p>
                        </td> */}
                        <td><input type="text" id="username" name="userLoginId"
                                  onChange={(e) => setUserLoginId(e.target.value)}
                                  placeholder="ID"   className='border-2 w-full rounded-lg' required></input></td>
                    </tr>
                      <tr>
                        {/* <td className="text-center">
                          <p>비밀번호 :</p>
                        </td> */}
                        <td><input type="password" id="password" name="password"
                                  onChange={(e) => setUserPw(e.target.value)}
                                  placeholder="PW" className='border-2 w-full rounded-lg ' required></input></td>
                      </tr>
                  </table>
                  <div className="flex flex-col justify-center mt-8">
                    <button className='bg-slate-300 m-1' type="button" onClick={handleLogin}>로그인</button>
                    <button className='bg-slate-400 m-1' onClick={togglePage}>회원가입하기</button>
                  </div>
                
    </div>
  )
}
