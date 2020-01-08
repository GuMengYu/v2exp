<template>
    <div class="right-nav">
        <tags-card title="热议主题" :data="nodeData.hotTopics" :loading="loading" type="topic"/>
        <tags-card title="热门节点" :data="nodeData.hotNodes" :loading="loading"/>
        <tags-card title="新增节点" :data="nodeData.newNodes" :loading="loading"/>
    </div>
</template>
<script>
import TagsCard from '@/components/tagsCard';
import Service from '@/util/service';

export default {
    components: {TagsCard},
    data:() => ({
        nodeData: {},
        loading: false,
    }),
    mounted() {
        this.loading = true;
        Service.getNodes().then(res => this.nodeData = res).finally(() => this.loading = false);
    }
}
</script>
<style lang="less">
.right-nav {
    padding-top: 45px;
}
</style>
