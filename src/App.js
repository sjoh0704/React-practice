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
    
    return(
      <div className="App">
        {/* probs를 사용하면 다음처럼 사용할 수 있다. */}
        <Subject title={this.state.subject.title} subtitle={this.state.subject.subtitle}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Contents></Contents>
      </div>
    );
  }

}

export default App;
