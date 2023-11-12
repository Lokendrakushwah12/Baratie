import React from 'react'

const Tab = ({ filterItem, menuList }) => {

    return (
        <>
            {menuList.map((curElem) => {
                return (
                    <>
                        <h2 className='options' onClick={() => filterItem(curElem)}>{curElem}</h2>
                    </>
                );
            })}
        </>
    )
}

export default Tab
