import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false }
  changeChedk = (id) => {
    return ((e) => {
      this.props.updataTodo(id, e.target.checked)
    })
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }
  deleItem = (id) => {
    return () => {
      if (window.confirm("你确定要删除这个标题吗")) {
        this.props.deleteTodo(id)
      }
    }
  }
  render() {
    const { id, name, done } = this.props;
    return (
      <div style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} className='item'>
        <div>
          <input type="checkbox" checked={done} onChange={this.changeChedk(id)} />
          <span>{name}</span>
        </div>
        <button className='btn-danger' style={{ display: this.state.mouse ? "block" : 'none' }} onClick={this.deleItem(id)} >删除</button>
      </div>
    )
  }
}
