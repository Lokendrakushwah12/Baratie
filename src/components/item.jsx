import React from 'react'
import './style.css';

const item = ({ menuData }) => {

    return (
        <>
            {menuData.map((curElem) => {
                const { id, image, name, description, price } = curElem;

                return (
                    <>
                        <div className="card-conatiner" key={id}>
                            <img src={image} alt="images" className='card-media' />
                            <div className="card-body">
                                {/* <div className="card-num">{id}</div> */}
                                <div className="card-title">{name}</div>
                                <div className="card-price">Price: <span className='Price'>{price}</span></div>
                                <div className="card-description">{description}</div>
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
