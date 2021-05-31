import React, { useState } from 'react'
function Counter(){
    const [number, setNumber] = useState(0); // 파이썬 배열 할당처럼 
    //number는 사용할 것, setNumber는 number를 바꿔줄 함수 
    // useState(0)을 통해 기본 number = 0 
    const increase = () => {  // 화살표 함수 괄호에는 매개변수가 들어가 
        // setNumber(number-1);
        setNumber(n => n - 1); // 함수형 쓰는 법은 나중에 배울것이다. 
    };
    const decrease = () => {
        setNumber(number+1);
    };
    

    return (
        // 부모 인자가 필요하다고 한다. 
        <div> 
            <h1>{number}</h1>
            <button onClick={increase}>-1</button>
            <button onClick={decrease}>+1</button>
        </div>

    );
}

export default Counter