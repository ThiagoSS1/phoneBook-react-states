import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// crio o persisted para armazenar os dados no local storage
export default (reducers) => {
    const persistedReducer = persistReducer({
        //chave unica
        key: 'money-control',
        //tipo de armazenamento ( local storage )
        storage,
        // lista quais reducers serão persistidos
        whitelist: ['incomeIn']
    }, reducers);

    return persistedReducer;
}