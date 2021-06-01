// 여러개의 인풋 받기 
import React, {useState} from 'react'
function InputSample(){

const [text, setText] = useState('');
const onChange = (e) =>{
    setText(e.target.value);
    // 들어있는 것을 찾을때는 e.target.value를 참조한다. 
}
const onReset = (e) =>{
    setText('');
}

    return (
        <div>
            {/* value=text를 해주어야 초기화를 눌렀을 때 input도 함께 초기화된다.  */}
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            
            {/* div를 쓰면 문단 바꾸기가 된다. */}
            <div> 
            {/* b를 쓰면 문단 바꾸기가 안됌 */}
            <b>value: </b>
            {text}
            </div>
            
        </div>
    );
}

export default InputSample;