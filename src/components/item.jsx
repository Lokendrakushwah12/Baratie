import React from 'react'
import './style.css';

const item = ({ menuData }) => {

    return (
        <>
            {menuData.map((curElem) => {
                return (
                    <>
                        <div className="card-conatiner" key={curElem.id}>
                            <img src={curElem.image} alt="images" className='card-media' />
                            <div className="card-body">
                                {/* <div className="card-num">{curElem.id}</div> */}
                                <div className="card-title">{curElem.name}</div>
                                <div className="card-price">Price: <span className='Price'>{curElem.price}</span></div>
                                <div className="card-description">{curElem.description}</div>
                                {/* <div className="card-read">read</div> */}
                                <div className="order">Order now</div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default item
