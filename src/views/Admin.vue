<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" v-model="optionKey">
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="home" /><span>起始页</span></span>
          <a-menu-item key="1">
            <router-link to='/'>后台首页</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="bar-chart" /><span>舆情报告</span></span>
          <a-menu-item key="2">
            <router-link :to="{name:'Report',query:{tap:'2'}}">全部舆情</router-link>
          </a-menu-item>
          <a-menu-item key="3">
             <router-link :to="{name:'Report',query:{tap:'3'}}">正面舆情</router-link>
          </a-menu-item>
          <a-menu-item key="4">
             <router-link :to="{name:'Report',query:{tap:'4'}}">负面舆情</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="setting" theme="filled" /><span>舆情设置</span></span>
          <a-menu-item key="5">
            <router-link to='/keywords'>舆情关键词设置</router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <router-link to='/Alarm'>舆情报警设置</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <router-link to="/login" class="sign_out">退出</router-link>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
// import { BarChartOutlined,HomeOutlined,MenuUnfoldOutlined, MenuFoldOutlined,SettingOutlined} from "@ant-design/icons-vue";

export default {
  data() {
    return {
      collapsed: false,
      optionKey:['sub1']
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.sign_out{
  float: right;
  margin-right: 20px;
}
</style>
