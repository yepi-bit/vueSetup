<template>
    <div>
        <button @click="deSpeak()">播放</button>
    </div>
</template>

<script>
    export default {
        name: "Read",
        data() {
            return {}
        },
        methods: {
            deSpeak() {
                let speakText = '红红火火恍恍惚惚哈哈';
                const utterThis = new window.SpeechSynthesisUtterance(speakText);
                window.speechSynthesis.speak(utterThis);
            }
        }
    }
</script>

<style scoped>

</style>
