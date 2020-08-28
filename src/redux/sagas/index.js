import {put, all, takeLatest, call} from 'redux-saga/effects'
import axios from 'axios'
import Types from '../action/types'

export function* get_content(){
    try{
        let response = yield call(axios.get, ['http://localhost:80/api/content'])
        yield put({type: Types.API_RESPONSE_SUCESS, payload: response})
    } catch ( error ) {
        yield put({type: Types.API_RESPONSE_FAIL, payload: error})
    }
}

export function* watcher(){
    yield takeLatest(Types.MAKE_API_CALL, get_content)
}

export default function* rootSaga(){
    yield all ( [
        watcher()
    ])
}