import React, { Component, PropTypes } from 'react';

import { PageOne } from '../api/sections.js';

// Task component - represents a single todo item
export default class pageOne extends Component {

  render() {

    return (
      <div className='pageOne'>
        <h1 className='headings'>Peer Support Facilitator Recruitment</h1>
          <p>There are 5 pages to this application form - please allow yourself sufficient time to complete the application.</p>
          <p>* Required</p>
          <h2 className='headings'>A bit about you</h2>
            <form className="new-task">
              <input type="text" ref="textInput" placeholder="First Name *" required/>
              <input type="text" ref="textInput" placeholder="Last Name *" required/>
              <label>Male<input type="radio" name='gender' required/></label>
              <label>Female<input type="radio" name='gender' required/></label>
              <label>Other<input type="radio" name='gender' required/><input type="text" ref="textInput" placeholder="please specify *" /></label>
              <label>Date of Birth *<input type="date" ref="textInput" required/></label>
              <input type="text" ref="textInput" placeholder="University Email Address *" required/>
              <input type="text" ref="textInput" placeholder="Personal Email Address *" required/>
              <input type="text" ref="textInput" placeholder="Mobile Number *" required/>
              <input type="text" ref="textInput" placeholder="University" required/>
              <textarea rows='6' cols='50' placeholder='University Address *' required></textarea>
              <textarea rows='6' cols='50' placeholder='Home Address (if different)'></textarea>
              <input type="text" ref="textInput" placeholder="What course are you studying?" required/>
              <label>Expected Year of Graduation *<select>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select></label>
            <h4>Which peer support group do you wish to facilitate? *</h4>
            <p>
              Please note not all universities have both groups so please check the Student Groups
              page for information about what is running at your university.
            </p>
            <label>Eating Disorder Peer Support Group<input type="radio" name='support group' required/></label>
            <label>Positive Minds Course<input type="radio" name='support group' required/></label>
            </form>
      </div>
    );
  }
}
