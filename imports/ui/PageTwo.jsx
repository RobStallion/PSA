import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { StorePageOneData } from '../api/sections.js'
import Data from './Data.jsx'

// Task component - represents a single todo item
class pageTwo extends Component {
  renderData() {
    return this.props.pageOneData.map((data) => (
     <Data
       key={data._id}
       data={data}
     />
   ))
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderData()}
        </ul>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    pageOneData: StorePageOneData.find({}).fetch()
  }
}, pageTwo)
// <div className='container'>
//   <h1 className='headings'>Peer Support Facilitator Recruitment</h1>
//   <h2 className='headings'>Looking After Your Wellbeing</h2>
//   <h4>Please list 5 things that you would do to wind down and relax after a stressful
//     and emotionally draining support group session.</h4>
//   <p>The conversations topics at group sessions can at times be emotionally draining and
//     the discussion of destructive behaviours or suicidal thoughts can be triggering. It
//     is useful to think about how you would cope with distressing conversations. To score
//     full marks for this question you must include 5 things.</p>
//   <textarea className='placetext' rows='10' cols='50' placeholder='Please type answer here' />
//   <h2 className='headings'>Your Motivation</h2>
//   <h4 className='headings'>Please let us know why you are interested in this project.</h4>
//   <p>(Maximum 200 words)</p>
//   <textarea className='placetext' rows='10' cols='50' placeholder='Please type answer here' />
//   <h2 className='headings'>Understanding What It Takes To Be a Peer Support Group
//     Facilitator</h2>
//   <h4 className='headings'>What do you think are the three key skills necessary to run good
//     support group sessions?</h4>
//   <p>To score full marks for this question you must include 3 things.</p>
//   <textarea className='placetext' rows='10' cols='50' placeholder='Please type answer here' />
//   <h4 className='headings'>
//     What three skills do you think are important when running a
//     successful student-led project?</h4>
//   <p>
//     To run a successful support group you need to think of this as a student-led project.
//     Group facilitators also need to be involved in the management, organisation and promotion
//     of the support group. To score full marks for this question you must include 3 skills.
//   </p>
//   <textarea className='placetext' rows='10' cols='50' placeholder='Please type answer here' />
//   <h4 className='headings'>
//     Can you think of three reasons why supervision is important
//     and useful?</h4>
//   <p>
//     We consider the training weekend to be only the very start of your skill development.
//     To help you develop your skills in running effective support groups, we run a
//     supervision programme. Our supervisors are university graduates who have previously
//     run support groups for Student Minds. To score full marks for this question you must
//     include 3 things.
//   </p>
//   <textarea className='placetext' rows='10' cols='50' placeholder='Please type answer here' />
// </div>
