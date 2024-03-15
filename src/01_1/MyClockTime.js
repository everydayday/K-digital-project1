import "./MyClockTime.css"

function MyClockTime(){

    const currentTime = new Date();

    return(
        <>
        <h1>{currentTime.toLocaleTimeString()}</h1>
        
        </>
    );


}


export default MyClockTime