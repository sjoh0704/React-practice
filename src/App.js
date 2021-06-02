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
import CreateUser from './Components/CreatUser';

function App(){
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })
  const {username, email} = inputs;
  const [users, setUsers] = useState([
          {
              id:1, username: 'aaa', email: '1234'
          },
          {
              id:2, username: 'bbb', email: '3333'
          },
          {
              id:3, username: 'ccc', email: '1234'
          }
      ]);
  
      const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
          ...inputs,
          [name]:value
        }
        );
      };


  const nextId = useRef(4);
  
  const onCreate = () => {
    const user = {
      id: nextId,
      username: username,
      email: email
    };
    setUsers([...users, user])
    console.log(nextId.current);
    nextId.current += 1;
  }

  return(
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
      <UserList users={users}></UserList>

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
