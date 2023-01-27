<template>
    <h1>{{ slug }}</h1>
</template>

<script>
export default {
    async asyncData({ params }) {
        console.log(params);
        const slug = params.info // When calling /abc the slug will be "abc"
        return { slug }
    }
}
</script>