import React from 'react'
// 배열 렌더링하기 


// 이렇게 함수를 두개 이상 선언해도 된다. 
// 마찬가지로 함수를 사용할때는 태그로 사용한다.!!! 
function Display({user, onRemove, onToggle}){
    const {username, email, id, active} = user;
    return(
    <div>
        <b onClick ={()=> onToggle(id)}
        style={ //객체를 넣어주어야 하므로
            {
                color: active ? 'red': 'blue',
                cursor:'pointer',
            }
        }>
        {username}
        </b>
        <b>/{email}</b>
        <button onClick={()=>{
            onRemove(user.id);
        }}>
        삭제</button>

    </div>
    );
}

// 배열을 렌더링할때는 map을 사용한다.
// key를 따로 넣어주어야 하며 
// key가 없을때는 다음처럼 index로 넣어준다. 
// map안에서 화살표함수를 이용하며 n은 원소 하나를 의미한다. 
function UserList({users, onRemove, onToggle}){

    return(
    <div>
        
        {users.map(
            (user, index) => <Display onRemove={onRemove} user={user} key={index} onToggle={onToggle}></Display>
            )}
    </div>
    );
}

export default UserList;