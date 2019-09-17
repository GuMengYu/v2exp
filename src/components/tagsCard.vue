<template>
    <v-card
        class="mx-auto"
        :flat="true"
        :loading="loading"
    >
        <v-card-title v-text="title"/>
        <v-divider></v-divider>
        <div class="subject-list">
        <v-btn 
            x-small 
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
        },
        loading: false,
    },
}
</script>
<style lang="less" scoped>
.v-card__title {
    padding: 10px 10px 5px 10px;
    font-size: 1em;
}
.subject-list {
    padding: 10px;
    button {
    margin: 0 7px 7px 0;
    }
}
</style>