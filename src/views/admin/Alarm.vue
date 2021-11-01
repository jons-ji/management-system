<template>
  <div class="Alarm">
     <div class="input-text">
        <span>报警电话:</span><input type="text"/>
      </div>
       <div class="input-text">
        <span>报警邮箱:</span><input type="text"/>
      </div>
      <button>保存</button>
  </div>
</template>

<script>
export default {
  name: 'Alarm',
  components: {
    
  }
}
</script>

<style scoped>
.Alarm{
  text-align: left;
  width: 100%;
}
.input-text span{
  width: 20%;
}
.input-text input{
  width: 90%;
  margin: 10px 0;
}
.Alarm button{
  position: absolute;
  right: 8%;
  width: 60px;
  height: 30px;
  background: blue;
  text-align: center;
  color: #fff;
}
</style>
