// 함수로 사용하기 
import React from 'react'

function Hello({color, name, isSpecial}){
    return (<div style={{color}}>
        <b>{isSpecial ? "special mode": "normal mode"}</b>
        {/* <b>{isSpecial&&"*****"}</b> */}
        {/* 삼항 연산자를 쓰지 않고도 위처럼 표현 가능! */}
        안녕하세요!{name}
        {null}
        {/* 이외에도 false, undefined 다 보이지 않는다. */}



    </div>);

}

//default 설정하기 
Hello.defaultProps = {
    name:'이름 없음',
    color: 'blue'
}

export default Hello