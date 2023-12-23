import React from 'react'
import '../styles/components/menunavi.scss'
import { PiShoppingCart } from "react-icons/pi";
import Plate from '../assets/images/plate-1.png'
import { IoMdHeartEmpty } from "react-icons/io";
const MenuNavi = () => {
  return (
    <div class="menu-navi">
    <div class="unique-menus">
      <div class="menu-card">
        <div class="menu-img-box">
          <img src={Plate} alt="" />
        </div>
        <div class="menu-texts">
          <div class="first-text">
            <div>Prawn Plite</div>
            <div class="heart-box">
              <IoMdHeartEmpty className='i'/>
            </div>
          </div>
          <div class="second-text">Crispy and juicy</div>
          <div class="third-text">$89</div>
        </div>
        <div class="menu-back"></div>
        <div class="card-btn">
          <PiShoppingCart className='i'/>
        </div>
      </div>
      <div class="menu-card">
        <div class="menu-img-box">
          <img src={Plate} alt="" />
        </div>
        <div class="menu-texts">
          <div class="first-text">
            <div>Chicken Slice</div>
            <div class="heart-box">
           <IoMdHeartEmpty className='i'/>
            </div>
          </div>
          <div class="second-text">Spicy with goals</div>
          <div class="third-text">$59</div>
        </div>
        <div class="menu-back"></div>
        <div class="card-btn">
        <PiShoppingCart className='i'/>
        </div>
      </div>
    </div>
    <div class="menu-text">
      <div class="text-header">
        <div>We have Delicious food </div>
        <div>Tasty food in town</div>
      </div>
      <div class="text-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe autem quam fuga, labore harum voluptatum, placeat ab incidunt totam debitis amet suscipit cupiditate blanditiis. Expedita nisi vero neque explicabo!
      </div>
    </div>
  </div>
  )
}

export default MenuNavi