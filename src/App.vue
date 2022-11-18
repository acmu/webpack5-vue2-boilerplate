<template>
    <div class="box">
        <div
            class="text"
        >
            num {{ num }}
        </div>
        <button @click="click">
            add
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1
        }
    },
    methods: {
        click() {
            this.num+=1
            console.log('zmy',this.c?.d)
        }
    },
}
</script>

<style lang="scss" scoped>
.box {
    .text {
        color: red;
    }
}
</style>