// components 쪼개기 

import React, {Component} from 'react'
class TOC extends Component{
    render(){

        // for문을 이용하여 data라는 리스트를 받아 가공후 다시 뿌려주기 
        var data = this.props.data;
        var list = [];
        for(var i =0; i < data.length; i++){
            list.push(<li key={data[i].id}><a href={"/contents/" + data[i].id}>{data[i].title}</a></li>)
            // 이렇게 자동으로 뿌려줄 때는 key를 필요로 한다. 
        }
        return (     
        <nav>
            <ul>
              {list}
            </ul>
        </nav>)
      
    }
  }
  

  export default TOC 