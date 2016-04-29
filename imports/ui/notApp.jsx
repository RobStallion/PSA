import React, { Component } from 'react'

export default class notApp extends Component {
  render () {
    return (
      <div>
        <img src={'logo.jpg'}/>
        {this.props.children}
      </div>
    )
  }
}
