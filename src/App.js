// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import TOC from './Components/TOC'
import Contents from './Components/Contents'
import Subject from './Components/Subject'
import Hello from './Components/Hello'
import Wrapper from './Components/Wrapper';
import Counter from './Components/Counter';

class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        mode: 'read',
        subject: {title: 'WEB', subtitle: 'World Wide Web'},
        welcome: {title: 'welcome', desc: 'Hello, react!'},
        contents: [
          {id: 1, title: 'JavaScript', desc: 'aaaaaaaaaaaa'},
          {id: 2, title: 'html', desc: 'bbbbbbbbbbbbb'},
          {id: 3, title: 'css', desc: 'cccccccccccccc'}
        ]
      }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode==='read'){
      _title = this.state.subject.title;
      _desc = this.state.subject.subtitle;
    }
    else if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }

    return(

      <div className="App">

          <Counter></Counter>


          {/* <Wrapper>

          <Hello name='ppanda' isSpecial={true} ></Hello>
          <Hello color='red'></Hello>
          </Wrapper>
        <Subject title={_title} 
        subtitle={_desc}
        onChangePage = {function(e){  // 이벤트 생성하기 
          this.setState({
            mode:'welcome'
          });
        }.bind(this)}
        ></Subject>
  
        <TOC data={this.state.contents}></TOC>
        <Contents></Contents> */}
      </div>
    );
  }

}

export default App;
