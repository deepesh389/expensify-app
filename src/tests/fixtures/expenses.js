import moment from 'moment';

export default [{
    id: '1',
    description: 'gas',
    note: '',
    amount: 800,
    createdAt: 0
}, {
    id: '2',
    description: 'water',
    note: '',
    amount: 500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'internet',
    note: '',
    amount: 700,
    createdAt: moment(0).add(4, 'days').valueOf()
}]