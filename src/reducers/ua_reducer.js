const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_DATA_UA_REQUEST':
            return {
                isFetching: true,
                data: [],
                error: false
            }
        default:
            return state    
    }
} 