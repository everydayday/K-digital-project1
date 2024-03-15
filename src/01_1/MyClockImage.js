 import logo from "../logo.svg";
 import "./MyClockImage.css"
 import clock from "../colock.png"
 import clock1 from "../clock1.png"
function MyClockImage(){


    return(
        <>
        <div className="clockname"><img src={logo} className="App-logo" alt="logo" /></div>
        <div className="clockname"><img src={clock} className="App-clock" alt="clock" /></div>

        </>
    );


}


export default MyClockImage
