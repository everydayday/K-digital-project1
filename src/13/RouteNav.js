import Tailbutton from "../ui/Tailbutton"
import { Link, useNavigate } from "react-router-dom"
export default function RouteNav() {
  const navigator = useNavigate() // navigator hook 을 통해 이동
  return (
    <div className="flex flex-col w-full
                    justify-center items-center">
      
        <div className="flex flex-row w-11/12
                    justify-center items-center">
          <ul className="w-full flex flex-row">
            <li className="bg-slate-200 rounded-md w-1/3 m-2 text-center py-2"><Link to='/'>홈</Link></li>
            <li className="bg-slate-200 rounded-md w-1/3 m-2 text-center py-2"><Link to='/page1'>page1</Link></li>
            <li className="bg-slate-200 rounded-md w-1/3 m-2 text-center py-2"><Link to='/page2?item1=커피&item2=쥬스'>page2</Link></li>
          </ul>
        </div>
      
      <div className="flex w-11/12
                    justify-center items-center">
        <Tailbutton caption= "홈"
                    color= "blue"
                    handleClick = {() => {navigator("/")}} />
        <Tailbutton caption= "Page1"
                    color= "blue"
                    handleClick = {() => {navigator("/page1")}} />
        <Tailbutton caption= "Page2"
                    color= "blue"
                    handleClick = {() => {navigator("/page2?item1=사과&item2=바나나")}} />
      </div>
    </div>
  )
}
