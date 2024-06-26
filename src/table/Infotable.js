import React, {useState, useEffect} from 'react'
import tableData from './table_data.json'
import "./TableCss.css" 


export default function Infotable() {
    // states 초기화
    useEffect(()=>{
      if(tableData){
        setStates(tableData.map(() => '⬜')) // map은 배열을 반환하므로
      }
      
    },[])
    
    // 바뀌는 checkbutton들
    const [states, setStates] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageRange, setPageRange] = useState([1, 5]); // Initial page range from 1 to 5
    const itemsPerPage = 10;
       
    // 현재 페이지의 첫번째, 마지막 데이터의 인덱스
    const indexOfLastItem = currentPage * itemsPerPage; // 10 : currentPage 바뀔때마다 바뀜
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;    // 0

    
    // 원본 json 데이터 다루기
    const currentItemsData = tableData.slice(indexOfFirstItem, indexOfLastItem); // (end 미포함) .. currentPage 바뀔때마다 바뀜
    
    const [currentItems, setCurrentItems] = useState(currentItemsData)          // state 변수가 바뀔 때 마다 컴포넌트 다시 렌더링 됨
    // currentItemsData 가 초기값으로 설정되었지 currentItemsData를 참조하는 값은 아닌가봐
    
    // td 클릭 시 바뀌는 거
    const changeTd = (index) => {
      // const maptr = document.getElementById(jobId).rows
      // var row = document.getElementById(jobId)
    
      // var cell = row.getElementsByTagName('td')
      // console.log(cell)
      // cell.textContent = cell.textContent === '⬜' ? '✅' : '⬜'      
        
        let tms = [...states]
        tms[index] = tms[index] === '⬜' ? '✅' : '⬜'
        setStates(tms)
        // back과 통신 시, index로 접근 가능할 것 같음
      }

    
      // 출력 할 Items
    const trd = currentItemsData.map((item,index) =>{
        // item에서는 문제없이 데이터 들어옴
        return(<tr id = {item.jobId} className="md:text-sm sm:text-xs">   
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(163, 209, 210, 0.2)'}}>{item.workPlcNm}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>{item.oranNm}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>{item.recrtTitle}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}}>{item.toDd}</td>
            <td style={{padding : '15px' ,  backgroundcolor: 'rgba(255,255,255,0.2)'}} onClick={()=> changeTd(index)} >{states[index]}</td>
    
        </tr>
        );
    })

    //currentItemsData 바뀔때마다 setState => 렌더링 => currentItemsData 계산 하는 부분 재실행
    // useEffect 안에는 setState 안 들어가는게 좋겠네
    // currentItemsData 계산 하는 부분은 useEffect 안에 들어가도록
    /// ============== ///
    // useEffect(()=>{
    //   setCurrentItems(currentItemsData)
    // },[currentItemsData])



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
    
    


  return (
    // 
    <div className="ml-1 h-[800px]">
        <table className="border-collapse h-[650px] w-full " style={{boxShadow: '0 0 20px rgba(0,0,0,0.1)'}}>
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
