// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import TOC from './Components/TOC'
import Contents from './Components/Contents'
import Subject from './Components/Subject'

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
        {/* probs를 사용하면 다음처럼 사용할 수 있다. */}
        <Subject title={_title} 
        subtitle={_desc}
        onChangePage = {function(e){  // 이벤트 생성하기 
          this.setState({
            mode:'welcome'
          });
        }.bind(this)}
        ></Subject>
        
        {/* <header>
              <h1><a href= '/' onClick={function(e){
                this.setState({
                    mode:'welcome'
                });
                e.preventDefault();  // preventDefault를 안해주면 construct가 실행되어서 다시 mode가 read로 바뀜
              }.bind(this)}>{_title}</a></h1>
              {_desc} 
        </header> */}

        <TOC data={this.state.contents}></TOC>
        <Contents></Contents>
      </div>
    );
  }

}

export default App;
