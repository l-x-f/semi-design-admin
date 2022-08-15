# semi-design-admin

## auth

[xiaofei](https://gitee.com/l-x-f)

## 开发环境

```text
Windows 10 家庭中文版: 19042.1165
Microsoft VS Code: 1.56.2
Google Chrome: 92.0.4515.131（正式版本） （64 位）
git: 2.31.1
node: v12.18.3
npm: 6.14.6
yarn: 1.22.10
nvm: 1.1.7
nrm: 1.2.4
```

## 技术栈

| 类型            | 名称         | 版本   |
| --------------- | ------------ | ------ |
| 开发语言        | TypeScript   | 4.5.4  |
| JavaScript 框架 | React        | 18.1.0 |
| 路由            | React Router | 6.3.0  |
| 状态管理        | recoil       | 0.7.5  |
| UI 框架         | semi-ui      | 2.17.0 |
| 构建工具        | Vite         | 3.0.7  |

## 项目结构

```sh
.
├── README.md                           #项目简介
├── build.sh                            #打包脚本
├── commitlint.config.js                #commitlint配置
├── index.html                          #页面入口
├── mock                                #mock
│   ├── index.ts                        #首页mock
│   └── list.ts                         #列表mock
├── package.json                        #package
├── postcss.config.js                   #postcss配置
├── public                              #静态文件
│   └──  favicon.ico                    #favicon.ico
├── src                                 #核心源码
│   ├── api                             #接口
│   ├── assets                          #资源
│   ├── components                      #组件
│   ├── config                          #项目配置
│   ├── hooks                           #自定义钩子函数
│   ├── icons                           #svg图标
│   ├── layout                          #页面布局
│   ├── locales                         #国际化配置
│   ├── main.ts                         #项目入口
│   ├── router                          #路由，权限处理，导航守卫
│   ├── store                           #数据仓库，权限处理
│   ├── styles                          #全局样式和样式变量
│   ├── utils                           #工具函数
│   └── views                           #业务页面
├── tsconfig.json                       #ts项目配置
├── types                               #ts类型
├── update.sh                           #提交代码脚本
├── viteConfig                          #vite插件配置
├── vite.config.ts                      #vite项目配置
└── yarn.lock                           #npm包版本锁定
```

## 项目启动

### 安装依赖

```sh
yarn
```

### 开启开发环境

```sh
yarn dev  or  npm run dev
```

## 代码检验

```sh
yarn lint
```

## 样式检验

```sh
yarn stylelint
```

## 代码提交

```sh
./update.sh
```
