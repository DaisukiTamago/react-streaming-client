import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducer'
import rootSaga from '../sagas'

const initialState = {
    highlightedContent: {
        overview: ''
    },
    isLoading: true,
    storedContent: [],
    hasHighlightedContent: false,
    isInfoVisible: false,
    video_url: 'http://localhost/api/content/watch/0000/1/1'
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, initialState ,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
