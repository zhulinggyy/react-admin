// 定义发送请求的函数模板


import  ajax from './ajax';
console.log(process.env.NODE_ENV);
const prefix=process.env.NODE_ENV==='development'?'':'http://localhost:5000';

   export const reqLogin=(username,password)=>ajax(prefix+'/login',{username,password},'POST');
   export const reqAddUser=user=>ajax(prefix+'/manage/user/add',user,'POST');
