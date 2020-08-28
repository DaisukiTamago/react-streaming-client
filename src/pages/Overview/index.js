import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import SeasonList from '../../components/SeasonList'
import './index.css'

const Overview = () => {

    const history = useHistory()
    const content = useSelector( state => state.highlightedContent)

    return (
        <div className="overview-container">
            <div className="overview-header">
              <img src={content.images.poster_image_url} alt="Anime poster"/>
              <div className="overview-info text">
                  <h1 className="title">{content.name}</h1>
                  <span>{content.overview}</span>
                  <span>Community rating:  
                  <span style={{color: content.vote_average>7?'green':'yellow'}}>
                  {'  '+ content.vote_average}
                  </span>
                  </span>
                  <span>Genres: {content.genres.map( genre => genre.name+", ")}</span>
                </div>
            </div>
            <div className="overview-body">
              <SeasonList props={content.seasons}/>
              <button style={{marginTop: 30, marginBottom: 30}} onClick={() => history.push('/')}>Back</button>
            </div>
       </div>
    )
}

export default Overview
