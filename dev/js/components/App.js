import React from 'react';
import UserList from '../containers/user-list.js';
import UserDetail from '../containers/user-details.js'
import '../../scss/style.scss';

const App = () => (
  <div>
    <h2>Red Velvet</h2>
    <UserList />
    <hr />
    <h2>User Details:</h2>
    <UserDetail />
  </div>
);

export default App;
