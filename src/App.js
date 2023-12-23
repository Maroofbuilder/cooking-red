import "./styles/app.scss"
import { PiShoppingCart } from "react-icons/pi";
import { PiHamburger } from "react-icons/pi";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { IoBeerOutline } from "react-icons/io5";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Plate from './assets/images/plate-1.png'
// import MenuNavi from "./components/Menu";
import Menu from "./components/Menu"
function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="nav">
          <div className="text-part">taste</div>
          <div className="btn"><PiShoppingCart className="i"/></div>
        </div>
        <div className="body">
          <div className="content"><h1><span>delicious</span> food is waiting for you</h1>
          <button className="vbtn">view menu <FaArrowRightLong/></button>
            <div className="icons">
              <div className="burger"><PiHamburger/></div>
              <div className="ice"><LiaGlassMartiniAltSolid/></div>
              <div className="beer"><IoBeerOutline /></div>
              <div className="food"><PiBowlFoodBold /></div>
             </div>
          </div>
          <div className="plate">
            {/* <img src="src/assets/images/plate-1.png" alt="Plate Image" /> */}
            <div className="circle"></div>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  );
}

export default App;
