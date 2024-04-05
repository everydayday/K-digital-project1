import Tailbutton from "../ui/Tailbutton"
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil"
import {rcnt} from './RecoilAtom'

export default function Recoil3() {
  // const cnt = useRecoilValue(rcnt)
  // const setCnt = useSetRecoilState(rcnt)
  // state 변수처럼 쓰는데 recoil 변수 주면 됨
  const [cnt, setCnt] = useRecoilState(rcnt)
    const handleUp = () =>{
      setCnt(cnt + 1)
    }
  return (
    <div className="w-full">
      <Tailbutton caption= '증가3' color='orange'
      handleClick={handleUp}/>
    </div>
  )
}
