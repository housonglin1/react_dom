import React, { Component } from 'react'
import'./index.css'

export default class Footer extends Component {
  changeCheck=(e)=>{
    const value=e.target.checked
    this.props.totalCheck(value)
  }
  deletSelTodo= () => {
    if(window.confirm("确定要删除已选择的标签")){
      this.props.deleteTodoTotal()
    }
  }
  render() {
    const {todolist}=this.props
   const total=todolist.length
   const  selectedNum=todolist.reduce((pre,currter)=>{
    return pre+(currter.done?1:0)
   },0)
    return (
      <div className='Footer'> 
         <div >
          <input type="checkbox" onChange={this.changeCheck}  checked={ selectedNum === total && total !== 0 ? true : false } />
          <span>总共有<em>{total}</em>个，被选中了<em>{selectedNum}</em>个</span>
         </div>
         <button  style={{display:selectedNum>0?'block':"none"}} onClick={this.deletSelTodo}>删除已选择的标题</button>
      </div>
    )
  }
}
