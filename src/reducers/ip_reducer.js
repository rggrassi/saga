const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_DATA_REQUEST':
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case 'LOAD_DATA_SUCCESS':
            return {
                isFetching: false,
                data: action.payload,
                error: false
            }
        case 'LOAD_DATA_FAILURE':
            return {
                isFetching: false,
                data: [],
                error: true
            }
        default:
            return state    
    }
} 