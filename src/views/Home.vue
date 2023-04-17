<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right:10px"
        ><el-card class="box-card">
          <div class="user">
            <img class="user-img" src="../assets/images/恶灵.jpg" alt="" />
            <div class="userinfo">
              <p class="name">恶灵</p>
              <p class="access">SongYuQi</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2023-4-15</span></p>
            <p>上次登录地点：<span>Steam</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 445px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"
            />
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left:10px">
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="price">￥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height:280px">
         <!-- 折线图 -->
        </el-card>
        <div class="graph">
          <el-card style="height:260px"></el-card>
          <el-card style="height:260px"></el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getData } from "../api";
export default {
  data() {
    return {
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    // console.log('1111111');
    getData().then(({data}) => {
      console.log(data);
      const {tableData} = data.data
      console.log(tableData);
    });
  },
};
</script>
<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
  img {
    margin-right: 40px;
    width: 220px;
    height: 162px;
    border-radius: 5%;
  }
  .userinfo {
    .name {
      font-size: 28px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
    }
  }
  .el-card {
    width: 30%;
    margin-bottom: 20px;
  }
}
.graph{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card{
    width: 48%;
  }
}
</style>