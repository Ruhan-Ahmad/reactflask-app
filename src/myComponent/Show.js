import React from 'react'

export const Show = ({res, i}) => {
    return (
        <div>
            <p key ={i}>{res.firstName}</p>
            <p key={i}>{res.lastName}</p>
        </div>
    )
}
