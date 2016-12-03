"use strict";

import React, {Component}               from 'react';

export default class Index extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return<div>
      {this.props.children}
    </div>;
  }

}