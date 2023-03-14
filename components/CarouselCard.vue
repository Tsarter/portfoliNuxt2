

<template  >
    <div class="relative h-full w-full bg-extra_light_purple">

        <img class="object-cover object-top h-3/4" :src="imageUrl" />

        <div class="absolute bottom-0 h-2/5  border-light_purple -left-px">
            <img class="object-cover " src="/Vector_7.svg" />
            <div class="flex flex-col h-full p-3 bg-light_purple gap-2">
                <h3 class=" text-3xl font-medium">{{ title }}</h3>
            <p class="text-slate-100 ">{{ description }}</p>
            <!-- <NuxtLink class="text-white underline hover:text-slate-100"
                    to="/info">View Project <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="inline">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                <polyline points="12 5 19 12 12 19"></polyline>
                                                            </svg> </NuxtLink> -->
                <a class="text-white underline hover:text-slate-100" :href=url target="_blank">View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="inline">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg> </a>

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
        },
        url: {
            type: String,
            required: true
        }
    }
}
</script>

