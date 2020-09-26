<template>
    <v-chip :color="options.color" :to="`/node/${options.id}`" outlined label class="v2-tag">
        {{options.label}}
    </v-chip>
</template>
<script>
export default {
    name: 'tag',
    props: {
        options: {
            type: Object,
            default: () => ({
                label: '',
                color: '#fff',
                id: '',
            }),
        }
    },
    methods: {
        go() {
            this.$router.push({name: 'node', id: this.options.id});
        },
    }
}
</script>
<style lang="less" scoped>
.v2-tag {
    border-color: rgba(0, 0, 0, 0.3) !important;
}
</style>