import React from 'react'
import Header from '../headfolder/Head'

export default function Mypage() {
  return (
    <div>
        <div className="flex flex-col w-full
            max-w-screen-xl
            h-screen
            mx-auto
            overscroll-y-auto
        ">
        <Header />      
        <div className="ml-1 bg-gray-200 justify-center items-end">
        <table className="border-collapse w-full" style={{boxShadow: '0 0 20px rgba(0,0,0,0.1)'}}>
            <thead>
                <tr>
                    <th>지역</th><th>모집기관</th><th>공고명</th><th>마감날짜</th><th>관심</th>
                </tr>
            </thead>
            <tbody>
            <tr >   
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(163, 209, 210, 0.2)'}}>Lorem</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>ipsum</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>dolor sit</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>amet, consectetur, </td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>⬜</td>
    
        </tr>
                    
            </tbody>
        </table>
        </div>
        </div>
        

    </div>
  )
}
