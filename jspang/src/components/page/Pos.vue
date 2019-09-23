<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="post-order" id="order-list">
        <el-tabs class='order-tabs'>
          <!-- 点餐 -->
          <el-tab-pane label="点餐">
            <el-table border :data="tableData" style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column label="操作" width='100' fixed='right'>
                <template>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 点餐操作 -->
            <div class='order-handle'>
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>

          <!-- 挂单 -->
          <el-tab-pane label="挂单">挂单</el-tab-pane>

          <!-- 外卖 -->
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>

      </el-col>
      <el-col :span="17">
        <!-- 常用商品 -->
        <div class="frequent-goods">
          <div class="title">常用商品</div>
          <div class="frequent-goods-list">
            <ul>
              <li v-for="item in frequentGoods" :key="item.goodsId">
                <span>{{ item.goodsName }}</span>
                <span class='o-price'>￥{{ item.price }}元</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 按类别分类 -->
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="管饱主食">
              <div>
                <ul class="cookList">
                  <li>
                    <span class="foodImg"><img /></span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="精品小吃">精品小吃</el-tab-pane>
            <el-tab-pane label="冰爽饮料">冰爽饮料</el-tab-pane>
            <el-tab-pane label="省钱套餐">省钱套餐</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: 'pos',
  data() {
    return {
      tableData: [
        {
          goodsName: '可口可乐',
          price: 8,
          count: 1
        },
        {
          goodsName: '香辣鸡腿堡',
          price: 15,
          count: 1
        },
        {
          goodsName: '爱心薯条',
          price: 8,
          count: 1
        },
        {
          goodsName: '甜筒',
          price: 8,
          count: 1
        }
      ],
      frequentGoods: [
        {
          goodsId: 1,
          goodsName: '香辣鸡腿堡',
          price: 18
        },
        {
          goodsId: 2,
          goodsName: '田园鸡腿堡',
          price: 15
        },
        {
          goodsId: 3,
          goodsName: '和风汉堡',
          price: 15
        },
        {
          goodsId: 4,
          goodsName: '快乐全家桶',
          price: 80
        },
        {
          goodsId: 5,
          goodsName: '脆皮炸鸡腿',
          price: 10
        },
        {
          goodsId: 6,
          goodsName: '魔法鸡块',
          price: 20
        },
        {
          goodsId: 7,
          goodsName: '大杯可乐',
          price: 10
        },
        {
          goodsId: 8,
          goodsName: '雪顶咖啡',
          price: 18
        },
        {
          goodsId: 9,
          goodsName: '大份鸡米花',
          price: 15
        },
        {
          goodsId: 10,
          goodsName: '香辣鸡柳',
          price: 17
        },
      ]
    }
  },
  mounted: function () {    // 所有虚拟Dom 加载完成之后执行
    var orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px';
  },
}
</script>

<style  scoped>
.post-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}

#order-list .order-tabs {
  padding: 0 15px;
}

.order-handle {
  margin-top: 10px;
}

.frequent-goods .title {
  height: 20px;
  border-bottom: 1 px #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
  color: #409eff;
}

.frequent-goods .frequent-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}

.frequent-goods .frequent-goods-list ul li .o-price {
  color: #58b7ff;
}

.goods-type {
  clear: both;
  padding: 15px;
}
</style>
