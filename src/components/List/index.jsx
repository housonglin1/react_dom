import React, { Component } from 'react'
import './index'
import Item from '../../components/Item'

export default class List extends Component {
  render() {
    const { todolist,updataTodo,deleteTodo } = this.props
    return (
     <div>
        {
          todolist.map(todoobj=>{
            return <Item key={todoobj.id} {...todoobj} updataTodo={updataTodo} deleteTodo={deleteTodo}/>
          })
        }
     </div>
    )
  }
}
