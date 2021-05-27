// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import TOC from './Components/TOC'

class Subject extends Component{
  render(){
    return(
      <header>
            <h1>{this.props.title}</h1>
            {this.props.subtitle} 
        </header>
        // 이런식으로 props를 설정하여 더 효율적으로 사용할 수 있다. 
    )
  }
}


class Contents extends Component{
  render(){
    return(  <article>
      <h2>HTML</h2>
      HTML is cindy!
  </article>
);
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
        hello world
        {/* probs를 사용하면 다음처럼 사용할 수 있다. */}
        <Subject title="WEB" subtitle="this is subtitle"></Subject>
      
        <TOC></TOC>
        <Contents></Contents>
      </div>
    );
  }

}

export default App;
