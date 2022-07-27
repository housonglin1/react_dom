// import logo from './logo.svg';
// import './App.css';
import React,{Component} from 'react';
import Hearder from './components/Hearder'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
// 创建并暴露App组件
export default class App extends Component{
  state={
    todolist:[
      {id:"001",name:'学习',done:false},
      {id:"002",name:'睡觉',done:true},
      {id:"003",name:'游泳',done:false},
      {id:"004",name:'逛街',done:true},
    ]
  }
  addTodo=(obj)=>{
    const{todolist}=this.state
      const newTodolist=[
        obj,...todolist
      ]
     this.setState({todolist:newTodolist})
  }
  updataTodo=(id,done)=>{
       const{todolist}=this.state
       const newTodolist=todolist.map(obj => {
         if(obj.id===id)return {...obj,done}
         else return obj
       })
       this.setState({todolist:newTodolist})
  }
  deleteTodo=(id)=>{
    const{todolist}=this.state
    const newTodolist=todolist.filter(obj=>{
      return obj.id!==id
    })
    this.setState({todolist:newTodolist})
  }
  totalCheck=(done)=>{ 
    const{todolist}=this.state
    const newTodolist=todolist.map(obj => {
     return {...obj,done}
    })
    this.setState({todolist:newTodolist})
     
  }
  deleteTodoTotal=()=>{
    const{todolist}=this.state
    const newTodolist=todolist.filter(obj=>{
      return !obj.done
    })
    this.setState({todolist:newTodolist})
  }
  render(){
    const {todolist}=this.state
    return(
      <div>
        <div className='Tolist'>
        <Hearder addTodo={this.addTodo}/>
        <List todolist={todolist}  updataTodo={this.updataTodo} deleteTodo={this.deleteTodo} />
        <Footer todolist={todolist} totalCheck={this.totalCheck} deleteTodoTotal={this.deleteTodoTotal}/>
        </div>
      </div>
    )
  }
}

