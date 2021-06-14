// export const simpleAction = payload => {
//     return {
//         type: 'INCREMENT_NUMBER',
//         payload: payload
//     }
// }

// export const decrementAction = () => {
//     return {
//         type: 'DECREMENT_NUMBER',
//     }
// }

// const sum = numb => {
//     return sum * 2
// }

// sum()

export const loadDataAction = () => {
    return async(dispatch, getState) => {

    const res = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
 
    dispatch({
        type: 'LOAD_DATA',
        payload: data
    })
}}

export const loadSingleData = payload => async(dispatch) => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${payload}`)
    const data = await res.json();

    dispatch({
        type: 'LOAD_SINGLE_DATA',
        payload: data
    })
}