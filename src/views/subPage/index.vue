<template>
<v-container fluid>
    <v-row>
        <v-col lg="8" tag="main">
            <section>
                具體的
            </section>
        </v-col>
        <v-col lg="4" tag="aside">
            <tags-card :title="tag.title" :subjects="tag.subjects"/>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import TagsCard from '@/components/tagsCard';
export default {
    name: 'subPage',
    components: {TagsCard},
    data: () =>({
        tag: {
            title: '热点主题',
            subjects: [
            { label: '程序员', val: 'fun' },
            { label: 'py', val: 'fun' },
            { label: '有点东西', val: 'fun' },
            { label: 'NodeJs', val: 'fun' },
            { label: 'JAVA', val: 'fun' },
            { label: 'C++', val: 'fun' },
            { label: '前端', val: 'fun' },
            ],
        }
        
    }),
    mounted() {

    }, 
}
</script>
<style lang="less" scoped>

</style>