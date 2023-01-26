

<template  >
    <div class="relative h-full w-full bg-extra_light_purple">

        <img class="object-cover object-top h-3/4" :src="imageUrl" />

        <div class="absolute bottom-0 h-2/5  border-light_purple -left-px">
            <img class="object-cover " src="/Vector_7.svg" />
            <div class="flex flex-col h-full p-3 bg-light_purple gap-2">
                <h3 class=" text-3xl font-medium">{{ title }}</h3>
                <p class="text-slate-100">{{ description }}</p>
                <NuxtLink class="text-white underline" to="/">View Project</NuxtLink>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

