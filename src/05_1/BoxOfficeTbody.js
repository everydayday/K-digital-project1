import { useState } from "react";
import { MdExposureZero } from "react-icons/md";
import { queryByTestId } from "@testing-library/react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
export default function BoxOfficeTbody({ boxlist,setStInfo }) {
  const info = (mv) => {
    // 삼항 연산자 3개 가능하다
    let str = parseInt(mv.rankInten) === 0 ? "그대로입니다.😑"
              : parseInt(mv.rankInten) > 0 ? "증가했습니다.😁" : "감소했습니다. 😥"
    // 할당연산자로 state 변수 변경 불가능 => 업데이트함수로 변경 가능
    setStInfo(`전날대비 "${mv.movieNm}" 순위는  ${str} : ${mv.rankInten}`)
  };
  // return 없으면 {} 없어야 해
  // {}쓸려면 return 해야 해
  const trs = boxlist.map((item) => (
    <tr 
      onClick={() => {
        info(item);
      }}
      key={item.movieCd}
      className="hover:bg-red-100"
    >
      <td className="text-violet-700 text-base bg-red-200 h-1/4 rounded-lg">
        {item.rnum}
      </td>
      <td>{item.movieNm}</td>
      <td>{parseInt(item.salesAmt).toLocaleString()}</td>
      <td>{parseInt(item.audiCnt).toLocaleString()}</td>
      <td>{item.audiChange}</td>
      <td className="flex justify-center">
        {parseInt(item.rankInten) === 0 ? (
          <MdExposureZero />
        ) : parseInt(item.rankInten) > 0 ? (
          <FaLongArrowAltUp />
        ) : (
          <FaLongArrowAltDown />
        )}
      </td>
    </tr>
  ));
  return <tbody>{trs}</tbody>;
}
