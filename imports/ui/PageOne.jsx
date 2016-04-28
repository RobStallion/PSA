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

    StorePageOneData.insert({
      firstName,
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
            <input type="text" ref="textInput" placeholder="Last Name *" />
            <label>Male<input type="radio" name='gender' /></label>
            <label>Female<input type="radio" name='gender' /></label>
            <label>Other<input type="radio" name='gender' /><input type="text" ref="textInput" placeholder="please specify *" /></label>
            <label>Date of Birth *<input type="date" ref="textInput" /></label>
            <input type="text" ref="textInput" placeholder="University Email Address *" />
            <input type="text" ref="textInput" placeholder="Personal Email Address *" />
            <input type="text" ref="textInput" placeholder="Mobile Number *" />
            <input type="text" ref="textInput" placeholder="University" />
            <textarea rows='6' cols='50' placeholder='University Address *' ></textarea>
            <textarea rows='6' cols='50' placeholder='Home Address (if different)'></textarea>
            <input type="text" ref="textInput" placeholder="What course are you studying?" />
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
