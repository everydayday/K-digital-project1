import React from 'react'
import { KoreaBubbleMap, KoreaMapData } from "@tenqube/react-korea-bubble-map";
import { useState, useEffect } from 'react';
//import fs from 'fs'
import jsonData from './korea_map_data.json'
import codeJsonData from './sido_code_data.json'



const generateCodeForName = (name) => {
  const sidoCode = codeJsonData[name];
  const sidoCodeStr = sidoCode.toString();
  return sidoCodeStr
}
//const rawData = fs.readFileSync('./kmap/korea_map_data.json', 'utf-8');
//const jsonData = JSON.parse(rawData)
const input_data = {
  sido : [],
  sigungu : [],
  emd : [],
};




Object.keys(jsonData).forEach(key => {
  const plccount = jsonData[key];
  const parts = key.split(" ");
  // 대분류 값도 합계로 넣어줘야 해
  //input_data.sido.push({code : generateCodeForName(parts[0]), name : parts[0], count : plccount})
  if(plccount === 0 || parts[0] === "전북") {} // count 없는건 넣지말고 넘어가기 // 이상하게 전북이 안 됌
  else {
    if(parts.length === 1){
      input_data.sido.push({code : generateCodeForName(parts[0]), name : parts[0], count : plccount})
    } 
    else if (parts.length === 2){
  
      input_data.sigungu.push({code : generateCodeForName(parts.join(' ')), name : parts.join(' '), count : plccount})
    }
    console.log(input_data)
    
  }  
});

const sidoresult = {};
// sido 넣기 위해 시도 값 합산 추출
Object.keys(jsonData).forEach(key =>{
  const parts = key.split(" ");
  const mainKey = parts[0];
  if (!sidoresult[mainKey]){
    sidoresult[mainKey] = 0;
  }
  sidoresult[mainKey] += jsonData[key];
});
// sido 값 넣는 함수
Object.keys(sidoresult).forEach(key =>{
  if(key != "전북"){
    const plcName = key;
    const plcNum = sidoresult[key];
    input_data.sido.push({code : generateCodeForName(plcName), name : key ,count : plcNum });
    console.log("input_data : " , input_data)
  }
  
}) 


// 법정동 코드 반환 함수
// const codeData = fs.readFileSync('./kmap/sido_code_data.json', 'utf-8');
// const codeJsonData = JSON.parse(codeData);




// 데이터 입력 예제
// sido 랑 sigungu 합이 같아야 하는 것 같아
// name은 상관 없어
{/* https://www.npmjs.com/package/@tenqube/react-korea-bubble-map */}
// const data: KoreaMapData = {
//     sido: [
//       { code: "1100000000", name: "서울특별시", count: 400 },
//       //{ code: "2600000000", name: "부산", count: 500}
//     ],
//     sigungu: [
//       { code: "1168000000", name: "강남구", count: 300 },
//       { code: "1171000000", name: "송파구", count: 100 },
//       {code : "2647000000", name : "연제구" , count : 500 },
//     ],
//     emd: [
//       { code: "1168010100", name: "역삼동", count: 300 },
//       { code: "1171010100", name: "잠실동", count: 100 },
//     ],
//   }; 


// 임의로 데이터 넣어보기 (test data)
// 전북이 안 됌
const input_data1 = {
  sido: [
        { code: "1100000000", name: "서울특별시", count: 400 },
        { code: "5100000000", name: "강원", count: 500 },
        { code: "5000000000", name: "제주", count: 300 },
        { code: "4600000000", name: "전남", count: 300 },
        { code: "4700000000", name: "경북", count: 300 },
        //{ code: "5200000000", name: "전북", count: 300 },
  ],
  sigungu:[
    { code: "1168000000", name: "강남구", count: 300 },
    { code: "1171000000", name: "송파구", count: 100 },
    {code : "5111000000", name : "강원 춘천시" , count : 500 },
    {code : "5011000000", name : "제주 제주시" , count : 300 },
    
  ],
  emd: [
        { code: "1168010100", name: "역삼동", count: 300 },
        { code: "1171010100", name: "잠실동", count: 100 },
      ],
};

// 예제 데이터로 활용해보기 (ok data) => KoreaMapData = input_data2 형식 가능
const input_data2 = {
      sido: [
      { code: "1100000000", name: "서울특별시", count: 400 },
      { code: "2600000000", name: "부산", count: 500}
    ],
    sigungu: [
      { code: "1168000000", name: "강남구", count: 300 },
      { code: "1171000000", name: "송파구", count: 100 },
      {code : "2647000000", name : "연제구" , count : 500 },
    ],
    emd: [
      { code: "1168010100", name: "역삼동", count: 300 },
      { code: "1171010100", name: "잠실동", count: 100 },
    ],
};

// 받아온 변수 값 넣기
const data : KoreaMapData = input_data

export default function KoreaMap() {

  return (
    <div className="flex justify-center">
      <KoreaBubbleMap data={data} width={500} height={500} />
    </div>
  )
}
