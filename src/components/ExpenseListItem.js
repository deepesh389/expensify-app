import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{numeral(amount/100).format('$0,0.00')} - {moment(createdAt).format('MMM Do, YYYY')}</p>
    </div>
);
// const mapStateToProps =(state) => {
//     return {
//         expenses: state.expenses
//     }
// };

export default connect()(ExpenseListItem);