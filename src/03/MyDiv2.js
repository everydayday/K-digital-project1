import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
  const dname3 = "div1 > div2";
  return (
    <div
      className="h-4/5 w-4/5 bg-yellow-400 
                    flex flex-col justify-center 
                    m-3 items-center"
    >
      <p className="w-4/5 flex justify-start font-bold text-2xl m-2">
      {`${probs.d1} > ${probs.d2}`}
      </p>
      
      <MyDiv3 d1={probs.d1} d2 = {probs.d2} d3 = {probs.d3}/>
    </div>
  );
}
