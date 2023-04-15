import { React, useState, useEffect } from 'react'

function Menu(){
    const [isMenuActive, setIsMenuActive] = useState(false);
    useEffect(() => {
        const handleMenuClick = () => {
          setIsMenuActive(!isMenuActive);
        };

        const handleWindowScroll = () => {
          setIsMenuActive(false);
        };

        const menu_icon = document.querySelector("#menu-icon");
        const menu = document.querySelector(".menu");

        menu_icon.addEventListener("click", handleMenuClick);
        window.addEventListener("scroll", handleWindowScroll);

        return () => {
          menu_icon.removeEventListener("click", handleMenuClick);
          window.removeEventListener("scroll", handleWindowScroll);
        };
      }, [isMenuActive]);

    return(
        <>
        <div  className="bx bx-menu" id="menu-icon"></div>
        <nav className={`menu ${isMenuActive ? "active" : "ul"}`}>
            <ul>
                <li>
                    <a href="#">اراء</a>
                </li>
                <li>
                    <a href="#">فيديو وصور</a>
                </li>
                <li>
                    <a href="#">ثقافة</a>
                </li>
                <li>
                    <a href="#">رياضة</a>
                </li>
                <li>
                    <a href="#">اقتصاد</a>
                </li>
                <li>
                    <a href="#">اخبار</a>
                </li>
                <li>
                    <a href="#">الرئيسية</a>
                </li>
            </ul>

        </nav>
        </>
    )
}

export default Menu