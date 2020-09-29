<template>
 <v-container>
     
 </v-container>
</template>

<script>
import tabItem from './tab-item';
import gankService from '@/util/gankService';

export default {
    props: {
        tabId: {
            type: String,
            default: 'ios',
        }
    },
    data: () => ({
        page: 1,
        size: 10,
    }),
    created() {
        gankService.getTypeData({
            type: this.tabId,
            page: this.page,
            size: this.size,
        }).then(res => {
            console.log(res);
        })
    },
    methods: {
    },
}
</script>

<style lang="less" scoped>

</style>>