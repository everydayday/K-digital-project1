import React from 'react'
import { KoreaBubbleMap, KoreaMapData } from "@tenqube/react-korea-bubble-map";
import { useState, useEffect } from 'react';
// import filtered_data from "./kmap/filtered_sidogun-2전처리"

{/* https://www.npmjs.com/package/@tenqube/react-korea-bubble-map */}
const data: KoreaMapData = {
    sido: [{ code: "1100000000", name: "서울특별시", count: 400 }],
    sigungu: [
      { code: "1168000000", name: "강남구", count: 300 },
      { code: "1171000000", name: "송파구", count: 100 },
    ],
    emd: [
      { code: "1168010100", name: "역삼동", count: 300 },
      { code: "1171010100", name: "잠실동", count: 100 },
    ],
  };

// const data_dict: KoreaMapData = {
//   // 엑셀 돌면서 리스트 만들기
//   const data_list = []
//   const first_data = filtered_data.법정동코드
//   const second_data = filtered_data.법정동명



// }



export default function KoreaMap() {
  const [tdata, setTdata] = useState()

  const getData = () => {
    let url = `https://apis.data.go.kr/B552474/SenuriService/getJobList?`
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
    url = url + `&pageNo=1&numOfRows=1000`

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.response.body.items.item))
      .catch(err => console.log(err))
  }

  useEffect(()=>{
    getData()
    const tr = tdata.map(item => item.workPlcNm)

  },[])

  return (
    <div>
      <KoreaBubbleMap data={data} width={500} height={500} />
    </div>
  )
}
