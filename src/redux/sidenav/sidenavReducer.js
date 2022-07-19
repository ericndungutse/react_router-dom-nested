const INITIAL_STATE = {
    show :false
}

const sidenavReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'SHOW_SIDE_NAV':

            return{
                ...state,
                show: !state.show,
            };

        default:
            return state;
    }
}

export default sidenavReducer