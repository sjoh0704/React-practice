import React, {Component} from 'react'
class Contents extends Component{
    render(){
      return(  <article>
        <h2>{this.props.title}</h2>
        {this.props.subtitle}
    </article>
  );
    }
  }
  

  export default Contents