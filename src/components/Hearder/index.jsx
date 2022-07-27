import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import'./index.css'

export default class Hearder extends Component {
  changeTodo=(e)=>{
    const {target,keyCode}=e
    if(keyCode!==13) return 
    if(target.value.trim()===''){
      alert('输入不能为空')
      return
    }
    const todoObj={id:nanoid(),name:target.value,dpne:false}
    this.props.addTodo(todoObj)
    target.value=''
  }
  render() {
    return (
      <div className='Hearder'>
        <input type="text"  placeholder='按回车键可以添加数据' onKeyUp={this.changeTodo} />
      </div>
    )
  }
}
