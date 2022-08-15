const fs = require('fs')
const path = require('path')

const data = [
  {
    menuId: 2,
    menuName: '首页管理',
    parentName: null,
    parentId: 0,
    orderNum: null,
    path: '/home',
    menuType: '0',
    status: 0,
    perms: '',
    icon: null,
    createBy: null,
    createTime: '2022-04-01T06:02:13.000Z',
    updateBy: null,
    updateTime: null,
    remark: '',
    isDel: 1,
    children: [
      {
        menuId: 3,
        menuName: '首页管理',
        parentName: null,
        parentId: 2,
        orderNum: null,
        path: '/home/index',
        menuType: '0',
        status: 0,
        perms: '',
        icon: null,
        createBy: null,
        createTime: '2022-04-01T06:02:35.000Z',
        updateBy: null,
        updateTime: null,
        remark: '',
        isDel: 1,
        children: []
      },
      {
        menuId: 4,
        menuName: '自动绘图',
        parentName: null,
        parentId: 2,
        orderNum: null,
        path: '/home/auto-drawing',
        menuType: '0',
        status: 0,
        perms: '',
        icon: null,
        createBy: null,
        createTime: '2022-04-01T06:02:56.000Z',
        updateBy: null,
        updateTime: null,
        remark: '',
        isDel: 1,
        children: []
      }
    ]
  },
  {
    menuId: 5,
    menuName: '国际化',
    parentName: null,
    parentId: 0,
    orderNum: null,
    path: '/i18n/index',
    menuType: '0',
    status: 0,
    perms: '',
    icon: null,
    createBy: null,
    createTime: '2022-04-01T06:03:10.000Z',
    updateBy: null,
    updateTime: null,
    remark: '',
    isDel: 1,
    children: []
  },
  {
    menuId: 6,
    menuName: '多级菜单',
    parentName: null,
    parentId: 0,
    orderNum: null,
    path: '/multilevel',
    menuType: '0',
    status: 0,
    perms: '',
    icon: null,
    createBy: null,
    createTime: '2022-04-01T06:03:36.000Z',
    updateBy: null,
    updateTime: null,
    remark: '',
    isDel: 1,
    children: [
      {
        menuId: 7,
        menuName: '一级菜单',
        parentName: null,
        parentId: 6,
        orderNum: null,
        path: '/multilevel/1',
        menuType: '0',
        status: 0,
        perms: '',
        icon: null,
        createBy: null,
        createTime: '2022-04-01T06:04:03.000Z',
        updateBy: null,
        updateTime: null,
        remark: '',
        isDel: 1,
        children: []
      },
      {
        menuId: 8,
        menuName: '一级菜单',
        parentName: null,
        parentId: 6,
        orderNum: null,
        path: '#/multilevel/2',
        menuType: '0',
        status: 0,
        perms: '',
        icon: null,
        createBy: null,
        createTime: '2022-04-01T06:04:28.000Z',
        updateBy: null,
        updateTime: null,
        remark: '',
        isDel: 1,
        children: [
          {
            menuId: 9,
            menuName: '二级菜单',
            parentName: null,
            parentId: 8,
            orderNum: null,
            path: '/multilevel/2/index',
            menuType: '0',
            status: 0,
            perms: '',
            icon: null,
            createBy: null,
            createTime: '2022-04-01T06:04:49.000Z',
            updateBy: null,
            updateTime: null,
            remark: '',
            isDel: 1,
            children: []
          },
          {
            menuId: 10,
            menuName: '二级菜单',
            parentName: null,
            parentId: 8,
            orderNum: null,
            path: '/multilevel/2/3',
            menuType: '0',
            status: 0,
            perms: '',
            icon: null,
            createBy: null,
            createTime: '2022-04-01T06:05:40.000Z',
            updateBy: null,
            updateTime: null,
            remark: '',
            isDel: 1,
            children: [
              {
                menuId: 11,
                menuName: '三级菜单',
                parentName: null,
                parentId: 10,
                orderNum: null,
                path: '/multilevel/2/3/index',
                menuType: '0',
                status: 0,
                perms: '',
                icon: null,
                createBy: null,
                createTime: '2022-04-01T06:06:13.000Z',
                updateBy: null,
                updateTime: null,
                remark: '',
                isDel: 1,
                children: []
              },
              {
                menuId: 12,
                menuName: '三级菜单',
                parentName: null,
                parentId: 10,
                orderNum: null,
                path: '/multilevel/2/3/4',
                menuType: '0',
                status: 0,
                perms: '',
                icon: null,
                createBy: null,
                createTime: '2022-04-01T06:06:55.000Z',
                updateBy: null,
                updateTime: null,
                remark: '',
                isDel: 1,
                children: [
                  {
                    menuId: 13,
                    menuName: '四级菜单',
                    parentName: null,
                    parentId: 12,
                    orderNum: null,
                    path: '/multilevel/2/3/4/index',
                    menuType: '0',
                    status: 0,
                    perms: '',
                    icon: null,
                    createBy: null,
                    createTime: '2022-04-01T06:07:21.000Z',
                    updateBy: null,
                    updateTime: null,
                    remark: '',
                    isDel: 1,
                    children: []
                  },
                  {
                    menuId: 14,
                    menuName: '四级菜单',
                    parentName: null,
                    parentId: 12,
                    orderNum: null,
                    path: '/multilevel/2/3/4/index/2',
                    menuType: '0',
                    status: 0,
                    perms: '',
                    icon: null,
                    createBy: null,
                    createTime: '2022-04-01T06:07:54.000Z',
                    updateBy: null,
                    updateTime: null,
                    remark: '',
                    isDel: 1,
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    menuId: 15,
    menuName: '组件',
    parentName: null,
    parentId: 0,
    orderNum: null,
    path: '/components-page',
    menuType: '0',
    status: 0,
    perms: '',
    icon: null,
    createBy: null,
    createTime: '2022-04-01T06:08:20.000Z',
    updateBy: null,
    updateTime: null,
    remark: '',
    isDel: 1,
    children: [
      {
        menuId: 16,
        menuName: '上传组件',
        parentName: null,
        parentId: 15,
        orderNum: null,
        path: '/components-page/upload',
        menuType: '0',
        status: 0,
        perms: '',
        icon: null,
        createBy: null,
        createTime: '2022-04-01T06:08:41.000Z',
        updateBy: null,
        updateTime: null,
        remark: '',
        isDel: 1,
        children: []
      },
      {
        menuId: 17,
        menuName: '裁剪组件',
        parentName: null,
        parentId: 15,
        orderNum: null,
        path: '/components-page/cropper',
        menuType: '0',
        status: 0,
        perms: '',
        icon: null,
        createBy: null,
        createTime: '2022-04-01T06:09:04.000Z',
        updateBy: null,
        updateTime: null,
        remark: '',
        isDel: 1,
        children: []
      }
    ]
  }
]

const getData = data => {
  function generateData(data) {
    return data.map(item => {
      return {
        ...item,
        key: item.menuId,
        label: item.menuName,
        children: generateData(item.children)
      }
    })
  }
  return generateData(data)
}

const res = getData(data)

console.log(res)

fs.writeFileSync(path.join(__dirname, './data.json'), JSON.stringify(res, null, 2))
