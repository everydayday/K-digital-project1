import React from 'react'
import { KoreaBubbleMap, KoreaMapData } from "@tenqube/react-korea-bubble-map";
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

export default function KoreaMap() {
  return (
    <div>
      <KoreaBubbleMap data={data} width={500} height={500} />
    </div>
  )
}
