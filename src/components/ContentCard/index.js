import React from 'react'
import {useDispatch} from 'react-redux'
import Types from '../../redux/action/types'
import './index.css'

function ContentCard({props}) {

    const dispatch = useDispatch()
    const {images, id} = props

    return (
        <div className="content-card" onClick={() => dispatch({type: Types.CHANGE_HIGHLIGHTED_CONTENT, payload: id})}>
            <img src={images.poster_image_url} alt="Anime Poster"/>
        </div>
    )
}


export default ContentCard
