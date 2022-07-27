import React, { Component } from 'react'
import{NavLink} from 'react-router-dom'

export default class MyNavLine extends Component {
  render() {
    return (
      <div>
          <NavLink activeClassName='newActive' className='linekStyle' to='/about' {...this.props} />
      </div>
    )
  }
  }