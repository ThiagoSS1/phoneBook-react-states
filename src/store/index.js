import { persistStore } from "redux-persist";
import { createStore } from "redux";

import persistedReducer from './persistReducer';
import rootReducer from './modules/rootReducer';

// cria o store
const store = createStore(persistedReducer(rootReducer));
// cria o persistor para salvar e gerenciar o local storage
const persistor = persistStore(store);

export { store, persistor };