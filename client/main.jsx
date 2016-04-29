import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import PageOne from '../imports/ui/PageOne.jsx';
import PageTwo from '../imports/ui/PageTwo.jsx';
import Router from '../imports/ui/routes.jsx'


Meteor.startup(() => {
  render(
    <Router />, document.getElementById('render-target'))
});
