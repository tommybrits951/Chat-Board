import {configureStore} from "@reduxjs/toolkit"
import formReducer from '../components/user/formSlice.cjs'
const store = configureStore({
    reducer: {
        forms: formReducer
    }
})
export default store;