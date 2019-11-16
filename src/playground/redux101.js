import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:"INCREMENT",
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) =>({
    type : "DECREMENT",
    decrementBy
});

const resetCount = () => ({
    type : "RESET"
});

const setCount = ({count = 1} = {}) => ({
    type : "SET",
    count
});


// Reducers
// 1. reducers are pure functions
// 2. never change state or action

const countReducer = (state = { count : 0}, action) => {
    
    switch(action.type){

        case 'INCREMENT':
            return {count : state.count + action.incrementBy};
        case 'DECREMENT':
            return {count : state.count - action.decrementBy};
        case 'RESET':
            return {count : 0};
        case 'SET' :
            return {count :action.count}
        default: 
            return state;
    }
   
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 3}));
// store.dispatch({
//     type : 'INCREMENT',
//     incrementBy : 5
// });

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy : 2}));

store.dispatch(setCount({count : 12}));

store.dispatch(setCount());
//console.log(store.getState());
