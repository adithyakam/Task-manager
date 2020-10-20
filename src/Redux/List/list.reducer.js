import data from '../../DataList'
import {addItems} from './list.utils'

const initialState={
    data:data,
}


const listReducer=(state=initialState,action)=>{
    switch (action.type) {
        case data.ADD_LIST:
            return{
                ...state,
                data:addItems(state.data,action),
            }
          
    
        default:return state
      
    }
}

export default listReducer