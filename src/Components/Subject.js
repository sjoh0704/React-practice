import React, {Component} from 'react'

class Subject extends Component{
    render(){
      return(
        <header>
              <h1><a href= '/' onClick={function(e){
                // alert('a');
                // debugger;  //debugger는 유용한 기능
                // alert('b');
                // this.state.mode = 'welcome'; // state를 이렇게 바꾸는 것은 안된다!!
                e.preventDefault(); // preventDefault는 해당 태그의 디폴트 속성을 막는다. 
                this.props.onChangePage(); //

              }.bind(this)}>{this.props.title}</a></h1>
              {this.props.subtitle} 
          </header>
          // 이런식으로 props를 설정하여 더 효율적으로 사용할 수 있다. 
      )
    }
  }
  

  export default Subject