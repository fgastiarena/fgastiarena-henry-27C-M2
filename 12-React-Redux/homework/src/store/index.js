import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore( //me está faltando la posibilidad de ver las herramientas dentro de mi navegador, pero como medan un compose lo podemos hacer
    rootReducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) // el compose es otro metodo de redux porque aveces el createStore no soporta 3 argumentos, entonces le paso el reducer, y en compose el middleware las tools para usar el resto. 

);

export default store;