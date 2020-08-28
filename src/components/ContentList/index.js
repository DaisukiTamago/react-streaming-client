import React from 'react'
import {useSelector} from 'react-redux'
import ContentCard from '../ContentCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import './index.css'

const ContentList = () => {

    const content_array = useSelector( state => state.storedContent )

    return (
        <ScrollContainer className="content-list">
            {content_array.map( content => <ContentCard key={content.id} props={content}/>)}
        </ScrollContainer>
    )
}

export default ContentList
