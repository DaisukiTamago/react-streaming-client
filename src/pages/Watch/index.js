import React from 'react'
import {useSelector} from 'react-redux'
import ReactPlayer from 'react-player'
import {useHistory} from 'react-router-dom'
import './index.css'

const Watch = () => {

    const history = useHistory()
    const video_url = useSelector( state => state.video_url)
    return (
        <div className="watch-container">
            <ReactPlayer 
                url={video_url}
                playing={true}
                controls={true}
                className="react-player"
            />
            <button onClick={() => history.push('/overview')}>Back</button>
        </div>
    )
}

export default Watch
