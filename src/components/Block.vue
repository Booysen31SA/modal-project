<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      click Me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    mounted() {
        console.log("Component is Mounted");
        setTimeout(() => {
            this.showBlock = true;
            console.log("Timeout is done: " + this.delay);
            this.startTimer();
        }, this.delay);
    },
    methods:{
        startTimer() {
            console.log("Start Timer");
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            console.log("Stop Timer");
            clearInterval(this.timer);
            this.$emit('end', this.reactionTime);
        }
    }
    }
</script>

<style>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>