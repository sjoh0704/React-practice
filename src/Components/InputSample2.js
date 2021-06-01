import React, {useState} from 'react'
function InputSample2(){

const [inputs, setInput] = useState({
    name: '',
    nickname: ''    
});
//객체를 뽑아올때는 {}으로 뽑아온다!!!
//객체를 뽑아올때 있는 것을 가져와야 한다. 내 마음대로 변수명을 바꾸면 안된다. 
const {name, nickname} = inputs;
const onChange = (e) =>{
    //e.target은 input 태그 속성에 의존한다. 
    const {name, value} = e.target;
    setInput({
        ...inputs,
        [name]:value
    });

    // 들어있는 것을 찾을때는 e.target.value를 참조한다. 
}
const onReset = (e) =>{
    setInput({
        name:'',
        nickname:''
    })

}
    return (
        <div>
            <input name='name' onChange={onChange} placeholder="이름" value={name}/>
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