<template>
    <div class="right-nav">
        <hot-list title="热议主题" :data="nodeData.hotTopics" :loading="loading"/>
        <tags-cloud title="热门节点" :data="nodeData.hotNodes" :loading="loading"/>
        <tags-cloud title="新增节点" :data="nodeData.newNodes" :loading="loading"/>
    </div>
</template>
<script>
import TagsCloud from '@/components/tagsCloud';
import HotList from '@/components/hotList';

import {getToDayHot} from '@/util/service';

export default {
    components: {HotList, TagsCloud},
    data:() => ({
        nodeData: {},
        loading: false,
    }),
    mounted() {
        this.loading = true;
        getToDayHot().then(res => this.nodeData = res).finally(() => this.loading = false);
    }
}
</script>
<style lang="less">
.right-nav {
    padding-top: 45px;
}
</style>
