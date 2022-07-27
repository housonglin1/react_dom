import React, { Component } from 'react'
// import qs from 'qs'
const DatailData = [
  { id: '1', content: "我爱中国" },
  { id: '2', content: "我爱中华民族" },
  { id: '3', content: "我们是龙的传人" },
]
export default class Details extends Component {
  render() {
    // console.log(this)
    //  params 传参的接收
    // const {id,title}=this.props.match.params

    // search传参的接收
    // const {search}=this.props.location
    // const {id,title}=qs.parse(search.slice(1))

    // state传参的接收
    const { id, title } = this.props.location.state 

    const findResult = DatailData.find((findData) => {
      return findData.id === id
    }) 


    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
