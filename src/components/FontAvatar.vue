<script setup lang="ts">
defineProps<{
    word: string;
    size: number;
}>();
</script>

<template>
    <div :style="{
        width: size + 'rem',
        height: size + 'rem',
        lineHeight: size + 'rem',
        fontSize: size - 1 + 'rem',
        fontWeight: 'bolder',
    }" class="align-middle">{{ word.toUpperCase() }}</div>
</template>

<style scoped>
div {
    border-radius: 1rem;
    background-color: rgb(89, 103, 115);
    text-align: center;
}
</style>
