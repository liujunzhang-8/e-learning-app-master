﻿# common-component

#### 介绍
一套通用的组件，从页面布局到块的组件，涉及页面组件、内容组件、块组件、卡片、分组、导航、徽章、分段器等，组件采用主题化，可以修改主题文件定制需要的主题颜色。

#### 软件架构
组件在uni app下使用，在h5及微信小程序下已测试通过。


#### 使用说明

1. 目录结构
   common
      css 组件样式目录
      props  组件使用到的属性数组
   components
      common  通用组件目录
   pages
      my-demo 组件示例页面

2. 主题文件
   在 common->css目录的theme.scss，可以修改变量完成主题化变更

3. 使用组件
   参见组件示例页面
