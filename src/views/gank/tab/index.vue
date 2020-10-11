<template>
 <section class="list-home">
     <article v-for="(o, i) in list" :key="i" class="list-item">
        <tab-item :data="o"/>
     </article>
 </section>
</template>

<script>
import tabItem from './tab-item';
import gankService from '@/util/gankService';

export default {
    components: {tabItem},
    props: {
        tabId: {
            type: String,
            default: 'Girl',
        }
    },
    data: () => ({
        page: 1,
        size: 10,
        list: [],
    }),
    created() {
        const params = {
            type: this.tabId,
            page: this.page,
            size: this.size,
        };
        const fetch = this.tabId === 'Girl' 
        ? gankService.gankGirls.bind(0, params) 
        : gankService.ganHuoData.bind(0, params);

        fetch().then(res => {
            this.list = res;
        })
    },
    methods: {
    },
}
</script>

<style lang="less" scoped>
.list-home {
    box-sizing: border-box;
    margin-top: 1.5rem;
    .list-item {
        margin-bottom: 1.5rem;
    }
}
</style>>