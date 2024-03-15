import MyDiv2 from "./MyDiv2";

export default function MyDiv() {
    const dname1 = 'div1'; // 변수 .. 값을 전달해주고 싶다
    const dname2 = 'div2';
    const dname3 = 'div3';

  return (
    
    <div className="h-4/5 bg-orange-200 
    w-4/5 flex flex-col 
    justify-center items-center ">
      <p className="w-4/5 flex justify-start
                    font-bold text-2xl">
       {dname1}
      </p>
      <MyDiv2 d1={dname1} d2 = {dname2} d3 = {dname3}/>
    </div>
  );
}
