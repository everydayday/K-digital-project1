import "./Hello.css"

function Hello(){
    let n = Math.floor(Math.random() * 100) + 1;
    
    // 오브젝트
    const st1 = {
        backgroundColor : "rgb(183, 182, 185)",
        color: "white"
    }

    const currentTime = new Date();

    

    
    let x ;
    return(
        <h1>
            <p>
                {currentTime.toLocaleTimeString()}
            </p>
            <span style={st1}>Hello☺</span> 
            <span style={{display:"inline-flex", margin:"10px"}}></span>
            {/* {n < 10 ? "0"+n : ""+n} */}
            {n < 10 ? `0${n}` : n}
            {/* <span style={{display:"inline-flex", margin:"10px", color:"red"}}>{n % 2 === 0 && "짝수"}</span>
            <span style={{display:"inline-flex", margin:"10px", color:"blue"}}>{n % 2 === 1 && "홀수"}</span> */}
            {/* {n < 10 && "0"}
            {n} */}
            
            
            {n % 2 === 0 ? "짝수" : "홀수"}
            {n % 2 === 0 
                ? <span style={{display:"inline-flex", margin:"10px", color:"red"}}>"짝수"</span>
                : <span style={{display:"inline-flex", margin:"10px", color:"blue"}}>"홀수"</span>
            
            }
            
            
            {/* {n % 2 === 0 ? "짝수" : "홀수"} */}
            {n % 2 === 0 && "🍎" }
            {n % 2 === 1 && "🥕"}
            {/* <p>{x || "x는 undefined입니다."}</p> */}
            

        </h1>
    );
}

export default Hello