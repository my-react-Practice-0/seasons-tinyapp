import React from 'react'
import './SeasonDisplay.css'

const seasonConfig={
    summer: {
        text: 'It is hot!!!!',
        iconName: 'sun'
    },
    winter: {
        text: 'It is freezing!!!!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if (month> 2 && month<9){
        return lat > 0 ? 'summer' : 'winter'
    } else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

export default function SeasonDisplay(props) {
    const season = getSeason(props.lat,new Date().getMonth())
    const {text,iconName } = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`massive icon icon-left ${iconName}`}/>
            <h1>{text}</h1>
            <i className={`massive icon icon-right ${iconName}`}/>
        </div>
    )
}
