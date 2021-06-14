import React ,{useState,useMemo}from 'react'
const getAverage= (numbers) => {
    console.log('평균값 계산중');
    if(numbers.length===0) return 0;
    const sum= numbers.reduce((a,b)=> a+b);
    return sum/numbers.length;

}
function Average() {
    const [number,setNumber]=useState('');
    const[list,setList]=useState([]);
    
    const onInsert=()=>{
        const nextList=list.concat( (parseInt(number)) );
        setList(nextList);
        setNumber('');
    }
    const avg= useMemo(()=> getAverage(list),[list]);
    return (
        <div>
            <input value={number} onChange={(e)=> setNumber(e.target.value)}></input>
            <button onClick={onInsert}>클릭</button>
            <ul>{list.map((value,index)=>(<li key={index}>{value} </li>))}</ul>
            <div>평균값: {avg}</div>
             //원래는 <div> 평균값:{getAverage(list)}</div> 였음
             //근데 usememo 써서 list가 변할 떄만 rendering 될 수 있도록 useMemo 사용
        </div>
    )
}

export default Average
