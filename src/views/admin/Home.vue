<template>
  <div>
    <div id="pieContainer" style="width:100%;height:400px"></div>
    <div id="clumnContainer" style="width:100%;height:400px"></div>
  </div>
</template>
<script>
import * as Highcharts from 'highcharts';
export default{
  name:'Home',
  components:{ 
    
  },
  methods:{
    pieFn(){
      Highcharts.chart('pieContainer', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: '舆情关键词布图'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: '天然气分公司',
              y: 5.59,
              sliced: true,
              selected: true
          }, {
              name: '中国石油',
              y: 8.33,
          }, {
              name: '延长石油',
              y: 6.96,
          }, {
              name: '大庆石油',
              y: 9.86,
          }]
      }]
      });
    },
    columnFn(){
      Highcharts.chart('clumnContainer', {
        chart: {
          type: 'column'
        },
        title: {
          text: '舆情分布'
        },
        xAxis: {
          categories: ['一月', '二月', '三月', '四月', '五月','六月', '七月', '八月', '九月', '十月']
        },
        yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
            text: '舆情数'
          }
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
              this.series.name + ': ' + this.y + '<br/>' +
              '总量: ' + this.point.stackTotal;
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal'
          }
        },
        series: [{
          name: '正面舆情',
          data: [60,80,112,123,150,180,130,153,263,193],
          stack: 'male' // stack 值相同的为同一组
        }, {
          name: '负面舆情',
          data: [90,85,98,93,113,88,108,105,96,83],
          stack: 'female'
        }]
      });
    }
  },
  mounted(){
    this.pieFn();
    this.columnFn();
  }
}
</script>
<style lang="scss">


</style>
