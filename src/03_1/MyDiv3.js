export default function MyDiv3({d1, d2, d3}) {
  const dname3 = "div1 > div2 > div3";

  return (
    <div
      className="h-4/5 w-4/5 bg-red-400
            flex flex-col justify-start 
            my-3 items-start"
    >
      <p className="w-4/5 flex justify-start 
                    font-bold text-xl m-2">{`${d1} > ${d2} > ${d3}`}
      </p>
      
    </div>
  );
}
