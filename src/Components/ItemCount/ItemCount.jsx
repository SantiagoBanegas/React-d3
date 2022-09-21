import React from 'react'

function ItemCount(props) {
    const [count, setCount] = React.useState(1)

    function handleSubtract(){
        setCount(count - 1)
    }
    
    function handleAdd(){
        setCount(count + 1)
    }


return (
    <div>
        <button oneClick={handleAdd}>-</button>
        <span>{count}</span>
        <button oneClick={handleSubtract}>+</button>
    </div>
    )
}

export default ItemCount