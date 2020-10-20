import listTypes from './list.types'

export const addist=item=>({
    type:listTypes.ADD_LIST,
    payload: item,
})