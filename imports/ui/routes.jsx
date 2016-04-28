import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import PageOne from './PageOne.jsx'
import PageTwo from './PageTwo.jsx'
import notApp from './notApp.jsx'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={notApp}>
            <IndexRoute component={PageOne} />
            <Route path='/pagetwo' component={PageTwo} />
          </Route>
        </Router>
      </div>
    )
  }
}
