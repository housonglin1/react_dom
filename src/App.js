// import logo from './logo.svg';
// import './App.css';
import React,{Component} from 'react';
import{Switch,Route,Redirect} from 'react-router-dom'
 import{Button} from 'antd'
import 'antd/dist/antd.css'
import MyNavLine from './components/MyNavLink';
import About from './pages/About'
import Home from './pages/Home'

import './App.css'
// 创建并暴露App组件
export default class App extends Component{
  
  render(){

    return(
      <div className='App'>
        <div className='left_box'>
        <MyNavLine to='/home' >Home</MyNavLine>
        <MyNavLine to='/about'>About</MyNavLine>
        </div>
        <Button type="primary">Primary Button</Button>
        <div className='right_box'>
          <Switch>
           <Route path='/home' component={Home}/>
           <Route path='/about' component={About}/>
           <Redirect to='/home'/>
          </Switch>
        </div>
          
      </div>
    )
  }
}

