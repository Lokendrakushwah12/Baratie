import React from 'react';
import './style.css';

const Baratie = () => {
    return (
        <>
            <div className="container">
                <div className="nav-bar">
                    <h1>Baratie</h1>
                    <div className='flex'>
                        <a className='btn-s'>sign in</a>
                        <a className='btn'>sign up</a>
                    </div>
                </div>
                <div className=''>
                    <div className="tab">
                        <h2>Breakfast</h2>
                        <h2>Drinks</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Baratie;
