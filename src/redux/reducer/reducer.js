// Reducer take two parameter. First one is initial State, ans the second one is action.
// const initailState = {
//     number: 0
// };
// export const simpleReducer = (state = initailState, action) => {
//     switch(action.type) {
//         case 'INCREMENT_NUMBER' :
//             return {
//                 ...state,
//                 number: state.number + 1
//             }  
//         case 'DECREMENT_NUMBER': 
//             return {
//                 ...state,
//                 number: state.number - 1
//             }
//         default: 
//             return state
//     }
// }

const initailState = {
    data: [],
    singleData: []
}

export const loadDataReducer = (state = initailState, action) => {
    switch(action.type) {
        case 'LOAD_DATA': 
            return {
                ...state,
                data: action.payload
            }
        case 'LOAD_SINGLE_DATA':
            return {
                ...state,
                singleData: action.payload
            }
        default: 
            return state
    }
}

