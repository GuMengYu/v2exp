<template>
 <v-container>
     {{meta.title}}
 </v-container>
</template>

<script>
export default {
    props: {
        meta: {
            type: Object,
        }
    },
    created() {
        console.log(this.meta.title + 'created');
    },
    methods: {

    },
}
</script>

<style>

</style>