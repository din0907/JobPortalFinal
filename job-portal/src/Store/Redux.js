import{configureStore} from '@reduxjs/toolkit'
import { UPDATE_REGISTER_INFO,
    UPDATE_PROFILE_NAME,
    UPDATE_LOGIN_INFO,
    UPDATE_SHOW_MODAL_WINDOW
} from './ActionType';
const initialState = {
    registerInfo: {},
    profileName:'candidate',
    loginInfo:{
        
    },
    showModal:false,
}

const jobportalReducer = (state = initialState,action) => {
    switch(action.type) {
        case UPDATE_REGISTER_INFO : {
            return {
                ...state,
                registerInfo:action.payload
            }
        }
        case UPDATE_PROFILE_NAME : {
            return {
                ...state,
                profileName:action.payload
            }
        }
        case UPDATE_LOGIN_INFO : {
            return {
                ...state,
                loginInfo:action.payload
            }
        }
        case UPDATE_SHOW_MODAL_WINDOW: {
            return {
                ...state,
                showModal:action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
const store = configureStore({
    reducer:jobportalReducer
});
export default store;