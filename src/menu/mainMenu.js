import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import useItems from "./itemLists/itemList";

import TopSlider from "./topSlider";

import "./mainMenu.css"

function MainMenu(){
    const location = useLocation().pathname.slice(1);
  const itemList = useItems()[location]
    // надо написать стили под каждый из этих классов
    // возможно создать отдельные файлы под каждый и импорт
    return(<div className={"mainWraper " + (location==="drinks" ? "drinkWraper" : location==="food" ? "foodWraper" : "hookahWraper")}>
    <TopSlider itemsList={itemList} />
    </div>)
}
export default MainMenu;