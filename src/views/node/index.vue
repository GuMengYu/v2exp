<template>
  <div>{{ id }}</div>
</template>
<script>
export default {
    name: 'Node',
    props: {
        id: {
            type: String,
            default: '',
        },
    },
};
</script>