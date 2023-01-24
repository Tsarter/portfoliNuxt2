

<template  >
    <div class="relative h-full w-full">
        <img class="object-cover object-top h-full" :src="imageUrl" />
        <div class="absolute bottom-0 h-2/5 w-full bg-dark-transparent rounded-t-lg p-3">
            <h3 class="text-3xl">Tobo</h3>
            <p>Comparing made simple</p>
            <span class="text-sm rounded-lg  bg-gradient-to-r from-indigo-500 to-indigo-800 p-1.5">Figma</span><span
                class="text-xs rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 p-1.5">HTML5UP</span><span
                class="text-xs rounded-lg bg-gradient-to-r from-green-900 to-green-800 p-1.5">Mockups</span>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    }
}
</script>

