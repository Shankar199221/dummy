
const initialState ={
    Data:[]
}

const MainReducer =(state=initialState,action)=>{
    if(action.type === "GET_DATA"){
        state = {...state,Data:action.payload}
    }
   return (
    state
   )
}
export default MainReducer