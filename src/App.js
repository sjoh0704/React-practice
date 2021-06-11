// import logo from './logo.svg';
import './App.css';
import React, {Component, useRef, useState} from 'react'
import TOC from './Components/TOC'
import Contents from './Components/Contents'
import Subject from './Components/Subject'
import Hello from './Components/Hello'
import Wrapper from './Components/Wrapper';
import Counter from './Components/Counter';
import InputSample from './Components/InputSample';
import InputSample2 from './Components/InputSample2';
import UserList from './Components/UserList';
import CreateUser from './Components/CreateUser';

function App(){
  const [inputs, setInputs] = useState({
    username: '',
    email:''
  });
  const {email, username} = inputs;
  const [users, setUser] = useState([
          {
              id:1, username: 'aaa', email: '1234'
          },
          {
              id:2, username: 'bbb', email: '1234'
          },
          {
              id:3, username: 'ccc', email: '1234'
          }
      ]);
  
  const nextId = useRef(4);  // 렌더링 필요없이 value를 유지하고 싶을때 이런식으로 사용 
  const onCreate = () => {
    
    nextId.current += 1;
    const user = {
      id: nextId.current,
      username: username,
      email: email
    };
    setUser([...users, user]);   // 배열에 항목에 추가할때는 이렇게 
    console.log(nextId.current);
    console.log(username);
    console.log(email);
    
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    
    setInputs({
      ...inputs,
      [name]:value
    });
  }

  const reset = () =>{
    setInputs({
      username:'',
      email:''
    })
  }
  const onRemove = id =>{
    setUser(users.filter(user => user.id!=id));  // users배열안에 있는 user라는 항목들에 대해서 

  }
  return(
    <div>
      <CreateUser username={username} email= {email} onCreate={onCreate} onChange={onChange}></CreateUser>
      <UserList users={users} onRemove={onRemove}></UserList> 
      <button onClick={function(){
        reset();
      }}>초기화</button>
    </div>
    );
}


// class App extends Component{
  
//   constructor(props){
//     super(props);
//       this.state = {
//         mode: 'read',
//         subject: {title: 'WEB', subtitle: 'World Wide Web'},
//         welcome: {title: 'welcome', desc: 'Hello, react!'},
//         contents: [
//           {id: 1, title: 'JavaScript', desc: 'aaaaaaaaaaaa'},
//           {id: 2, title: 'html', desc: 'bbbbbbbbbbbbb'},
//           {id: 3, title: 'css', desc: 'cccccccccccccc'}
//         ]
//       }
//   }
//   render(){
//     const users = [
//       {
//           id:1, username: 'aaa', passwd: '1234'
//       },
//       {
//           id:2, username: 'bbb', passwd: '1234'
//       },
//       {
//           id:3, username: 'ccc', passwd: '1234'
//       }
//   ];
 


//     // var _title, _desc = null;
//     // if(this.state.mode==='read'){
//     //   _title = this.state.subject.title;
//     //   _desc = this.state.subject.subtitle;
//     // }
//     // else if(this.state.mode === 'welcome'){
//     //   _title = this.state.welcome.title;
//     //   _desc = this.state.welcome.desc;
//     // }

//     return(

//       <div className="App">
//           <UserList users={users}></UserList>
//           <button onClick={function(){}}></button>
//           {/* <InputSample2></InputSample2> */}
//           {/* <InputSample></InputSample> */}
//           {/* <Counter></Counter> */}


//           {/* <Wrapper>

//           <Hello name='ppanda' isSpecial={true} ></Hello>
//           <Hello color='red'></Hello>
//           </Wrapper>
//         <Subject title={_title} 
//         subtitle={_desc}
//         onChangePage = {function(e){  // 이벤트 생성하기 
//           this.setState({
//             mode:'welcome'
//           });
//         }.bind(this)}
//         ></Subject>
  
//         <TOC data={this.state.contents}></TOC>
//         <Contents></Contents> */}
//       </div>
//     );
//   }

// }

export default App;
