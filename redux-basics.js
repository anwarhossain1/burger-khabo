

const redux=require('redux')
const createStore=redux.createStore;


const initialState={
    name:10
}
//reducer
const rootReducer=(state=initialState,action)=>{
    if(action.type==='NAME_ADD'){
        return{
            ...state,
            name:state.name + 1
        }
    };
    return state;
};
//store
const store=createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(()=>{
    console.log('subscription', store.getState())
})


//dispatching action
store.dispatch({type:'NAME_ADD'});
console.log(store.getState());

