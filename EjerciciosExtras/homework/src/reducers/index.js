import { GET_ALL_USERS, GET_ALL_POSTS, GET_ALL_USERS_POST, GET_ALL_COMMENTS_POST } from "../actions"; //son los types de las fn, las actios se llaman con minus

const initialState = {
    users: [],
    posts: [],
    userPosts: [],
    commentsPost: [],
};

export default function rootReducer(state = initialState, action) { // tiene un state que dentro tiene un obj con un monton de elemntos
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state, //nos traemos la copia del estado, del obj
                users: action.payload //modifica la props users, y le dice que sea el payload de la action. Busco la action que tenga el type GET_..., me fijo cual es su payload(la rta del endpoint),es un array con un monton de objs users. Acá no necesito concatenar, por eso pongo de una action.payload, necesito que pise la rta 
            };
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case GET_ALL_USERS_POST:
            return {
                ...state,
                userPosts: action.payload //de nuevo solo pongoaction.payload pq quiero pisar valores, no me interesa concatenar los valores de los posts.
                    //userPosts: state.userPost.concat(action.payload) / acá no piso la info, la concateno
                    //userPosts: [...state.userPosts, ...action.payload] / acá no piso la info, la concateno  / el payload es un array de objs.
            };
        case GET_ALL_COMMENTS_POST:
            return {
                ...state,
                commentsPost: action.payload
            }
        default:
            return state; //retorna el state inicial
    }
}