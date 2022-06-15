<template>
    <p>Reaction Time: {{ score }} ms</p>
    <p class="rank"> {{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,
        }
    },
    mounted(){
        if(this.score < 250){
            this.rank = "Your are fast";
        }
        else if(this.score < 400){
            this.rank = "Your are ok";
        }
        else{
            this.rank = "Your are slow";
        }
    },
    }
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>