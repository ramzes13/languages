import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routeCodes } from 'config/routes';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='Dashboard'>
        <h1>Some information here</h1>

        
        <h3>Synchronous action</h3>
        <Link to={ routeCodes.DICTATION_CREATE } >Create new dictation</Link>
      </div>
    );
  }
}
