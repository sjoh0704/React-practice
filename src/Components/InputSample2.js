// useRef 이용해서 특정 DOM 선택하기
import React, {useState, useRef} from 'react'
function InputSample2(){

const [inputs, setInput] = useState({
    name: '',
    nickname: ''    
});
//객체를 뽑아올때는 {}으로 뽑아온다!!!
//객체를 뽑아올때 있는 것을 가져와야 한다. 내 마음대로 변수명을 바꾸면 안된다. 
const {name, nickname} = inputs;
//inputs[name] 이런식으로 사용해도 된다. 
const onChange = (e) =>{
    //e.target은 input 태그 속성에 의존한다. 
    const {name, value} = e.target;
    setInput({
        ...inputs, // 스프레드 복사법 
        [name]:value
    });

    // 들어있는 것을 찾을때는 e.target.value를 참조한다. 
}
const nameInput = useRef(); // useRef객체 생성 
const onReset = (e) =>{
    setInput({
        name:'',
        nickname:''
    });
    nameInput.current.focus();
    // 특정 돔 선택하기

}
    return (
        <div>
            <input name='name' onChange={onChange} placeholder="이름" value={name} ref={nameInput}/>
            <input name='nickname' onChange={onChange} placeholder="닉네임" value={nickname}></input>
            <button onClick={onReset}>초기화</button>
            <div> 
            <b>value: </b>
            {name}({nickname})
            </div>
            
        </div>
    );
}

export default InputSample2;