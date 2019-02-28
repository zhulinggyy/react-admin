import React, {Component} from 'react';
import {Menu,Icon} from 'antd';
import {NavLink,withRouter}from 'react-router-dom';

import menuList from'../../config/menuConfig';
import "./index.less";
import  logo from '../../assets/images/logo.png'

const SubMenu = Menu.SubMenu;
const Item=Menu.Item;
class LeftNav extends Component {

    componentWillMount(){
        this.meun = this.createMenu(menuList)
    }

    createMenu=(menu)=>{

        return menu .map(item=>{
            if(item.children){
                //得到当前的路径
                const {pathname}=this.props.location;
                //找到是否与Children中匹配的pathname
                const result=item.children.find(item=>item.key===pathname);
                if(result){
                  this.openKey=item.key;
                }
                return <SubMenu key={item.key}title={<span><Icon type={item.icon} />{item.title}</span>}>
                    {
                        this.createMenu(item.children)
                    }
                </SubMenu>
            }else{
                return<Item key={item.key}>
                    <NavLink to={item.key}>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </NavLink>
                </Item>
            }
        })
    }
  render () {
      //获取当前路由路径
      const {pathname} =this.props.location;
      return (
        <div className='left-nav'>
          <header >
              <NavLink to='/home' className='left-nav-header'>
                  <img src={logo} alt="logo"/>
                  <h2>尚硅谷后台</h2>
              </NavLink>
          </header>
        <Menu
            mode="inline"
            theme="dark"
            selectedKeys={[pathname]}
            defaultOpenKeys={[this.openKey]}
        >
            {
                this.meun
            }
        </Menu>
      </div>
    )
  }
}
//高阶组件
export default withRouter(LeftNav);