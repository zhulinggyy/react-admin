import React, {Component} from 'react';
import logo from "../../assets/images/logo.png";
import'./index.less'

import LoginForm from'../../components/login-from';
import {reqLogin} from "../../api";

export default class  extends Component {

  //  登录方法
    login = async(username,password)=>{
        //发送AJAX情求
        const result=await reqLogin(username,password);
        console.log(result);
        if(result.status===0){
            // 用户登录成功后
            this.props.history.replace('/');
        }else{
            //用户登录失败后
        }
    }

  render () {
    return (
      <div className='login'>
          <header className='login-header'>
            <img src={logo} alt="logo"/>
            <h1>React项目：后台管理系统</h1>
          </header>
          <section className='login-form'>
           <h2>用户登录</h2>
              <LoginForm  login={this.login}/>
          </section>
      </div>
    )
  }
}

