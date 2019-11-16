import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate
} from '../../actions/filter';
import moment from 'moment';

test('should generate set start date filter', () => {

    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type : 'SET_START_DATE_FILTER',
        startDate : moment(0)
    });

});


test('should generate set end date filter', () => {

    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type : 'SET_END_DATE_FILTER',
        endDate : moment(0)
    });
});


test('should sort by date', ()  =>  {
    
    const action = sortByDate();
    
    expect(action).toEqual({
        type : 'SET_DATE_FILTER'
    });

});


test('should sort by amount', ()  =>  {
    
    const action = sortByAmount();
    
    expect(action).toEqual({
        type : 'SET_AMOUNT_FILTER'
    });

});


test('should set text filter with value', () => {
    const text = 'test';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })

});


test('should set text filter without value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })

});