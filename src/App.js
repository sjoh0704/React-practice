// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import TOC from './Components/TOC'
import Contents from './Components/Contents'
import Subject from './Components/Subject'

class App extends Component{
  render(){
    return(
      <div className="App">
        hello world
        {/* probs를 사용하면 다음처럼 사용할 수 있다. */}
        <Subject title="WEB" subtitle="this is subtitle"></Subject>
      
        <TOC title='this is TOC'></TOC>
        <Contents></Contents>
      </div>
    );
  }

}

export default App;
