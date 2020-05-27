<template>
  <div>
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <div>
      {{content}}
    </div>
  </div>
</template>

<script>
  import {getDemoinfo} from '@/api/demo'

  export default {
    components: {},
    data() {
      return {
        content: ""
      }
    },
    created() {
      getDemoinfo().then(res => {
        console.log(res.data)
        this.content = res.data.content;

      }).catch(error => {
        console.log("error", error)
      })
    }
  }
</script>

<style>

</style>

