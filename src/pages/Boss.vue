<template>
  <div class="admin-container">
    <!-- 左侧用户列表 -->
    <div class="admin-left">
      <div class="user-header">
        <h2 class="panel-title">用户管理</h2>
        <el-input
          v-model="searchQuery"
          placeholder="搜索用户..."
          prefix-icon="el-icon-search"
          class="search-input"
        />
      </div>
      <el-scrollbar class="user-list-scroll">
        <div
          v-for="user in filteredUsers"
          :key="user.id"
          class="user-card"
          @click="selectUser(user)"
        >
          <div class="user-info">
            <el-avatar :src="user.avtar" :size="50" class="user-avatar" />
            <div class="user-details">
              <h3 class="username">{{ user.username }}</h3>
              <p class="last-login">最后活跃: {{ user.lastLogin }}</p>
            </div>
          </div>
          <div class="usage-indicator">
            <div
              class="progress-bar"
              :style="{ width: user.usagePercentage + '%' }"
            />
            <span class="usage-text">{{ user.useTime }}分钟</span>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <!-- 右侧模型统计 -->
    <div class="admin-right">
      <h2 class="panel-title">模型使用统计</h2>
      <el-tooltip effect="dark" content="退出登录" placement="top">
        <img
          src="@/assets/image/Home/tuichudenglu.png"
          class="exit"
          @click="exit"
        />
      </el-tooltip>
      <div class="back" v-if="isSelect">
        <div class="user-profile">
          <el-avatar :src="nowUser.avtar" :size="80" class="detail-avatar" />
          <div class="profile-info">
            <h2 class="user-name">用户名：{{ nowUser.username }}</h2>
            <h3 class="user-name">密码：{{ nowUser.password }}</h3>
            <p class="total-usage">总使用时长: {{ nowUser.useTime }} 分钟</p>
          </div>
        </div>
        <el-button
          type="primary"
          icon="el-icon-arrow-left"
          @click="isSelect = false"
          >返回总览</el-button
        >
      </div>

      <div class="stats-container">
        <!-- 总览卡片 -->
        <div class="stats-card total-usage">
          <div class="card-icon">
            <i class="el-icon-time" />
          </div>
          <div class="card-content" v-if="!isSelect">
            <h3>总使用 token 数</h3>
            <p class="stats-number">{{ totalTokens }} 个 token</p>
          </div>
          <div class="card-content" v-if="isSelect">
            <h3>总使用时长</h3>
            <p class="stats-number">{{ nowUser.useTime }} 分钟</p>
          </div>
        </div>

        <!-- 模型图表 -->
        <div class="chart-container" v-if="!isSelect">
          <div class="chart-card">
            <div ref="usageChart" class="chart"></div>
          </div>
        </div>
        <div class="chart-container" v-if="isSelect">
          <div class="chart-card">
            <div ref="userChart" class="chart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as echarts from "echarts";
import { nextTick } from "vue";

