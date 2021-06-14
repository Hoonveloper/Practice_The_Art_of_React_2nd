import React ,{useReducer}from 'react'
function reducer(state,action){
    return {
        ...state,
        [action.name]:action.value
    };
}
function Info() {
    const [state,dispatch]=useReducer(reducer,{nick:'',name:''});
    const {name,nick}=state;
    const onChange= (e)=> {
        dispatch(e.target);
    }
    return (
        <div>
            <input name="name" value ={name}onChange={onChange}/>
            <input name="nick" value ={nick}onChange={onChange}/>
            <div>이름:{name}</div>
            <div>별명:{nick}</div>
        </div>
    )
}

export default Info
