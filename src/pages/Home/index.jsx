import React, { Component } from 'react'
import{Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from'./News'
import Message from'./Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='title'>Home</div>
        <div>
        <MyNavLink to='/home/news' activeClassName='newSonActive' >News</MyNavLink>
        <MyNavLink to='/home/message' activeClassName='newSonActive' >Message</MyNavLink>
        </div>
        <div>
        <Switch>
           <Route path='/home/news' component={News}/>
           <Route path='/home/message' component={Message}/>
           <Redirect to='/home/news'/>
        </Switch>
        </div>
      </div>
    )
  }
}
