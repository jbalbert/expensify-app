import React from 'react';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt, note}) => (
    <div>
        <br/> <br/> 
        <div> Expense ID : <Link to={`/edit/${id}`}> {id} </Link> </div> <br/>
        <div> Description : {description}  </div>  <br/>
        <div> Amount : {amount}  </div>  <br/>
        <div> Note : {note}  </div>  <br/>
        <div> CreatedAt : {createdAt}  </div> <br/> 
    </div>
);


//export default connect()(ExpenseListItem);

export default ExpenseListItem ;