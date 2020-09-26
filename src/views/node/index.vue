<template>
    <div>{{id}}</div>
</template>
<script>
export default {
    name: 'node',
    props: {
        id: {
            type: String,
            default: '',
        }
    }
}
</script>