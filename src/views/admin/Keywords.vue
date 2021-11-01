<template>
<div class="Keywords">
  <div class="Keywords_top">
    <a-button type="primary" @click="showModal">
      添加舆情关键词
    </a-button>
    <a-modal v-model="visible" title="添加舆情关键词" @ok="handleOk">
      <p class="eject">必须包含关键词:<input type="text" class="eject1" placeholder="必须包含关键词"></p>
      <p class="eject">可包含关键词:<input type="text" class="eject2" placeholder="可包含关键词"></p>
      <p class="eject">不包含关键词:<input type="text" class="eject2" placeholder="不包含关键词"></p>
      <p class="eject">监控频率:<input type="text" class="eject3" placeholder="监控频率"></p>
    </a-modal>
  </div>
  <a-table :columns="columns" 
      :data-source="listData" 
      :row-key="(record) => record.id"
      bordered>
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>

      <template slot="action" slot-scope="text">
        <a-button type="primary" @click="doEdit(text.key)">编辑</a-button>
        <a-button type="danger" class="search_btn">删除</a-button>
      </template>
    </a-table>
</div>
</template>

<script>
const columns = [
  {
    title: "必须包含关键词",
    dataIndex: "keyword",
    key: "keyword",
    width: 150,
  },
  {
    title: "可包含关键词",
    dataIndex: "may_keyword",
    key: "may_keyword",
    width: 150,
  },
  {
    title: "不包含关键词",
    dataIndex: "nokeyword",
    key: "nokeyword",
    width: 150,
  },
  {
    title: "监控频率",
    dataIndex: "frequency",
    key: "frequency",
    width: 160,
  },
  {
    title: "操作",
    scopedSlots: { customRender: "action" },
    key: "action",
    align:"center"
  }
];
const listData = [
  {
    id: 1,
    keyword: "大庆油田",
    may_keyword: "中国石油",
    nokeyword: "延长石油",
    frequency: "100",
  },
  {
    id: 2,
    keyword: "贪污",
    may_keyword: "腐败",
    nokeyword: "打腐败",
    frequency: "100",
  },
];
export default {
  name: 'Keywords',
  components: {
    
  },
  data() {
    return {
      visible:false,
      columns,
      listData
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    doEdit(key){
      console.log(key);
    },
  },
}
</script>

<style scoped>
.Keywords_top{
  padding: 20px 10px;
  text-align: left;
  background: #fffeed;
}
.eject{
  text-align: left;
}
.eject1{
  margin-left: 10px;
  width: 300px;
  height: 30px;
}
.eject2{
  margin-left: 24px;
  width: 300px;
  height: 30px;
}
.eject3{
  margin-left: 52px;
  width: 300px;
  height: 30px;
}
.search_btn{
  margin-left: 10px;
}
</style>
