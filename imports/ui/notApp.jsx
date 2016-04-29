import React, { Component } from 'react'

export default class notApp extends Component {
  render () {
    return (
      <div>
        <img className='logo' src={'http://www.cwmt.org.uk/wp-content/uploads/2014/05/student-minds-logo.jpg'} alt='logo'/>
        {this.props.children}
      </div>
    )
  }
}
