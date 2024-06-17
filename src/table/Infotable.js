import React, {useState} from 'react'
import tableData from './table_data.json'
import "./TableCss.css" 


export default function Infotable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageRange, setPageRange] = useState([1, 5]); // Initial page range from 1 to 5
    const itemsPerPage = 10;
       

    const indexOfLastItem = currentPage * itemsPerPage; // 10 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;    // 0

    // 원본 json 데이터 다루기
    const currentItemsData = tableData.slice(indexOfFirstItem, indexOfLastItem); // (end 미포함)
    const [currentItems, setCurrentItems] = useState(currentItemsData)


    const totalPages = Math.ceil(tableData.length / itemsPerPage)

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        if (pageNumber > pageRange[1]) {
            setPageRange([pageRange[1] + 1, pageRange[1] + 5]);
          } else if (pageNumber < pageRange[0]) {
            setPageRange([pageRange[0] - 5, pageRange[0] - 1]);
          }
    }

    // 다음 버튼 목록
    const handleNext = () => {
        const newStart = pageRange[0] + 5;
        const newEnd = pageRange[1] + 5;
        setPageRange([newStart, Math.min(newEnd, totalPages)]);
        setCurrentPage(newStart);
      };

      // 이전 버튼 목록
      const handlePrevious = () => {
        const newStart = Math.max(pageRange[0] - 5, 1);
        const newEnd = pageRange[1] - 5;
        setPageRange([newStart, newEnd]);
        setCurrentPage(newStart);
      };
      
    const renderPageNumbers = () => {
        const pageNumbers = [];
        // const startPage = Math.max(currentPage - pageRange, 1)
        // const endPage = Math.min(currentPage + pageRange, indexOfLastItem)
        for(let i =pageRange[0]; i <= Math.min(pageRange[1], totalPages); i++){
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                    style={{
                        padding : '10px',
                        margin : '5px',
                        backgroundcolor : i === currentPage ? '#4CAF50' : '#f1f1f1',
                        color : i === currentItems ? 'white' : 'black',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                >{i}
                </button>
            );
        }
        
        return pageNumbers
    }


    //const [checkValue, setCheckValue] = useState('⬜')
    const [, forceUpdate] = useState(0);


    // td 클릭 시 바뀌는 거 나중에 구현하기
    const changeTd = (jobId) => {
    // const maptr = document.getElementById(jobId).rows
    // var row = document.getElementById(jobId)
  
    // var cell = row.getElementsByTagName('td')
    // console.log(cell)
    // cell.textContent = cell.textContent === '⬜' ? '✅' : '⬜'

    // forceUpdate(n => n + 1);

      // let tm = currentItems.filter( i => i.jobId == jobId);
      let tms = currentItems
      let tm = tms.filter( i => i.jobId == jobId);
      console.log("infotable =", tm[0]['interest'])
      tm[0]['interest'] = tm[0]['interest'] === '⬜' ? '✅' : '⬜'
      
      

      setCurrentItems
    }

    // 출력 할 Items
    const trd = currentItems.map(item =>{
        // item에서는 문제없이 데이터 들어옴
        return(<tr id = {item.jobId} className="md:text-sm sm:text-xs">   
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(163, 209, 210, 0.2)'}}>{item.workPlcNm}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>{item.oranNm}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>{item.recrtTitle}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>{item.toDd}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}} onClick={()=> changeTd(item.jobId)} >⬜</td>
    
        </tr>
        );
    })

    


  return (
    <div className="ml-1 h-[650px]">
        <table className="border-collapse h-[550px]" style={{boxShadow: '0 0 20px rgba(0,0,0,0.1)'}}>
            <thead>
                <tr>
                    <th>지역</th><th>모집기관</th><th>공고명</th><th>마감날짜</th><th>관심</th>
                </tr>
            </thead>
            <tbody>
                {trd}     
            </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handlePrevious} style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: '#f1f1f1',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
        }}
        // True인 상황 보냄으로 disabled 활성화
        disabled={pageRange[0]===1} >
            이전
        </button>     
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: '#f1f1f1',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
          }}
          disabled={pageRange[1] >= totalPages}
        >
          다음
        </button>
      </div>
    </div>
  )
}
