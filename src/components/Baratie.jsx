import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi.js';
import Item from './item.jsx';
import Tab from './tab.jsx';

const uniqueList = [
    "All",
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    )
];

const Baratie = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);



    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }

    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="nav-bar">
                        <h1>Baratie</h1>
                        <div className='flex'>
                            <a className='btn-s'>sign in</a>
                            <a className='btn'>sign up</a>
                        </div>
                    </div>
                </div>
                <div className="tab">
                    <Tab filterItem={filterItem} menuList={menuList} />
                </div>
                <div className='Item-cards'>
                    <Item menuData={menuData} />
                </div>
            </div>
        </>
    );
};

export default Baratie;
