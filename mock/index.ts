import type { MockMethod } from 'vite-plugin-mock'
import chalk from 'chalk'

// 登录
const login = {
  url: '/doLogin',
  method: 'post',
  response: ({ body }) => {
    const { account } = body
    if (account !== 'admin' && account !== 'user' && account !== 'test') {
      return {
        code: -1,
        success: false,
        message: '账号错误',
        data: {}
      }
    }
    return {
      code: 200,
      success: true,
      message: '登录成功',
      data: {
        token: 'fsa45f4563f4a6f4-fsa45f4563f4a6f4-fsa45f4563f4a6f4',
        name: '小小',
        role: account,
        userId: 'fsa45f4563f4a6f4',
        user: {
          isAdmin: account === 'admin' ? 1 : 0,
          userName: account
        },
        menus: [
          {
            menuId: 5,
            menuName: '菜单配置',
            parentName: null,
            parentId: 0,
            orderNum: '0',
            path: '/menu/index',
            menuType: '0',
            status: 0,
            perms: 'sys:menu:list',
            icon: null,
            createBy: null,
            createTime: '2021-08-05 08:00:13',
            updateBy: null,
            updateTime: null,
            remark: null,
            children: []
          },
          {
            menuId: 13,
            menuName: '用户角色权限',
            parentName: null,
            parentId: 0,
            orderNum: '0',
            path: '/user-permission',
            menuType: '0',
            status: 0,
            perms: 'sys:permission:list',
            icon: null,
            createBy: null,
            createTime: '2021-08-06 05:17:34',
            updateBy: null,
            updateTime: null,
            remark: null,
            children: [
              {
                menuId: 18,
                menuName: '用户管理',
                parentName: null,
                parentId: 13,
                orderNum: '0',
                path: '/user-permission/user',
                menuType: '0',
                status: 0,
                perms: 'sys:user:list',
                icon: null,
                createBy: null,
                createTime: '2021-08-06 05:45:14',
                updateBy: null,
                updateTime: null,
                remark: null,
                children: []
              },
              {
                menuId: 23,
                menuName: '用户组管理',
                parentName: null,
                parentId: 13,
                orderNum: '0',
                path: '/user-permission/group',
                menuType: '0',
                status: 0,
                perms: 'sys:userGroup:list',
                icon: null,
                createBy: null,
                createTime: '2021-08-06 05:49:12',
                updateBy: null,
                updateTime: null,
                remark: null,
                children: []
              },
              {
                menuId: 24,
                menuName: '角色管理',
                parentName: null,
                parentId: 13,
                orderNum: '0',
                path: '/user-permission/role/index',
                menuType: '0',
                status: 0,
                perms: 'sys:role:list',
                icon: null,
                createBy: null,
                createTime: '2021-08-06 05:50:10',
                updateBy: null,
                updateTime: null,
                remark: null,
                children: []
              }
            ]
          }
        ]
      }
    }
  }
}

// 退出
const logout = {
  url: '/loginOut',
  method: 'get',
  message: '退出成功',
  response: {
    code: 200,
    success: true,
    data: {}
  }
}

const server = [
  // 登录
  login,
  // 退出
  logout
]

console.log(chalk.magentaBright('\nmock server running!'))

export default server as MockMethod[]
