import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state). toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});
test('should remove expense by id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '5',
        description: 'Recharge',
        note: '',
        amount: 1000,
        createdAt: 20000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 1220;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[1].amount).toBe(amount)
});
test('should not edit an expense if id not found', () => {
    const amount = 1220;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses)
});