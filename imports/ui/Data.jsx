import React, { Component, PropTypes } from 'react'

export default (props) => {
  const {firstName, lastName, uniEmail, DOB, uniAddress, course, personalEmail, mobile} = props.data // = const firstName = props.data.firstName
  return (
    <div>
      <li>
        <p>{firstName} {lastName}</p>
        <p>{DOB}</p>
        <p>{personalEmail}</p>
        <p>{uniEmail}</p>
        <p>{uniAddress}</p>
        <p>{course}</p>
        <p>{mobile}</p>
      </li>
    </div>
  )
}
