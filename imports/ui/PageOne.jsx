import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap'
import { StorePageOneData } from '../api/sections.js';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// Task component - represents a single todo item
export default class PageOne extends Component {

  handleSubmit() {

    // Find the text field via React ref
    const firstName = ReactDOM.findDOMNode(this.refs.firstName).value.trim();
    const lastName = ReactDOM.findDOMNode(this.refs.lastName).value.trim();
    const gender = ReactDOM.findDOMNode(this.refs.gender).value.trim();
    let otherGender = ReactDOM.findDOMNode(this.refs.otherGender).value.trim();
    otherGender = (otherGender) ? otherGender : 'empty'
    const DOB = ReactDOM.findDOMNode(this.refs.DOB).value.trim();
    const uniEmail = ReactDOM.findDOMNode(this.refs.uniEmail).value.trim();
    const personalEmail = ReactDOM.findDOMNode(this.refs.personalEmail).value.trim();
    const mobile = ReactDOM.findDOMNode(this.refs.mobile).value.trim();
    const uniName = ReactDOM.findDOMNode(this.refs.uniName).value.trim();
    const uniAddress = ReactDOM.findDOMNode(this.refs.uniAddress).value.trim();
    const homeAddress = ReactDOM.findDOMNode(this.refs.homeAddress).value.trim();
    const course = ReactDOM.findDOMNode(this.refs.course).value.trim();

    StorePageOneData.insert({
      firstName,
      lastName,
      gender,
      otherGender,
      DOB,
      uniEmail,
      personalEmail,
      mobile,
      uniName,
      uniAddress,
      homeAddress,
      course,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });
    this.props.history.push('/pagetwo')
  }

  render() {
    return (
      <div className='PageOne'>
        <AccountsUIWrapper />
        <h1 className='headings'>Peer Support Facilitator Recruitment</h1>
          <p>There are 5 pages to this application form - please allow yourself sufficient time to complete the application.</p>
          <p>* Required</p>
          <h2 className='headings'>A bit about you</h2>
          <form className="new-task">
            <input type="text" ref="firstName" placeholder="First Name *" />
            <input type="text" ref="lastName" placeholder="Last Name *" />
            <label>Male<input ref="gender" type="radio" name='gender' id='male' /></label>
            <label>Female<input ref="gender" type="radio" name='gender' id='female' /></label>
            <label>Other<input ref="gender" type="radio" name='gender' id='otherGender' /><input type="text" ref="otherGender" placeholder="please specify *" /></label>
            <label>Date of Birth *<input type="date" ref="DOB" /></label>
            <input type="text" ref="uniEmail" placeholder="University Email Address *" />
            <input type="text" ref="personalEmail" placeholder="Personal Email Address *" />
            <input type="text" ref="mobile" placeholder="Mobile Number *" />
            <input type="text" ref="uniName" placeholder="University Name" />
            <textarea rows='6' cols='50' ref='uniAddress' placeholder='University Address *' ></textarea>
            <textarea rows='6' cols='50' ref='homeAddress'placeholder='Home Address (if different)'></textarea>
            <input type="text" ref="textInput" ref='course' placeholder="What course are you studying?" />
            <label>Expected Year of Graduation *
              <select>
              <option>2016</option> <option>2017</option> <option>2018</option>
              <option>2019</option> <option>2020</option> <option>2021</option>
              <option>2022</option> <option>2023</option> <option>2024</option>
              <option>2025</option>
            </select>
          </label>
          <h4>Which peer support group do you wish to facilitate? *</h4>
          <p>
            Please note not all universities have both groups so please check the Student Groups
            page for information about what is running at your university.
          </p>
          <label>Eating Disorder Peer Support Group<input type="radio" name='support group' /></label>
          <label>Positive Minds Course<input type="radio" name='support group' /></label>
          <Button onClick={this.handleSubmit.bind(this)}>Continue</Button>
        </form>
      </div>
    );
  }
}
