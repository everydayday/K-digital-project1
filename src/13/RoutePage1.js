import { useParams } from "react-router-dom"

export default function RoutePage1() {
  // useParams 를 통해 url에서의 값 잡아낸다
  const item = useParams().item;
  console.log(item)
  return (
    <div>
      RoutePage1 : {item}
    </div>
  )
}
