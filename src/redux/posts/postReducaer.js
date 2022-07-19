const INITIAL_STATE = {
    isLoading :true,
    posts: null,
    errMsg: null
}

const postsReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'POSTS_LOADED':
            return{
                ...state,
                isLoading: false,
                posts: action.payload
            };
        case 'ERROR':
            return{
                ...state,
                isLoading: false,
                errMsg: action.payload
            }

        default:
            return state;
    }
}

export default postsReducer