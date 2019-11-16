import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should setup default filter values', () =>{
    
    const state  = filtersReducer(undefined, {type : '@@INIT'});
    
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')    
    });

});

test('should set sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SET_AMOUNT_FILTER'});
    expect(state.sortBy).toBe('amount');
});


test('should set sort by date', () => {
    
    const currentState = {
        text : '',
        startDate : undefined,
        endDate : undefined,
        sort : 'amount'
    };

    const action = { type: 'SET_DATE_FILTER'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');

});


test('should filter by text', () => {
    
    const text = 'test';
    const action = { type: 'SET_TEXT_FILTER', text};
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
    
});



test('should filter by start date', () => {
    
    const startDate = moment().startOf('month');
    const action = { type: 'SET_START_DATE_FILTER', startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
    
});


test('should filter by start date', () => {
    const endDate = moment().endOf('month');
    const action = { type: 'SET_END_DATE_FILTER', endDate};
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
    
});