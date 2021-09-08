import React, { Component } from 'react';
import { history } from 'umi';

export default class login extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            localStorage.setItem('isLogin', true);
            if (this.props.location.state && this.props.location.state.from) {
              history.push(this.props.location.state.from);
            }
          }}
        >
          登陆
        </button>
      </div>
    );
  }
}
