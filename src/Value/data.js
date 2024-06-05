import React from 'react'
import { useState } from 'react'

export default function data() {
  const [dataList, setDataList] = useState();
  

  
  const getData = (dt) => {
    let url = `https://apis.data.go.kr/B552474/SenuriService/getJobList?`
    url = url + `serviceKey=${process.env.REACT_APP_MV_API}`
  
    fetch(url)
    .then(resp => resp.json())
    .then(data => setDataList(data) )
    .catch(err => console.log(err))
  }
  
  
  
  
  return (
    <div>
      
    </div>
  )
}
