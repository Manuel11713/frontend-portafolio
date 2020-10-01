import {createStore} from 'redux';

const initialState = {
    sideBarActive:false
}

const reducer = (state=initialState,action)=>{
    if(action.type==='SIDE_BAR'){
        return{
            ...state,
            sideBarActive:action.value
        }
    }
    return state;
}

export default createStore(reducer);

