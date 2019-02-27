import React, {Component} from 'react';
import {
    Form,
    Icon,
    Input,
    Button,
    message
} from 'antd';

const Item=Form.Item;

class LoginForm extends Component {

   checkPassword=(rule,value,callback)=>{
       console.log(rule,value);
       if(!value){
           callback('必须输入密码');
       }else if(value.length<4){
           callback('密码长度必须超过4位');
       }else if(value.length>11){
           callback('密码长度必须小于11位');
       }else if(!(/^[a-zA-Z0-9_]+$/.test(value))){
           callback('密码只能包含大小写英文，数字或者下划线')
       }else{
           callback();
       }
   }

    // handleSubmit = e =>{
    //     e.preventDefault();
    //     const{validateFields,resetFields}=this.props.form.
    //     validateFields((err, values) => {
    //         if (!err) {
    //             console.log('收集的表单数据 ', values);
    //         }else{
    //             resetFields(['password']);
    //            const errMsg = object.values(error).reduce((prev,curr)=>{
    //                 return prev+curr.errors[0].message;
    //             },'');
    //             message.error('errMsg')
    //         }
    //     });
    // }
  render () {
      const { getFieldDecorator,getFieldValue} = this.props.form;
      console.log(getFieldValue('username'));
    return (
        <Form className='login-form-container' onSubmit={this.handleSubmit}>
            <Item>{
                getFieldDecorator(
                    'username',
                    {
                        rules: [
                            { required: true, message: '请输入用户名' },
                            {min:4,message:'用户名必须大于4位'},
                            {max:11,message:'用户名不能超过11位'},
                            {pattern:/^[a-zA-Z0-9_]+$/,message:'必须是大小写英文.数字或者下划线'}
                        ],
                    }
                )(<Input  placeholder="用户名" prefix={<Icon type="user-add" />}/>)

            }
            </Item>
            <Item>{
                getFieldDecorator(
                    'password',
                    {
                      rules:[
                          {validator:this.checkPassword}
                      ]
                    }
                )(<Input  placeholder="密码"type='password' prefix={<Icon type="safety" />}/>)
            }
            </Item>
            <Item>
                <Button type='primary' htmlType="submit"  className='login-form-button'>登录</Button>
            </Item>
        </Form>
    )
  }
}

const WrappedLoginForm=Form.create()(LoginForm);
export default WrappedLoginForm;

