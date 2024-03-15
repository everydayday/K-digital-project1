import logo from "../logo.svg";
import "./HelloCss.css";
import "./HelloWhite"
import "./HelloYellow"
import HelloWhite from "./HelloWhite";
import HelloYellow from "./HelloYellow";


export default function HelloCss() {
  const apikey = process.env.REACT_APP_MV_API
  console.log(apikey)



  return (
    <div className="hellomain">
      <img src={logo} className="App-logo" alt="logo" />
      <HelloWhite />
      <HelloYellow />
      
      
    </div>
  );
}
