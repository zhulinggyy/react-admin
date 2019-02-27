import React, {Component} from 'react';
import logo from "./images/logo.png";
import'./index.less'

import LoginForm from'../../components/login-from'

export default class  extends Component {
  render () {
    return (
      <div className='login'>
          <header className='login-header'>
            <img src={logo} alt="logo"/>
            <h1>React项目：后台管理系统</h1>
          </header>
          <section className='login-form'>
           <h2>用户登录</h2>
              <LoginForm />
          </section>
      </div>
    )
  }
}

