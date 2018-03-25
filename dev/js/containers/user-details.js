import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetail from '../components/userdetails.js'

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
