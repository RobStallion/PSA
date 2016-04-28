import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import PageOne from '../imports/ui/PageOne.jsx';

Meteor.startup(() => {
  render(<PageOne />, document.getElementById('render-target'));
});
