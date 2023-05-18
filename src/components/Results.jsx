import React from 'react'
import {useParams} from 'react-router-dom'

const Results = (props) => {

    const {input, color, backgroundColor} = useParams()


    return (
        <div>
            
            {isNaN(input)?
            <h2 style = {{
                color: color,
                backgroundColor: backgroundColor
                }}> The word is: {input}</h2>
            :
            <h2 style = {{
                color: color,
                backgroundColor: backgroundColor
                }}> The number is: {input} </h2>
            }
        </div>
    )
}

export default Results