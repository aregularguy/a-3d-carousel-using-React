import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import searchIcon from "./search.svg";
import arrowIcon from "./arrow.svg";
import "./index.css"
const Navbar = () => {
  const divRef = useRef(null);
  const initialMainItems = [
    "Home",
    "Electronics",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
    "Furniture",
    "Travel",
    "Botanical",
    "Category Name",
  ];
  const [mainItems, setMainItems] = useState(initialMainItems);
  const [moreItems, setMoreItems] = useState([]);
  const [divWidth, setDivWidth] = useState(window.innerWidth * 0.75);
  const [showMoreItems, setShowMoreItems] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDivWidth(divRef?.current?.offsetWidth);
    });
  }, []);

  useEffect(() => {
    let thresholdItems = Math.floor(divWidth / 200);
    if (thresholdItems > mainItems) {
      setMainItems(initialMainItems);
    } else if (thresholdItems === 1 || thresholdItems === 2) {
      const mainItemsChunk = initialMainItems.slice(0, 1);
      const moreItemsChunk = initialMainItems.slice(
        1,
        initialMainItems.length + 1
      );
      setMainItems(mainItemsChunk);
      setMoreItems(moreItemsChunk);
    } else {
      const mainItemsChunk = initialMainItems.slice(0, thresholdItems + 1);
      const moreItemsChunk = initialMainItems.slice(
        thresholdItems + 1,
        initialMainItems.length + 1
      );
      console.log(mainItemsChunk);
      setMainItems(mainItemsChunk);
      setMoreItems(moreItemsChunk);
    }
  }, [window.innerWidth]);

  function renderMainItems(mainItemList) {
    console.log(mainItemList);
    return mainItemList?.map((item, index) => {
      return (
        <p className="nav-item" key={index}>
          {item}
        </p>
      );
    });
  }

  function renderMoreItems(moreItemList) {
    return moreItemList?.map((item, index) => {
      return (
        <p className="nav-item" key={index}>
          {item}
        </p>
      );
    });
  }

  const handleMore = (e) => {
    e.preventDefault();
    setShowMoreItems((showMoreItems) => !showMoreItems);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="title-container">
          <img src={logo} alt="" className="logo-img" />
          <h2 className="title">E-COMM</h2>
        </div>
        <div className="items-search-container" ref={divRef}>
          <div className="items-container">
            {renderMainItems(mainItems)}
            {moreItems.length > 0 && (
              <div className="more-container">
                <p>More</p>
                <img src={arrowIcon} onClick={handleMore} />
              </div>
            )}
          </div>
          <div className="search-container">
            <img src={searchIcon} className="search-icon" />
            {mainItems.length > 2 && (
              <input type="text" placeholder="Search something" />
            )}
          </div>
        </div>
      </div>
      {showMoreItems == 1 && (
        <div className="more-items-container">{renderMoreItems(moreItems)}</div>
      )}
      </div>
  );
};

export default Navbar;
