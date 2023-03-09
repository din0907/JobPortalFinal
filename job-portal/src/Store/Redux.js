import{configureStore} from '@reduxjs/toolkit'
import { UPDATE_REGISTER_INFO,
    UPDATE_PROFILE_NAME,
    UPDATE_LOGIN_INFO,
    UPDATE_SHOW_MODAL_WINDOW,
    UPDATE_JOBS
} from './ActionType';
const initialState = {
    registerInfo: {},
    profileName:'candidate',
    token: '',
    showModal:false,
    jobs:[]
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
                token:action.payload
            }
        }
        case UPDATE_SHOW_MODAL_WINDOW: {
            return {
                ...state,
                showModal:action.payload
            }
        }
        case UPDATE_JOBS: {
            return {
                ...state,
                jobs:action.payload
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