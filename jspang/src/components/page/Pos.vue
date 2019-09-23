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
              <li v-for="item in offenGoods" :key="item.goodsId" @click="addOrderList(item)">
                <span>{{ item.goodsName }}</span>
                <span class='o-price'>￥{{ item.price }}元</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 按类别分类 -->
        <div class="goods-type">
          <el-tabs>
            <!-- 管饱主食 -->
            <el-tab-pane label="管饱主食">
              <div>
                <el-row>
                  <el-col :span="4" v-for="o in type0Goods" :key="o">
                    <el-card>
                      <img :src="o.goodsImg" class="image">
                      <div style="padding: 14px;">
                        <span>{{o.goodsName}}</span>
                        <div class="bottom clearfix">
                          <span>￥{{ o.price }}元</span>
                          <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <!-- 精品小吃 -->
            <el-tab-pane label="精品小吃">
              <div>
                <el-row>
                  <el-col :span="4" v-for="o in type1Goods" :key="o">
                    <el-card>
                      <img :src="o.goodsImg" class="image">
                      <div style="padding: 14px;">
                        <span>{{o.goodsName}}</span>
                        <div class="bottom clearfix">
                          <span>￥{{ o.price }}元</span>
                          <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <!-- 冰爽饮料 -->
            <el-tab-pane label="冰爽饮料">
              <div>
                <el-row>
                  <el-col :span="4" v-for="o in type2Goods" :key="o">
                    <el-card>
                      <img :src="o.goodsImg" class="image">
                      <div style="padding: 14px;">
                        <span>{{o.goodsName}}</span>
                        <div class="bottom clearfix">
                          <span>￥{{ o.price }}元</span>
                          <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <!-- 省钱套餐 -->
            <el-tab-pane label="省钱套餐">
              <div>
                <el-row>
                  <el-col :span="4" v-for="o in type3Goods" :key="o">
                    <el-card>
                      <img :src="o.goodsImg" class="image">
                      <div style="padding: 14px;">
                        <span>{{o.goodsName}}</span>
                        <div class="bottom clearfix">
                          <span>￥{{ o.price }}元</span>
                          <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import axios from 'axios'
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
      offenGoods: [

      ],
      type0Goods: [
      ],
      type1Goods: [
      ],
      type2Goods: [
      ],
      type3Goods: [
      ]
    }
  },
  methods: {
    addOrderList(o) {
      console.log(o);
    }
  },
  created() {
    axios
      .get('http://localhost:3000/ofenGoods')
      .then(res => {
        this.offenGoods = res.data;
        console.log(res)
      })
      .catch(error => {
        alert('网络错误, 不能访问');
      })

    axios
      .get('http://localhost:3000/typeGoods')
      .then(res => {
        this.type0Goods = res.data[0];
        this.type1Goods = res.data[1];
        this.type2Goods = res.data[2];
        this.type3Goods = res.data[3];
      })
  },
  mounted() {    // 所有虚拟Dom 加载完成之后执行
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

/* 分类的样式 */
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 180px;
  height: 130px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
