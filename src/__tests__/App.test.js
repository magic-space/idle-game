import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
// import { render } from '../test-utils'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});