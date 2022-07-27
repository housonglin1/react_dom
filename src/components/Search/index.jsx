import React, { Component } from 'react'
import axios from 'axios' 
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search=()=>{
    const {keyword:{value:keyword}}=this
    console.log(keyword)
    axios.get(`http://localhost:3000/api/car`).then(
      response =>{
        console.log("成功了",response.data)
        PubSub.publish('jiaoyou',response)
      },
      error=>{
      }
    )
  }
  render() {
    return (
     <div className='search'>
        <input ref={c=>this.keyword=c} type="text" placeholder='请输入' />
        <button onClick={this.search} >搜索</button>
     </div>
    )
  }
}
