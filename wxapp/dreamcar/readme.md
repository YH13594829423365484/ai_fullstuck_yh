# 路虎4s店小程序

- 架构
由pages 组成
    -page架构
     -wxml -> html  //负责小程序组件
     div -> view
     -wxss ->css
     -js ->
        onLoad 生命周期
        data setData
    -json 配置
  -布局魔法 flex 弹性布局
    -css的难点在于搞定布局
    -二列式布局
      -float 浮动
      -flex 弹性
      子元素在一起
      -flex: 1
      其他列把宽度占完后，都給它
      -align-items:flex-end|center|
      flex-start

  -早点学架构
    -基础组件
      button resset cell...
    -业务模块

-列表循环 List
  把数据库的数据展示出来
  <block wx:for="" wx:key="唯一" >
  {{item.image}}
  </block>

-数据请求
  onLaunch 发送一次