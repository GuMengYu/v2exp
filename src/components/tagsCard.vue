<template>
    <v-card
        class="mx-auto"
        :flat="true"
        color="#f0f0f0"
    >
        <v-card-title v-text="title"/>
        <v-divider></v-divider>
        <div class="subject-list">
        <v-btn 
            small 
            v-for="(subject, index) in subjects"
            v-text="subject.label"
            :key="index" 
            :outlined="true" 
            :rounded="true"
        />
        </div>
    </v-card>
</template>
<script>
export default {
    name: 'tags-card',
    props: {
        title: '',
        subjects: {
            type: Array,
            default: [],
        }
    },
}
</script>
<style lang="less" scoped>
.subject-list {
    padding: 5px;
    button {
    margin: 0 7px 7px 0;
    }
}
</style>