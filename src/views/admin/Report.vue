<template>
  <div class="Report">
    <div class="Report_top">
      <a-date-picker v-model="startTime" placeholder="请选择开始日期" />
        -
      <a-date-picker v-model="entTime" placeholder="请选择结束日期" />
      <a-button type="primary" class="search_btn">搜索</a-button>
    </div>  
    <a-table :columns="columns" 
      :data-source="addTop" 
      bordered 
      :row-key="(record) => record.id"
      :pagination="pagination"
      @change="changeReportData"
      :loading="loading">
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>

      <template slot="myType" slot-scope="text">
        <span v-if="text == 1">正面舆情</span>
        <span v-else>负面舆情</span>
      </template>

      <template #myUrl="text">
        <a :href="text" target="_blank">{{ text }}</a>
      </template>

      <template slot="myAddTime" slot-scope="text">
        <a>{{ formatTime(text) }}</a>
      </template>

      <template slot="action" slot-scope="text">
        <a-button type="primary" @click="doEdit(text.key)">编辑</a-button>
        <a-button type="danger" class="search_btn">删除</a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
import moment from 'moment';
const columns = [
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "舆情类型",
    dataIndex: "type",
    key: "type",
    width: 100,
    scopedSlots: { customRender: "myType" },
  },
  {
    title: "舆情关键词",
    dataIndex: "keywords",
    key: "keywords",
    width: 160,
  },
  {
    title: "舆情网站",
    dataIndex: "url",
    key: "url",
    width: 160,
    slots: { customRender: "myUrl" },
  },
  {
    title: "发现时间",
    dataIndex: "add_time",
    key: "add_time",
    scopedSlots: { customRender: "myAddTime" },
  },
];
export default {
  name: 'Report',
  data() {
    return {
      startTime:"",
      entTime:"",
      columns,
      pagination:{
        page:1,
        pageSize:5,
        total:10
      },
      listData:[],
      loading:false
    }
  },
  methods:{
    formatTime(value){
      const time = 'YYYY-MM-DD hh-mm-ss'
      return moment(value * 1000).format(time);
    },
    doEdit(key){
      console.log(key);
    },
    changeReportData({current}){
      // console.log(event);
      // 将新的页码，存在组件中
      this.pagination.page = current;
      // 使用组件中新的页码，发送请求
      this.getReportData();
    },
    getReportData(){
      this.loading=true;
      var api = "http://yuqing.itying.com/api/report?page="+this.pagination.page+'&pageSize='+this.pagination.pageSize
      this.$axios.get(api).then(({data}) => {
        console.log(data);
        this.listData = data.result;
        this.pagination.total = data.total;
        this.loading=false;
      });
    },
  },
  computed:{
    addTop(){
      const tab=this.$route.query.tap
        switch(tab){
          case '2':
            return  this.listData.map(item=>item)
          case '3':
            return this.listData.filter(item=>item.type=='1')
          default:
            return this.listData.filter(item=>item.type=='0')
      }
    }
  },
  mounted(){
    this.getReportData()
  }
}
</script>

<style scoped>
.Report_top{
  padding: 20px 10px;
  text-align: left;
  background: #fffeed;
}
.search_btn{
  margin-left: 10px;
}
</style>
