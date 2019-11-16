import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
// import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filter';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


const store = configureStore();

const appRoot = document.getElementById('app');
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, appRoot)






















// // import './util.js';
// // this is to import a default export
// import subtract,{ add, square } from './util.js';
// import isSenior,{isAdult,canDrink} from './person';


// console.log(add(1,2));
// console.log(square(2));
// console.log(subtract(12,2));

// console.log(isAdult(10));
// console.log(canDrink(40));
// console.log(isSenior(60));

// console.log('app.js is running!..');