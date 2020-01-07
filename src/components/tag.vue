<template>
    <v-chip :color="options.color" :to="`/node/${options.id}`">
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
                color: '',
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