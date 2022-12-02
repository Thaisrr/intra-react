const initialState = 0;
let count = 0;
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT_BY_AMOUNT':
            return state + action.payload;
        default:
            return state;
    }
}

count = reducer(count, {type: 'INCREMENT'});
count = reducer(count, {type: 'INCREMENT_BY_AMOUNT', payload: 5});


const notes = [1, 2, 3, 4, 5];
notes.reduce((accumulator, note) => {
    return accumulator + note;
}, 0);

