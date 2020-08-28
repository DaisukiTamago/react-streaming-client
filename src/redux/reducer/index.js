import Types from '../action/types'

const reducer = (state, action) => {

    const {type, payload} = action

    switch(type){
        
        case Types.API_RESPONSE_FAIL:
            console.log(payload)
        return {}

        case Types.API_RESPONSE_SUCESS:
        return  {...state, storedContent: payload.data, highlightedContent: payload.data[0], isLoading: false}

        case Types.CHANGE_HIGHLIGHTED_CONTENT:
            let requestedContent = state.storedContent.find( content => content.id === payload?content:false)
        return  {...state, highlightedContent: requestedContent}

        case Types.SET_INFO_VISIBLITY:
            return {...state, isInfoVisible: payload}

        case Types.SET_VIDEO_URL:
            return {...state, video_url: payload}

        default:
            return state
    }

}

export default reducer

