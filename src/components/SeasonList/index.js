import React from 'react'
import Types from '../../redux/action/types'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Collapsible from 'react-collapsible'
import './index.css'

const SeasonList = ({props}) => {

    const dispatch = useDispatch()
    const history = useHistory()

    return props.map( (season, index) => {
        return (
            <Collapsible trigger={`Season ${index+1}`} triggerTagName="div" overflowWhenOpen={'auto'} key={season.id}>
                {season.episodes.map( episode => 
                  episode.overview !== "" ? (
                    <div className="Collapsible__item" key={episode.id} onClick={ 
                        () => {
                        dispatch({type: Types.SET_VIDEO_URL, payload: episode.video_url})
                        history.push('/watch')
                    }}>
                        <img src={episode.still_image_url} alt="anime still" />
                        <div className="item-info">
                            <h1 className="item-title">{episode.name}</h1>
                            <span className="item-overview">
                                Episode: {episode.episode_number} 
                                <br/>
                                {episode.overview}
                            </span>
                        </div>
                    </div>
                ) : <></>
                )}
            </Collapsible>
        )
    })
}

export default SeasonList
