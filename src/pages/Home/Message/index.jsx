import React, { Component } from 'react'
import Details from './Details'
import { Link, Route } from 'react-router-dom'
import './index.css'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "1", title: "消息1" },
      { id: "2", title: "消息2" },
      { id: "3", title: "消息3" }
    ],
  }
  reolaceShow=(id,title)=>{
    // replace跳转+携带params参数
    // this.props.history.replace(`/home/message/details/${id}/${title}`)

    // replace跳转+携带search参数
    // this.props.history.replace(`/home/message/details?id=${id}&title=${title}`)

    // replace跳转+携带state参数
    this.props.history.replace(`/home/message/details`,{id,title})



  }
  pusuShow(id,title){
    return ()=>{
    // push跳转+携带params参数
      // this.props.history.push(`/home/message/details/${id}/${title}`)

    // push跳转+携带search参数
    // this.props.history.push(`/home/message/details?id=${id}&title=${title}`)


    // push跳转+携带state参数

    this.props.history.push(`/home/message/details`,{id,title})


    }

  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map((obj) => {
              return (
                <li key={obj.id}>
                  {/* params的传参 */}
                  {/* <Link to={`/home/message/details/${obj.id}/${obj.title}`}>{obj.title}</Link>

                 &nbsp;&nbsp;<button onClick={this.pusuShow(obj.id,obj.title)} >push查看</button>
                 &nbsp;&nbsp; <button onClick={()=>this.reolaceShow(obj.id,obj.title)}>replace查看</button> */}


                  {/* search的传参 */}
                  {/* <Link to={`/home/message/details?id=${obj.id}&title=${obj.title}`}>{obj.title}</Link>
                  &nbsp;&nbsp;<button onClick={this.pusuShow(obj.id,obj.title)} >push查看</button>
                 &nbsp;&nbsp; <button onClick={()=>this.reolaceShow(obj.id,obj.title)}>replace查看</button>  */}

                  {/* state的传参 */}
                  <Link to={{pathname:'/home/message/details',state:{id:obj.id,title:obj.title}}}>{obj.title}</Link>
                  &nbsp;&nbsp;<button onClick={this.pusuShow(obj.id,obj.title)} >push查看</button>
                  &nbsp;&nbsp; <button onClick={()=>this.reolaceShow(obj.id,obj.title)}>replace查看</button> 

                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* params的传参(需要声明接受,其余传参方式不需要声明) */}
        {/* <Route path='/home/message/details/:id/:title' component={Details} /> */}

        {/* search的传参 */}
        <Route path='/home/message/details' component={Details} />

          {/* state的传参 */}
          {/* <Route path='/home/message/details' component={Details} /> */}
      </div>
    )
  }
}
