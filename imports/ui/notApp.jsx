import React, { Component } from 'react'

export default class notApp extends Component {
  render () {
    return (
      <div>
        <img src='../assets/logo.jpg'/>
        {this.props.children}
      </div>
    )
  }
}
