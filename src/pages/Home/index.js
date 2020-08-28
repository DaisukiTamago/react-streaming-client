import React, { useEffect } from 'react'
import { CircleSpinner } from 'react-spinners-kit'
import { useDispatch, useSelector } from 'react-redux'
import Types from '../../redux/action/types'
import ContentDisplay from '../../components/ContentDisplay'
import ContentList from '../../components/ContentList'
import './index.css'

const Home = () => {

    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch()

    useEffect(() => { 
        if(isLoading){
            dispatch({ type: Types.MAKE_API_CALL })
        } 
    }, [dispatch])


    return isLoading ?
            <div className="text home-container ">
                <CircleSpinner color="#E50914" />
                <span>Hold on a a few moments...</span>
            </div>
            :
            <>
                <ContentDisplay />
                <ContentList />
            </>

}

export default Home
