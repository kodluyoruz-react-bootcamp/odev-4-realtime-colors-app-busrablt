import React from 'react'

function Button() {
    return (
        <div>
            <button onClick={()=> setHidden(!hidden)}>Open color picker </button>
        </div>
    )
}

export default Button
