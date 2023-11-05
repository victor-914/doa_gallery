import React, { useState, useEffect } from "react";
import NAVLISTARRAY, { MENUNAVLISTARRAY } from "../../utils/NavListArray";
import StyledNavBar from "./Navbar.styles";
import Image from "next/image";
import wlt from "../../assets/unnLoogo.png";
import { secondaryColor } from "../../utils/Colors";
import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import nookies, { destroyCookie } from "nookies";
import { toast } from "react-toastify";
function NavBar() {
  const [navColor, setnavColor] = useState(`${secondaryColor}`);
  const [color, setColor] = useState("#fff");
  const [shadow, setShadow] = useState("");
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const cookies = nookies.get();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    cookies?.jwt ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const handleLogout = () => {
    destroyCookie(null, "jwt");
    toast.success("Logout successful");
    setMenu(!menu);
  };

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("#fff")
      : setnavColor(`${secondaryColor}`);
    window.scrollY > 10 ? setColor("#096c3a") : setColor("#fff");
    window.scrollY > 10
      ? setShadow("0px 4px 10px rgba(0, 0, 0, 0.25)")
      : setShadow("");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [navColor, color, shadow]);

  const handleMenu = () => {
    setMenu(!menu);
  };


  return (
    <StyledNavBar
      style={{
        backgroundColor: `${navColor}`,
        boxShadow: `${shadow}`,
      }}
    >
      <div className="logo_section">
        <Image
          src={wlt}
          width={"50px"}
          height={"50px"}
          layout="fixed"
          id="wltLogoImg"
        />
      </div>

      <div className="nav_content">
        {NAVLISTARRAY.map((items) => {
          return (
            <div key={items.key1}>
              <div key={items.key2}>
                <Link href={items.path} key={items.key3}>
                  <a
                    key={items.title}
                    className={items.className}
                    style={{
                      color: `${color}`,
                    }}
                  >
                    <li key={items._id}>{items.title}</li>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
        <div>
          {cookies?.jwt ? (
            <button
              style={{
                backgroundColor: "#fff",
                padding: "6px",
                borderRadius: "4px",
                color: "#000",
              }}
              onClick={handleLogout}
            >
              log out
            </button>
          ) : (
            <button
              style={{
                backgroundColor: "#fff",
                padding: "6px",
                borderRadius: "4px",
                border: "2px solid #096",
                color: "#000",
              }}
              onClick={() => router.replace("/_login")}
            >
              log in
            </button>
          )}
        </div>
      </div>
      <div
        style={{
          color: `${color}`,
        }}
        className="hamburger"
        onClick={handleMenu}
      >
        <AiOutlineMenu />
      </div>

      {menu && (
        <div className="mobileMenuCover">
          <div className="icon_holder">
            <BsXLg id="cancel" onClick={handleMenu} />
          </div>
          <div className="logo_ection">
            <Image src={wlt} layout="fixed" position="absolute" id="wltLoImg" />
          </div>
          <div className="menu">
            {MENUNAVLISTARRAY.map((item) => {
              return (
                <>
                  <Link href={item.path} key={item._id}>
                    <a
                      key={item.key3}
                      className={item.className}
                      onClick={() => setMenu(!menu)}
                    >
                      <li key={item.key2}>{item.title}</li>
                    </a>
                  </Link>
                </>
              );
            })}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {cookies?.jwt ? (
                <button
                  style={{
                    backgroundColor: "#fff",
                    padding: "6px",
                    borderRadius: "4px",
                    color: "#000",
                  }}
                  onClick={handleLogout}
                >
                  log out
                </button>
              ) : (
                <button
                  style={{
                    backgroundColor: "#fff",
                    padding: "6px",
                    borderRadius: "4px",
                    border: "2px solid #096",
                    color: "#000",
                  }}
                  onClick={() => {
                    setMenu(!menu), router.replace("/_login");
                  }}
                >
                  log in
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </StyledNavBar>
  );
}

export default NavBar;
