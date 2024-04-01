import { BrowserRouter, Routes,Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RouteNav from "./RouteNav"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"

export default function RouteMain() {
  return (
    <BrowserRouter>

    <div className="w-full mt-1 h-full flex flex-col justify-start items-start">
        <RouteNav />
            
          <Routes> {/* 페이지에 대한 경로 url 이름 설정 */}
            <Route path="/" element={<RouteHome />} />
            <Route path="/page1/:item" element={<RoutePage1/>} /> {/*:  뒤의 값으로 매개변수*/}
            <Route path="/page2" element={<RoutePage2 />} />
          </Routes>
    </div>
    </BrowserRouter>
  )
}
