const initialState = [];

export default function incomeOut(state = initialState, action) {
    switch (action.type) {
        case 'incomeOut/GET':
            return state;
        case 'incomeOut/SET':
            return [...state, action.payload];
        default:
            return state;
    }
}