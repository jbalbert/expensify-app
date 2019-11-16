import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';
import moment  from 'moment';
import 'react-dates/initialize';

let setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate, history, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    history = {push : jest.fn()};
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate} 
        sortByAmount={sortByAmount} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        history={history}/>);
});

test('should render expense list filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data', () => {
    wrapper.setProps({
       filters: altfilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {

    const value = 'moving';
    wrapper.find('input').simulate('change', {
        target :{
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {

    wrapper.setProps({
        filters: altfilters
    });

    const value = 'date';

    wrapper.find('select').simulate('change', {
        target :{
            value
        }
    });
    expect(sortByDate).toHaveBeenLastCalledWith();

});

test('should handle sort by amount', () => {

    const value = 'amount';

    wrapper.find('select').simulate('change', {
        target :{
            value
        }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});


test('should handle date change', () => {

    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate,
        endDate
    });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


test('should handle focus change', () => {

    const calendarFocused = 'endDate';

    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused
    );

    expect(wrapper.state('calendarFocused')).toBe( calendarFocused);
});


