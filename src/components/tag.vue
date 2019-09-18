<template>
    <v-btn 
        x-small 
        v-text="options.label"
        :outlined="true" 
        :rounded="true"
        :color="options.color"
        @click="go"
    /> 
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
            this.$router.push({name: 'nodePage', id: this.options.id});
        },
    }
}
</script>