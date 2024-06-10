import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate() ;

  const handleClick = () => {
    navigate('/main') ;
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className=' bg-blue-100 h-4/5 flex flex-col justify-between
                          text-3xl border-black border-solid border-2 '>
            
            <form name="loginForm" action="http://localhost:8080" method="post" className='p-2'>
              <div className='text-center font-bold  h-11 m-7 mb-14'>
                <h2>전국 일자리 </h2>
                <h2>한눈에 보기</h2>
              </div>
              <div className="flex">
                <p>아이디 :</p> <input type="text" id="username" name="username" className='border-2 w-[300px]' required></input>
              </div>
              <div className="flex">
                <p>비밀번호 :</p><input type="password" id="password" name="password" className='border-2 w-[280px] ' required></input> 
              </div>
              <div className="flex flex-col justify-center mt-5">
                <button className='bg-slate-300 m-3' type="button" onClick={handleClick}>로그인</button>
                <button className='bg-slate-400 m-3'>회원가입하기</button>
              </div>
            </form>
        </div>
      
    </div>
  )
}
