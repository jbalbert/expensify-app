import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
import uuid from  'uuid';

test('should set up remove expense action',  ()=>{

    const action = removeExpense({id : '123abc'});

    expect(action).toEqual({
        type : "REMOVE_EXPENSE",
        id : '123abc' 
    });

});

test('should set up edit expense action', () => {

    const action = editExpense('123abc', {
        amount : 1500,
        note : 'test note'
    });

    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : '123abc',
        updates : {
            amount : 1500,
            note : 'test note'
        }
    });


});


test('should set up add expense action', () => {
    
    const expenseData ={ description : 'test', amount : 1500, createdAt : 1000, note : 'test note'};
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
          ...expenseData,
          id: expect.any(String)
        }
    });

});


test('should set up add expense action with default values', () => {
    
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
          id: expect.any(String),
          description : '',
          note : '',
          amount :0,
          createdAt  :0 
        }
    });

});