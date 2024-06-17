import React from 'react'

export default function Classify() {
  return (
    <div className="flex justify-center content-center h-40 ">
          <select className="m-2 rounded-lg">
            <option value="">1차 분류</option>
            <option value="1">건설·채굴</option>
          </select>
          <select className="m-2 rounded-lg" type="hidden">
            <option>2차 분류</option>
            <option>dd</option>
          </select>
          <select className="m-2">
            <option>3차 분류</option>
            <option>dddd</option>
          </select>
        </div>
  )
}
