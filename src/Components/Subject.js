import React, {Component} from 'react'

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
  