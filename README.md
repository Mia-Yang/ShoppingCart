# Shopping Cart

In Shoppingcart, you can have a look of products that you added in the cart, and change the quantity of each product, in addition, you can also remove a product from the cart in the shopping cart page. On the right, total cost of those products has been calculated and showed, there is a selection box of the method of express in the middle of Order Summary, you can change it and the final cost would change according to it.

## Installation

The project has been splited into two parts, frontend and backend.
Backend folder contains service connected to database, which is MongoDB in this project.

## Setup MongoDB locally

If you haven't installed it, here is the official tutorial of installation : https://docs.mongodb.com/manual/installation/
Next, run MongoDB at local.

## Start Node and Setup Data

    /* install dependencies */
    npm install
    /* start node and setup data */
    npm start

When the terminal shows output as

    MongoDB Connected...
    node src/data/insert.js exited with code 0
    MongoDB Connected...
    App is running...

then the MongoDB has successfully connected, and the server has been running. Data could be get at http://localhost:3001/shoppingCart

## Start React

    /* back to previous folder */
    cd ..
    /* get into frontend folder */
    cd ./frontend
    /* install dependencies */
    npm install
    /* start react */
    npm start

Now, you can visit http://localhost:3000 to view the shopping cart in the browser.

## Deploy the project with Docker

The project provide Dockerfile and docker compose file so that you can deploy the project with docker. Just modify the link to MongoDB in line 3 of [backend/src/repository/cartRepository.js] from
`mongodb://localhost:27017/shoppingCart`
to `mongodb://mongodb/shoppingCart`  
 Then run the command below

    docker-compose up -d

after container is running, you can visit
http://localhost:3000 to view the shopping cart.  
To stop it, press **ctrl+c** or **docker-compose stop**

## 作业要求

Design Mockup： https://dribbble.com/shots/5311395-Shopping-Cart/attachments/5311395?mode=media

- 前端：React，Sass，Redux，Test
- 后端：Express.js, UnitTest, DB (MySQL/MongoDB),
- GitHub, Docker
- 先做 tasking，然后一步一步完成，全程小步提交

## 功能

1. 商品列表，增删改
2. 通过+ - 按钮，可以增减每个商品数量，并且价格和商品总价实时变更
3. 一切数据均实时同步数据库，数据库表结构自行设计
4. UI 不要求 responsive，不影响功能的情况下可以适当的自由发挥，尽量还原 mockup

## Tasking

- 组件划分
- react，scss 完成静态页面
- 数据结构的设计

  [
  {
  id: 1,
  name: 'Fifa',
  label: 'ps4',
  price: 10,
  quantity: 99,
  imgUrl:
  url,
  },
  {
  id: 2,
  name: 'Glacier White 500GB',
  label: 'ps4',
  price: 249.99,
  quantity: 1,
  imgUrl:
  url,
  },
  ];

- 添加假数据显示在静态页面
- 使用 redux, react-redux 管理组件间的通信,将数据存在 initial state 中，组件可以从 props 中获取 state
- 添加增减数量功能，点击+增加一个，点击-减少一个
- 添加删除商品功能，点击 remove，该商品从购物车中被移除
- 添加 order summary 中同步计算总价的功能，当购物车中的商品数量变动，价格同步更新
- 后端搭建，连接 MongoDB，在数据库中预存一些数据
- 添加 post， delete， patch API，可以通过 postman 等访问到数据
- 使用 redux thunk 中间件，从后端获取数据,不再使用 mock data，组件中的 props 为后段获取到的数据
- 修改功能，使变更商品数量时同时更改数据库中的数量
- 添加测试
- 添加 Dockerfile & docker-compose file

## Features

### 前端

- 点击 remove，可以删除页面上的 item
- 点击 remove，，同步删除 db.json 中的相应数据
- 点击 remove，item 数量相应减少
- 手动添加 item 数据，购物车新增添加的 item card
- 手动添加 item 数据，页面的 item 数量相应增加
- 手动删除 item 数据，购物车减少删除的 item card
- 手动删除 item 数据，页面的 item 数量相应减少
- 点击 item card 中的 ➕，对应的 quantity +1
- 点击 item card 中的 ➕，对应的 total 价格重新计算 (quantity\*price)
- 点击 item card 中的 ➕，所有产品的总价重新计算 Σ(quantity\*price)
- 点击 item card 中的 ➖，对应的 quantity -1
- 点击 item card 中的 ➖，对应的 total 价格重新计算 (quantity\*price)
- 点击 item card 中的 ➖，所有产品的总价重新计算 Σ(quantity\*price)
- 点击 item card 中的 ➖，最小值为 1
- 点击 item card 中的 ➖，当 quantity 为 1 时，提示已达到最小值
- 连接后端之后，点击 remove，同步删除 database 中的对应产品数据
- 连接后端之后，点击 ➕，同步更改 database 中的对应商品的 quantity
- 连接后端之后，点击 ➖，同步更改 database 中的对应商品的 quantity

### 后端

- 分为 Controller-Repository-Service 三层
- 包含 get/delete/patch 接口。分别接收 获取商品列表/删除商品/更改数量 请求。
- 通过前端/postman 等发送请求时，MongoDB 中的数据相对应变化。

## 组件划分

![image](https://github.com/Mia-Yang/Shopping-cart/blob/master/src/asset/Screen%20Shot%202021-01-17%20at%208.34.54%20PM.png)
