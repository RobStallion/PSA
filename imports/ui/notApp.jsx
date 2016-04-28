import React, { Component } from 'react'

export default class notApp extends Component {
  render () {
    return (
      <div>
        <h1>hey bro</h1>
        {this.props.children}
      </div>
    )
  }
}
