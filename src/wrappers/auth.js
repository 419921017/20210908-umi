import React, { Component } from 'react';
import { Redirect } from 'umi';

function Auth(props) {
  let isLogin = localStorage.getItem('isLogin');
  if (isLogin) {
    return props.children;
  }

  return (
    <Redirect
      to={{ pathname: '/login', state: { from: props.location.pathname } }}
    />
  );
}

export default Auth;
