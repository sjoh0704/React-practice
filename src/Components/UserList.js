import React from 'react'
// 배열 렌더링하기 
const users = [
    {
        id:1,
        username: 'aaa',
        passwd: '1234'
    },
    {
        id:2,
        username: 'bbb',
        passwd: '1234'
    },
    {
        id:3,
        username: 'ccc',
        passwd: '1234'
    }
];


// 이렇게 함수를 두개 이상 선언해도 된다. 
// 마찬가지로 함수를 사용할때는 태그로 사용한다.!!! 
function User({user}){
    return(
    <div>
        <b>{user.username}/{user.passwd}</b>
    </div>
    );
}

// 배열을 렌더링할때는 map을 사용한다.
// key를 따로 넣어주어야 하며 
// key가 없을때는 다음처럼 index로 넣어준다. 
// map안에서 화살표함수를 이용하며 n은 원소 하나를 의미한다. 
function UserList(){

    return(
    <div>
        
        {users.map(
            (n, index)=> <User user={n} key={index}></User>
            )}
    </div>
    );
}

export default UserList;