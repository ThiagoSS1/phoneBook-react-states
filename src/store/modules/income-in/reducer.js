// defino um estado inicial
// uma lista vazia 
const initialState = [];

export default function incomeIn(state = initialState, action) {
    switch (action.type) {
        case 'incomeIn/GET':
            return state;
        case 'incomeIn/SET':
            return [...state, action.payload];
        default:
            return state;
    }
}
