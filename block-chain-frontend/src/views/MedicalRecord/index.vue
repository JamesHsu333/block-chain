<template lang="pug">
    .card-container
        el-card.card(v-if="isShowed")
            .clearfix(slot="header")
                span
                 | 病歷
            .item(v-for="key in record" :key="key")
             | {{ key }}
        el-card.card(v-else)
            h3
                i(class="el-icon-warning" style="font-size: 24px")
                | 尚未驗證病患智慧卡或操作逾時，請重新讀取病患智慧卡
        
</template>
<script>
import { postRequest } from "./../../api/request";
import { Message } from "element-ui";
export default {
  data() {
    return {
      record: {},
      isShowed: false
    };
  },
  async created() {
    this.getRecord()
    try {
      let res = await postRequest({
        staffName: "Ven",
        staffID: "114514",
        patientName: "Ricardo",
        patientID: "1145140",
        destination: "sss",
        origin: "ssss"
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    getRecord() {
      this.record = this.$store.getters.record;
      console.log(this.record.id);
      if (this.record.id) {
        this.isShowed = true;
      } else {
        Message.error("尚未驗證病患智慧卡或操作逾時，請重新讀取病患智慧卡");
      }
    }
  }
};
</script>
<style lang="scss">
.card-container {
  padding-top: 120px;
  min-height: 100%;
  overflow: hidden;
  .card {
    position: relative;
    width: 550px;
    max-width: 100%;
    padding: 15px 0;
    margin: auto;
  }
}
.item {
  margin-bottom: 18px;
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