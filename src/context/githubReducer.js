const githubReducer = (state,action) =>{
    switch(action.type){
        case "SEARCH_USERS":
            return{
                ...state,
                users: action.payload,
                loading: false,

            }
        case "SET_LOADIG":
            return{
                ...state,
                loading: true,

            }
        case "CLEAR_USERS":
            return{
                ...state,
                user: [],
                loading: false
            }
        default:
            return state
    }
}

export default githubReducer