export default {
  name: "Boss",
  data() {
    return {
      searchQuery: "",
      isSelect: false,
      nowUser: {
        id: "",
        name: "",
        avtar: "",
        useTime: "",
        usagePercentage: "",
        lastLogin: "",
        models: [],
      },
      users: [],

      models: [],
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    totalTokens() {
      return this.models.reduce((sum, m) => sum + m.tokenTotal, 0);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
    this.computedToken();
    this.getUser();
    this.getToken();
  },
  methods: {
    initChart() {
      const chartDom = this.$refs.usageChart;
      if (chartDom) {
        const chart = echarts.init(chartDom);
        const option = {
          backgroundColor: "#fff",
          color: ["#6B8DD6", "#FFB347", "#4ECDC4", "#FF6B6B", "#79A6D2"],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} 个 token ({d}%)",
            backgroundColor: "rgba(255,255,255,0.95)",
          },
          legend: {
            orient: "vertical",
            left: "right",
            textStyle: {
              color: "#666",
            },
          },
          series: [
            {
              name: "模型使用分布",
              type: "pie",
              top: "20%",
              radius: ["40%", "70%"],
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
              },
              data: this.models.slice(0, 5).map((m) => ({
                value: m.tokenTotal,
                name: m.agentName,
              })),
            },
          ],
        };
        chart.setOption(option);
      }
    },
    computedToken() {
      for (const user of this.users) {
        // 遍历用户使用的每个模型
        for (const userModel of user.models) {
          // 找到全局模型列表中对应的模型
          const globalModel = this.models.find(
            (model) => model.tokenTotal === userModel.tokenTotal
          );
          if (globalModel) {
            // 累加 token 数量
            globalModel.tokens += userModel.tokens;
          }
        }
      }
    },
    getColor(modelName) {
      const colors = {
        "GPT-4": "linear-gradient(135deg, #6B8DD6, #8E5BEF)",
        "Stable Diffusion": "linear-gradient(135deg, #FFB347, #FF6B6B)",
        Claude: "linear-gradient(135deg, #4ECDC4, #45B649)",
      };
      return colors[modelName];
    },
    selectUser(user) {
      // 这里可以添加用户详情逻辑
      if (this.isSelect) {
      } else {
        this.isSelect = true;
      }
      this.nowUser = user;
      console.log(this.nowUser);
      this.initChart(); // 重新调用 initChart 方法来更新 ECharts 图
    },
    getUser() {
      axios
        .post(
          `${this.$baseUrl}root/selectUser`,
          {},
          {
            headers: {
              token: `${this.$store.state.token}`,
            },
          }
        )
        .then((res) => {
          this.$set(this, "users", res.data);
          this.users.forEach((user) => {
            this.getUserDetail(user.id); // 假设用户对象中有 id 属性
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getToken() {
      axios
        .post(
          `${this.$baseUrl}root/modelFrequency`,
          {},
          {
            headers: {
              token: `${this.$store.state.token}`,
            },
          }
        )
        .then((res) => {
          this.$set(this, "models", res.data);
          console.log(this.models);

          this.initChart();
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getUserDetail(id) {
      const formData = new FormData();
      formData.append("userId", id);
      axios
        .post(`${this.$baseUrl}root/userDetail`, formData, {
          headers: {
            token: `${this.$store.state.token}`,
          },
        })
        .then((res) => {
          const index = this.users.findIndex((user) => user.id === id);

          if (index !== -1) {
            // 修改对象的属性，这里以修改 name 属性为例
            this.$set(this.users[index], "lastLogin", res.data.lastLogin);
            this.$set(
              this.users[index],
              "usagePercentage",
              res.data.usagePercentage
            );
            this.$set(this.users[index], "avtar", res.data.avtar);
            this.$set(this.users[index], "useTime", res.data.useTime);
          }

          this.nowUser = res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    changePage(name) {
      if (this.$store.state.token === "") {
        this.$bus.$emit("c-Login", "Login");
      } else {
        this.$bus.$emit("c-" + name, name);
      }
    },
    exit(){
      this.changePage('Login')
        this.$store.dispatch("setAdmin", '');
        this.$store.dispatch("setToken", '');
    },
       
  },
};
</script>

<style lang="scss" scoped>
.admin-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 20px;
  gap: 20px;
}

.user-detail-header {
  margin-bottom: 30px;

  .back-btn {
    margin-bottom: 20px;
    padding: 10px 20px;
  }

  .user-profile {
    display: flex;
    align-items: center;
    padding: 20px;
    background: rgba(245, 247, 250, 0.8);
    border-radius: 12px;

    .detail-avatar {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .profile-info {
      margin-left: 20px;

      .user-name {
        margin: 0 0 8px 0;
        color: #2c3e50;
      }

      .total-usage {
        margin: 0;
        color: #7f8c8d;
        font-size: 14px;
      }
    }
  }
}

// 左侧样式
.admin-left {
  flex: 0 0 380px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  .user-header {
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .search-input {
    margin-top: 15px;

    ::v-deep .el-input__inner {
      border-radius: 25px;
      padding-left: 40px;
    }
  }
}

.user-list-scroll {
  height: calc(100% - 90px);
}

.user-card {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(245, 247, 250, 0.8);
    transform: translateX(5px);
  }

  .user-info {
    display: flex;
    align-items: center;

    .user-avatar {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .user-details {
      margin-left: 15px;

      .username {
        margin: 0;
        font-size: 16px;
        color: #2c3e50;
        font-weight: 600;
      }

      .last-login {
        margin: 5px 0 0;
        font-size: 12px;
        color: #95a5a6;
      }
    }
  }

  .usage-indicator {
    margin-top: 10px;
    position: relative;

    .progress-bar {
      height: 6px;
      background: linear-gradient(90deg, #6b8dd6, #8e5bef);
      border-radius: 3px;
      transition: width 0.5s ease;
    }

    .usage-text {
      position: absolute;
      right: 0;
      top: -22px;
      font-size: 12px;
      color: #7f8c8d;
    }
  }
}

// 右侧样式
.admin-right {
  flex: 1;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  padding: 20px;
  position: relative;
}

.back {
  margin-bottom: 1em;
  display: flex;
  transition: 0.3s;

  button {
    position: absolute;
    top: 6em;
    right: 4em;
  }
}

.user-detail-header {
  margin-bottom: 30px;

  .back-btn {
    margin-bottom: 20px;
    padding: 10px 20px;
  }

  .user-profile {
    display: flex;
    align-items: center;
    padding: 20px;

    background: rgba(245, 247, 250, 0.8);
    border-radius: 12px;

    .detail-avatar {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .profile-info {
      margin-left: 20px;

      .user-name {
        margin: 0 0 8px 0;
        color: #2c3e50;
      }

      .total-usage {
        margin: 0;
        color: #7f8c8d;
        font-size: 14px;
      }
    }
  }
}

.panel-title {
  color: #2c3e50;
  font-size: 22px;
  margin: 0 0 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(108, 122, 137, 0.1);
}

.stats-container {
  transition: 0.3s;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.stats-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  &.total-usage {
    background: linear-gradient(135deg, #6b8dd6, #8e5bef);
    color: white;

    .card-icon {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .card-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-right: 20px;
  }

  .stats-number {
    font-size: 28px;
    font-weight: 700;
    margin: 10px 0 0;
  }
}

.chart-container {
  margin-top: 30px;

  .chart-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    background: white !important; // 确保背景为白色
    border: 1px solid #eee; // 添加浅色边框

    .chart {
      height: 400px;
    }
  }
}
.exit{
  width: 24px;
  cursor: pointer;
  position: absolute;
  right: 40px;
  top: 27px;
}
</style>
