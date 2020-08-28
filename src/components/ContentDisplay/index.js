import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {generate} from 'shortid'
import './index.css'

function ContentDisplay() {

    const {overview, images, name} = useSelector( state => state.highlightedContent)
    const history = useHistory()
    
    return (
        <div key={generate()} className="content-display display-animation">
            <img src={images?.backdrop_image_url} alt="anime backdrop"/>
            <div className="content-info opacity-animation" style={{opacity: 0}}>
                <span><h1>{name}</h1></span>
                <span id="overview">{overview}</span>
                <button onClick={() => history.push('/overview')}>Watch</button>
            </div>
        </div>
    )
}

export default ContentDisplay
