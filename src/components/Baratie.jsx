import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi.js';
import Item from './item.jsx';

const Baratie = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
    const filterItem = (category) => {
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
                    <h2 className='options' onClick={() => setMenuData(Menu)}>All</h2>
                    <h2 className='options' onClick={() => filterItem("Breakfast")}>Breakfast</h2>
                    <h2 className='options' onClick={() => filterItem("Drinks")}>Drinks</h2>
                    <h2 className='options' onClick={() => filterItem("Dishes")}>Dishes</h2>
                    <h2 className='options' onClick={() => filterItem("Desert")}>Desert</h2>
                </div>
                <div className='Item-cards'>
                    <Item menuData={menuData} />
                </div>
            </div>
        </>
    );
};

export default Baratie;
