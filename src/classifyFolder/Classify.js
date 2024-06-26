import React from 'react'

export default function Classify() {
  return (
    <div className="flex flex-row justify-center content-center font-medium  ">
          <select className="m-2 rounded-lg">
            <option value="">1차 분류</option>
            <option value="1">건설·채굴</option>
          </select>
          <select className="m-2 rounded-lg" type="hidden">
            <option>2차 분류</option>
            <option>dd</option>
          </select>
          <select className="m-2 rounded-lg">
            <option>3차 분류</option>
            <option>dddd</option>
          </select>
        </div>
  )
}
