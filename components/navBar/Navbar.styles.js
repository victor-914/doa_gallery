import styled from "styled-components";
import {
  primaryColor,
  primaryColor2,
  secondaryColor,
  tertiaryColor,
} from "../../utils/Colors";

const StyledNavBar = styled.section`
  width: 100%;
  height: 90px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  z-index: 300;
  position: fixed;
  background-color: transparent;

  .hamburger {
    display: none;
  }

  #cancel {
    display: none;
  }

  .logo_section {
    width: auto;
    background-color: transparent;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #wltLogoImg {
    /* padding-left: 10px; */
    /* position: absolute !important; */
    width: 100px !important;
    height: 40px !important;
    /* margin-bottom: 3px !important; */
  }

  .nav_content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
  }

  .nav_item {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -1px;
  }

  .nav_item {
    background-color: green;
  }

  .nav_item li {
    list-style: none;
  }

  .nav_item li:hover {
    color: ${tertiaryColor};
  }

  .call_section {
    background-color: #fff;
    width: 12%;
    text-align: center;
    height: 48%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    background-color: ${primaryColor};
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .call_icon {
  }

  .mobileMenuCover {
    width: 90%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${secondaryColor};
    animation: openMenu 0.2s ease-in 1;
  }

  @keyframes openMenu {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }

    100% {
      opacity: 1;
      transform: translateX(100%);
    }
  }

  .icon_holder {
    text-align: end;

    padding: 15px;
  }

  #cancel {
    font-size: 60px;
    display: block;
    text-align: end;
    position: absolute;
    right: 10px;
    padding: 10px;

    color: red;
  }

  .menu {
    margin-top: 50px;
  }

  .menu li {
    line-height: 2.5;
    width: 95%;
    margin: auto;
    list-style: none;
    padding-left: 2%;
    margin-bottom: 20px;
    border-radius: 5px;
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }

  .li {
  }

  .submenu {
    font-size: 18px;
    letter-spacing: 1px;
  }

  #submenu_li {
    font-size: 15px;
    width: 85%;
    letter-spacing: -0.5px;
  }

  #submenu_li li {
    width: 88%;
    border: none;
    background-color: ${primaryColor2};
    /* background-color: ${tertiaryColor}; #016dac ,#0089c8, #0089c8); */
  }

  .indicatorCont {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .indicator {
    font-size: 20px;
  }
  /* #galleryLi {
    display: none;
  } */

  .service_menu {
    z-index: 3;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
  }

  .logo_ection {
    position: relative;
    width: 100px;
    height: 80px;
    margin: auto;
  }

  .submenu_container {
    position: relative;

    height: auto;
    text-align: center;
    width: auto;
  }

  .service_title {
    text-align: center;

    transform: translateY(70px);

    font-size: 18px;
    letter-spacing: -1px;
    font-weight: 500;
  }

  .SHOW {
    visibility: visible;
  }

  .HIDE {
    visibility: hidden;
  }

  #submenu_list {
    position: relative;
    width: 100%;
    height: auto;
    color: #fff;
    padding: 0px 8px 0px 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: ${secondaryColor};
    line-height: 2.3;
    font-size: 15px;
    text-align: start;
    list-style: none;
    cursor: pointer;
    transform: translateY(65px);
    transition: all 1s;
    font-weight: 500;
  }

  #submenu_list::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    z-index: -1;
    left: 0;
    transition: all 0.5s;
    background-color: ${tertiaryColor};
  }

  #submenu_list:hover::before {
    width: 100%;
    transition: all 0.5s;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & {
      height: 60px;
    }

    .nav_content {
      display: none;
    }

    .call_section {
      display: none;
    }

    .hamburger {
      font-size: 30px;
      display: block;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    & {
      height: 60px;
    }

    .nav_content {
      display: none;
    }

    .call_section {
      display: none;
    }

    .hamburger {
      font-size: 30px;
      display: block;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      height: 60px;
    }

    .nav_content {
      display: none;
    }

    .call_section {
      display: none;
    }

    .hamburger {
      font-size: 25px;
      display: block;
      padding: 8px;
    }

   
  }
`;

export default StyledNavBar;
