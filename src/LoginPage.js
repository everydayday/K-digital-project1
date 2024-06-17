import { useNavigate } from "react-router-dom";
import {ReactComponent as Logo} from './images/logo4.svg'
export default function LoginPage() {
  const navigate = useNavigate() ;

  const handleClick = () => {
    navigate('/main') ;
  }

  return (
    <div className="h-screen flex flex-col justify-center ">
      <div className='w-full  flex justify-center items-center '>
          <div className=' bg-blue-100  flex flex-col justify-between
                            text-3xl border-black border-solid border-2 rounded-md p-4 '>
      
              <form name="loginForm" action="http://localhost:8080" method="post" className='p-2'>
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
                      <td><input type="text" id="username" name="username"
                                placeholder="ID"   className='border-2 w-full rounded-lg' required></input></td>
                  </tr>
      
                    <tr>
                      {/* <td className="text-center">
                        <p>비밀번호 :</p>
                      </td> */}
                      <td><input type="password" id="password" name="password"
                                placeholder="PW" className='border-2 w-full rounded-lg ' required></input></td>
                    </tr>
                </table>
                <div className="flex flex-col justify-center mt-5">
                  <button className='bg-slate-300 m-1' type="button" onClick={handleClick}>로그인</button>
                  <button className='bg-slate-400 m-1'>회원가입하기</button>
                </div>
              </form>
          </div>
      
      </div>
    </div>
  )
}
