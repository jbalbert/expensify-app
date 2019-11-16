import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filter';
import {DateRangePicker} from 'react-dates';
import uuid from 'uuid';

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused : null
    };

    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    
    onSortChange = (e) => {
        const type = e.target.value;
        if(type === 'date'){
             this.props.sortByDate();
        } else if (type === 'amount'){
             this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <label>Filter Text : </label>
                <input 
                    type="text" defaultValue={this.props.filters.text} onChange={this.onTextChange}/>
                <label> Sort By : </label>
                <select 
                value={this.props.filters.sortBy} 
                onChange={this.onSortChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} 
                    endDate={this.props.filters.endDate} 
                    onDatesChange={this.onDatesChange} 
                    focusedInput={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId = {uuid()}
                    endDateId = {uuid()}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);