import store from '../../store'

const ActionCreator = (type, payload) => {
    store.dispatch({type, payload})
    return {type, payload}
}

export default ActionCreator