import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counterReduxDemo/CounterSlice';
import calculationReducer from './components/info/squares/square2/square2Slice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        calculations: calculationReducer
    }
})