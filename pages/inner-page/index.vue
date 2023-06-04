<template>
  <div>
    <BreadCrumbs title="Inner Page"/>
    <InnerContent/>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/common/BreadCrumbs.vue'
import InnerContent from '@/components/page/innerPage/InnerContent.vue'
export default {
  name: 'InnerPage',
  layout:'main',
  components:{
    BreadCrumbs,
    InnerContent
  },
}
</script>