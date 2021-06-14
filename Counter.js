import React,{useState} from 'react'

function Counter() {
    const [value,setValue]=useState(0);
    const [nick,setNick]=useState('');
    const Plus= (e) => {
        setValue(value+1);
    }
    const Minus = (e)=> {
        setValue(value-1);

    }
    const name =(e) => {
        setNick(e.target.value);

    }

    return (
        <div>
            <input onChange={name}></input>
            <p>현재 이름: {nick}</p>
            <p>현재 카운터 값은 {value} 입니다.</p>
            <button onClick={Plus} >+1</button>
            <button onClick={Minus}>-1</button>
        </div>
    )
}

export default Counter
