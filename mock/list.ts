/* cSpell:disable */

import type { MockMethod } from 'vite-plugin-mock'
import { Random, mock } from 'mockjs'

const count = 1000
const List = [...new Array(count)].map(() => {
  return mock({
    id: '@id',
    timestamp: +Random.date('T'),
    LastEditTime: +Random.date('T'),
    updateTime: '@datetime',
    'Rot_Offset|1': [0, 90, 180, 270],
    CenterOffset: '@float(0, 1)' + ',' + '@float(0, 1)',
    'PKG_Type|1': ['SMD', 'THT', 'OTHER'],
    'size|1': ['大', '中', '小'],
    author: '@first',
    reviewer: '@first',
    jobName: '@first',
    createBy: '@first',
    updateBy: '@first',
    ShapeName: '@ctitle(3, 4)',
    title: '@ctitle(3, 4)',
    PartNumber: '@first(1, 10)',
    Editor: '@ctitle(3, 4)',
    usermenuName: '@ctitle(3, 4)',
    ShapemenuName: '@ctitle(5, 10)',
    menuName: '@ctitle(5, 10)',
    Opration: '@ctitle(5, 10)',
    email: '@email',
    content_short: '@cparagraph(1,3)',
    content: '@cparagraph(100,200)',
    hobby: '@cparagraph(100,200)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': [0, 1, 2, 3],
    'StateFlag|1': [0, 1, 2, 3],
    'status|1': ['published', 'draft'],
    code: '@title',
    display_time: '@datetime',
    createTime: '@datetime',
    updatedAt: '@datetime',
    updatedTime: '@datetime',
    EditTime: '@datetime',
    comment_disabled: true,
    previews: '@integer(300, 5000)',
    image: Random.image('200x100', Random.color(), '#fff', Random.ctitle(1, 1)),
    platforms: ['a-platform'],
    money: '@integer(1, 3e10)',
    buttonKey: 'normal',
    buttonList: [
      {
        name: '查看'
      },
      {
        name: '编辑'
      },
      {
        name: '删除'
      }
    ]
  })
})

// 获取列表
const getList = {
  url: '/list',
  type: 'get',
  timeout: 0,
  response: ({ query }) => {
    const { importance, type, title, page = 1, pageSize = 20, sort } = query
    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })
    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    const pageList = mockList.filter(
      (item, index) => index < pageSize * page && index >= pageSize * (page - 1)
    )
    return {
      code: 200,
      success: true,
      data: { result: pageList, total: mockList.length }
    }
  }
}

const list = [
  {
    ...getList,
    url: '/shapeParam/list'
  },
  {
    ...getList,
    url: '/userGroup/list'
  },
  {
    ...getList,
    url: '/role/list'
  },
  {
    ...getList,
    url: '/user/list'
  },
  {
    ...getList,
    url: '/task/list'
  },
  {
    ...getList,
    url: '/shapeCode/list'
  },
  {
    ...getList,
    url: '/userGroup/commonList'
  },
  {
    ...getList,
    url: '/role/commonList'
  },
  {
    ...getList,
    url: '/shapeLog/list'
  },
  {
    ...getList,
    url: '/operateLog/list'
  }
]

// 获取菜单列表
const getMuneList = {
  url: '/menu/tree',
  type: 'get',
  response: () => {
    return {
      code: 200,
      success: true,
      data: [
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
            // {
            //   menuId: 18,
            //   menuName: '用户管理',
            //   parentName: null,
            //   parentId: 13,
            //   orderNum: '0',
            //   path: '/user-permission/user',
            //   menuType: '0',
            //   status: 0,
            //   perms: 'sys:user:list',
            //   icon: null,
            //   createBy: null,
            //   createTime: '2021-08-06 05:45:14',
            //   updateBy: null,
            //   updateTime: null,
            //   remark: null,
            //   children: []
            // },
            {
              menuId: 23,
              menuName: '用户组管理',
              parentName: null,
              parentId: 13,
              orderNum: '0',
              path: '/user-permission/group',
              menuType: '1',
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
              orderNum: '1',
              path: '/user-permission/role/index',
              menuType: '1',
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

// 获取列表详情
const getListDetails = {
  url: '/list/:id',
  type: 'get',
  response: config => {
    const { id } = config.query || {}

    console.log(id, 'config.params')

    const article = List.find(item => item.id === id)
    return {
      code: 200,
      success: true,
      data: article
    }
  }
}

// 创建列表
const createList = {
  url: '/api/users',
  type: 'post',
  response: () => {
    return {
      code: 200,
      success: true,
      data: 'success'
    }
  }
}

// 更新列表
const updateList = {
  url: '/api/article/:id',
  type: 'put',
  response: () => {
    return {
      code: 200,
      success: true,
      data: 'success'
    }
  }
}

const server = [
  ...list,
  getMuneList,
  // 获取列表
  getList,
  // 获取列表详情
  getListDetails,
  // 创建列表
  createList,
  // 更新列表
  updateList
]

export default server as MockMethod[]
