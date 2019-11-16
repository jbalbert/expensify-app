import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note :  props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error : '' 
        };
    }

  
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ( {description}) );
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        
        const amount = e.target.value;
        
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }

    }

    onDateChange = (createdAt) => {

        if(createdAt){
            this.setState(() => ({createdAt}));
        }
       
    }

    onFocusedChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error : 'Please Provide Description or Amount.'}));
           
        } else {
            this.setState(() => ({error : ''}));
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount, 10) * 100,
                createdAt : moment(this.state.createdAt).valueOf(),
                note : this.state.note
             });
        }

    }
    render() {
        return (
            <div>

               { this.state.error && <p> {this.state.error} </p> }
               <form onSubmit={this.onSubmit} >
                <input 
                type='text' 
                placeholder='Description' 
                value={this.state.description} 
                onChange={this.onDescriptionChange}
                autoFocus /> <br/> <br/>
                <input 
                type='text' 
                placeholder='Amount'
                value ={this.state.amount}
                onChange={this.onAmountChange}
                /> <br/> <br/>
                <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusedChange}
                    numberOfMonths = {1}
                    isOutsideRange = {(day) => false}
                />
                <br/> <br/>
                <textarea placeholder='Add a note for your expense (optional)'
                    value={this.state.note}
                    onChange={this.onNoteChange}
                > 
                </textarea> <br/> <br/>
                <button> Add Expense </button>
               </form>
            </div>
        );  

    }

}