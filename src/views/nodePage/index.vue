<template>
    <div>{{id}}</div>
</template>
<script>
export default {
    name: 'nodePage',
    props: {
        id: {
            type: String,
            default: '',
        }
    }
}
</script>